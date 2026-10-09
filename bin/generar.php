<?php

declare(strict_types=1);

/**
 * Genera las constantes de cada lenguaje a partir de catalogo/permisos.json.
 *
 * El JSON es la única fuente de verdad. Los archivos generados se commitean
 * para que cada consumidor los use sin correr nada:
 *
 *   php/src/Permissions.php  enum para Symfony / Laravel (composer)
 *   php/src/Catalogo.php     roles del catálogo y sentencias SQL para PHP
 *   js/permisos.js           constantes para Vue / JS
 *   go/permisos.go           constantes para Go
 *   go/sincronizar.go        esquema y sincronización para Go
 *   sql/sincronizar.sql      sincroniza roles y permisos en cualquier base
 *
 * Uso:
 *   php bin/generar.php              regenera los archivos
 *   php bin/generar.php --verificar  falla si algún archivo no coincide con el JSON
 */

$raiz = dirname(__DIR__);
$catalogo = json_decode((string) file_get_contents("$raiz/catalogo/permisos.json"), true, 512, JSON_THROW_ON_ERROR);
$permisos = $catalogo['permisos'];
$prefijo = $catalogo['prefijo_atributo'];

$roles = $catalogo['roles'] ?? [];
validarRolesCatalogo($roles);
validar($permisos, array_keys($catalogo['modulos']), $catalogo['roles_por_modulo'] ?? [], array_column($roles, 'slug'));
$permisos = resolverRolesIniciales($permisos, $catalogo['roles_por_modulo'] ?? []);

$version = $catalogo['version'];
$sqlSincronizar = generarSqlSincronizar($roles, $permisos, $version);
$sqlEsquema = (string) file_get_contents("$raiz/sql/esquema.sql");

$salidas = [
    "$raiz/php/src/Permissions.php" => generarPhp($permisos, $prefijo, $version),
    "$raiz/php/src/Catalogo.php" => generarPhpCatalogo($roles, $version),
    "$raiz/js/permisos.js" => generarJs($permisos, $prefijo, $version),
    "$raiz/go/permisos.go" => generarGo($permisos, $prefijo, $version),
    "$raiz/go/sincronizar.go" => generarGoSincronizar($sqlEsquema, $sqlSincronizar, $version),
    "$raiz/sql/sincronizar.sql" => $sqlSincronizar,
];

$verificar = in_array('--verificar', $argv, true);
$desactualizados = [];

foreach ($salidas as $archivo => $contenido) {
    if ($verificar) {
        if (!is_file($archivo) || file_get_contents($archivo) !== $contenido) {
            $desactualizados[] = substr($archivo, strlen($raiz) + 1);
        }
        continue;
    }

    file_put_contents($archivo, $contenido);
    echo 'Generado ' . substr($archivo, strlen($raiz) + 1) . PHP_EOL;
}

if ($verificar) {
    if ($desactualizados) {
        fwrite(STDERR, 'Desactualizados respecto de catalogo/permisos.json: ' . implode(', ', $desactualizados) . PHP_EOL);
        fwrite(STDERR, 'Correr: php bin/generar.php' . PHP_EOL);
        exit(1);
    }
    echo 'OK: ' . count($permisos) . ' permisos, archivos generados al día.' . PHP_EOL;
}

/**
 * @param list<array{slug:string,nombre:string,descripcion:string,modulo:string,grupo:string,roles?:list<string>}> $permisos
 * @param list<string> $modulos
 * @param array<string, list<string>> $rolesPorModulo
 * @param list<string> $rolesExistentes
 */
function validar(array $permisos, array $modulos, array $rolesPorModulo, array $rolesExistentes): void
{
    $vistos = [];
    $nombres = [];

    foreach ($rolesPorModulo as $modulo => $roles) {
        if (!in_array($modulo, $modulos, true)) {
            throw new RuntimeException("Módulo desconocido en roles_por_modulo: $modulo");
        }
        validarRoles($roles, "roles_por_modulo.$modulo", $rolesExistentes);
    }

    foreach ($permisos as $permiso) {
        foreach (['slug', 'nombre', 'descripcion', 'modulo', 'grupo'] as $campo) {
            if (!isset($permiso[$campo]) || '' === trim((string) $permiso[$campo])) {
                throw new RuntimeException("Permiso sin '$campo': " . json_encode($permiso, JSON_UNESCAPED_UNICODE));
            }
        }

        $slug = $permiso['slug'];

        if (!preg_match('/^[a-z][a-z0-9_-]*(\.[a-z][a-z0-9_-]*)+$/', $slug)) {
            throw new RuntimeException("Slug inválido: $slug (formato modulo.accion, minúsculas, sin tildes)");
        }
        if (isset($vistos[$slug])) {
            throw new RuntimeException("Slug repetido: $slug");
        }
        if (!in_array($permiso['modulo'], $modulos, true)) {
            throw new RuntimeException("Módulo desconocido en $slug: {$permiso['modulo']}");
        }

        if (isset($permiso['roles'])) {
            validarRoles($permiso['roles'], "$slug.roles", $rolesExistentes);
        }

        $caso = nombreCaso($slug);
        if (isset($nombres[$caso])) {
            throw new RuntimeException("$slug y {$nombres[$caso]} generan el mismo nombre de constante ($caso)");
        }

        $vistos[$slug] = true;
        $nombres[$caso] = $slug;
    }
}

/** Cada rol referenciado tiene que estar definido en "roles" del catálogo. */
function validarRoles(mixed $roles, string $donde, array $rolesExistentes): void
{
    if (!is_array($roles) || !array_is_list($roles)) {
        throw new RuntimeException("$donde tiene que ser una lista de slugs de rol");
    }
    foreach ($roles as $rol) {
        if (!in_array($rol, $rolesExistentes, true)) {
            throw new RuntimeException("Rol desconocido en $donde: " . json_encode($rol) . ' (definirlo en "roles")');
        }
    }
}

/**
 * @param list<array{slug:string,nombre:string,sistema:string,orden:int,rol_legacy?:string,equivalentes_legacy?:list<string>}> $roles
 */
function validarRolesCatalogo(array $roles): void
{
    $vistos = [];
    foreach ($roles as $rol) {
        foreach (['slug', 'nombre', 'sistema'] as $campo) {
            if (!isset($rol[$campo]) || '' === trim((string) $rol[$campo])) {
                throw new RuntimeException("Rol sin '$campo': " . json_encode($rol, JSON_UNESCAPED_UNICODE));
            }
        }
        if (!preg_match('/^[a-z][a-z0-9_]*$/', $rol['slug'])) {
            throw new RuntimeException("Slug de rol inválido: {$rol['slug']}");
        }
        if (!in_array($rol['sistema'], ['pin', 'gestion'], true)) {
            throw new RuntimeException("Sistema inválido en el rol {$rol['slug']}: {$rol['sistema']}");
        }
        if (!is_int($rol['orden'] ?? null)) {
            throw new RuntimeException("Rol {$rol['slug']} sin 'orden' entero");
        }
        if (isset($vistos[$rol['slug']])) {
            throw new RuntimeException("Rol repetido: {$rol['slug']}");
        }
        $vistos[$rol['slug']] = true;
    }
}

/**
 * Roles que reciben el permiso cuando aparece por primera vez: los propios del
 * permiso más los de su módulo en roles_por_modulo.
 */
function resolverRolesIniciales(array $permisos, array $rolesPorModulo): array
{
    foreach ($permisos as &$p) {
        $roles = array_merge($p['roles'] ?? [], $rolesPorModulo[$p['modulo']] ?? []);
        $p['roles'] = array_values(array_unique($roles));
    }

    return $permisos;
}

/** cliente.operar_como -> ClienteOperarComo */
function nombreCaso(string $slug): string
{
    return implode('', array_map('ucfirst', preg_split('/[._-]/', $slug)));
}

/** cliente.operar_como -> CLIENTE_OPERAR_COMO */
function nombreConstante(string $slug): string
{
    return strtoupper((string) preg_replace('/[._-]/', '_', $slug));
}

function php(string $texto): string
{
    return "'" . str_replace(['\\', "'"], ['\\\\', "\\'"], $texto) . "'";
}

function generarPhp(array $permisos, string $prefijo, string $version): string
{
    $casos = '';
    $nombres = '';
    $descripciones = '';
    $modulos = '';
    $grupos = '';
    $roles = '';

    foreach ($permisos as $p) {
        $caso = nombreCaso($p['slug']);
        if ([] !== $p['roles']) {
            $roles .= "            self::$caso => [" . implode(', ', array_map('php', $p['roles'])) . "],\n";
        }
        $casos .= "    case $caso = " . php($p['slug']) . ";\n";
        $nombres .= "            self::$caso => " . php($p['nombre']) . ",\n";
        $descripciones .= "            self::$caso => " . php($p['descripcion']) . ",\n";
        $modulos .= "            self::$caso => " . php($p['modulo']) . ",\n";
        $grupos .= "            self::$caso => " . php($p['grupo']) . ",\n";
    }

    return <<<PHP
<?php

declare(strict_types=1);

// Generado por bin/generar.php a partir de catalogo/permisos.json (versión $version).
// No editar a mano: cambiar el JSON y volver a generar.

namespace Famiq\\PinPermisos;

/**
 * Catálogo de permisos de la PIN.
 *
 *     \$this->isGranted(Permissions::ClienteOperarComo->attr());
 *     #[IsGranted('PERM_cliente.operar_como')]
 *     {% if is_granted('PERM_cliente.operar_como') %}
 */
enum Permissions: string
{
    /** Versión del catálogo. */
    public const VERSION = '$version';

    /** Prefijo de los atributos de seguridad, para distinguir permisos de roles. */
    public const PREFIJO = '$prefijo';

$casos
    /** El atributo tal como se pregunta en isGranted(), IsGranted y is_granted(). */
    public function attr(): string
    {
        return self::PREFIJO . \$this->value;
    }

    public static function tryFromAttr(string \$atributo): ?self
    {
        if (!str_starts_with(\$atributo, self::PREFIJO)) {
            return null;
        }

        return self::tryFrom(substr(\$atributo, strlen(self::PREFIJO)));
    }

    /** Nombre visible en el ABM. */
    public function nombre(): string
    {
        return match (\$this) {
$nombres        };
    }

    public function descripcion(): string
    {
        return match (\$this) {
$descripciones        };
    }

    /** Módulo: 'pin' o 'gestion'. Se guarda en permissions.type. */
    public function modulo(): string
    {
        return match (\$this) {
$modulos        };
    }

    /** Agrupador para mostrar el catálogo. */
    public function grupo(): string
    {
        return match (\$this) {
$grupos        };
    }

    /**
     * Slugs de los roles que reciben el permiso cuando se crea en la base.
     * Después se administra desde gestion: no se vuelve a aplicar.
     *
     * @return list<string>
     */
    public function rolesIniciales(): array
    {
        return match (\$this) {
$roles            default => [],
        };
    }
}

PHP;
}

function generarJs(array $permisos, string $prefijo, string $version): string
{
    $constantes = '';
    foreach ($permisos as $p) {
        $constantes .= '  ' . nombreConstante($p['slug']) . ': ' . json_encode($p['slug']) . ",\n";
    }

    $sinRoles = array_map(static function (array $p): array {
        unset($p['roles']);

        return $p;
    }, $permisos);
    $catalogo = json_encode(array_values($sinRoles), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);

    return <<<JS
// Generado por bin/generar.php a partir de catalogo/permisos.json (versión $version).
// No editar a mano: cambiar el JSON y volver a generar.

export const VERSION = '$version';

export const PREFIJO = '$prefijo';

/** Slugs de permisos. Uso: can(PERM.CLIENTE_OPERAR_COMO) */
export const PERM = Object.freeze({
$constantes});

export const CATALOGO = Object.freeze($catalogo);

JS;
}

function generarGo(array $permisos, string $prefijo, string $version): string
{
    // json_encode genera literales válidos en Go siempre que no escape las barras.
    $go = static fn (string $texto): string => json_encode($texto, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    $ancho = max(array_map(static fn (array $p): int => strlen(nombreCaso($p['slug'])), $permisos));

    $constantes = '';
    $catalogo = '';
    foreach ($permisos as $p) {
        $caso = nombreCaso($p['slug']);
        // Alineado como lo deja gofmt.
        $constantes .= "\t" . str_pad($caso, $ancho) . ' = ' . $go($p['slug']) . "\n";
        $catalogo .= "\t{Slug: $caso, Nombre: " . $go($p['nombre'])
            . ', Descripcion: ' . $go($p['descripcion'])
            . ', Modulo: ' . $go($p['modulo'])
            . ', Grupo: ' . $go($p['grupo']) . "},\n";
    }

    return <<<GO
// Generado por bin/generar.php a partir de catalogo/permisos.json (versión $version).
// No editar a mano: cambiar el JSON y volver a generar.

// Package permisos expone el catálogo de permisos de la PIN.
package permisos

// Versión del catálogo.
const Version = "$version"

// Prefijo de los atributos de seguridad en las aplicaciones Symfony.
const Prefijo = "$prefijo"

// Slugs de permisos.
const (
$constantes)

// Permiso describe una entrada del catálogo.
type Permiso struct {
	Slug        string
	Nombre      string
	Descripcion string
	Modulo      string
	Grupo       string
}

// Catalogo lista todos los permisos, en el orden del catálogo.
var Catalogo = []Permiso{
$catalogo}

// Existe indica si el slug pertenece al catálogo.
func Existe(slug string) bool {
	for _, permiso := range Catalogo {
		if permiso.Slug == slug {
			return true
		}
	}
	return false
}

GO;
}

/** Literal de string MySQL. */
function sql(?string $texto): string
{
    return null === $texto ? 'NULL' : "'" . str_replace(['\\', "'"], ['\\\\', "''"], $texto) . "'";
}

/**
 * Sincronización idempotente: crea los roles que faltan (sin tocar los
 * existentes), inserta los permisos nuevos con sus roles iniciales, actualiza
 * type/active de los existentes y desactiva los que ya no están. name y order
 * de un permiso existente se editan desde gestion: no se pisan.
 *
 * Cada sentencia termina en ';' al final de una línea (así la parten
 * Catalogo::sentencias() y permisos.Sentencias()).
 */
function generarSqlSincronizar(array $roles, array $permisos, string $version): string
{
    $tabla = "DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci";

    $filasRoles = [];
    foreach ($roles as $r) {
        $filasRoles[] = '(' . implode(', ', [sql($r['slug']), sql($r['nombre']), sql($r['sistema']), (int) $r['orden'], sql($r['rol_legacy'] ?? null)]) . ')';
    }

    $filasPermisos = [];
    $filasIniciales = [];
    foreach (array_values($permisos) as $orden => $p) {
        $filasPermisos[] = '(' . implode(', ', [sql($p['slug']), sql($p['nombre']), sql($p['modulo']), $orden]) . ')';
        foreach ($p['roles'] as $rol) {
            $filasIniciales[] = '(' . sql($p['slug']) . ', ' . sql($rol) . ')';
        }
    }

    $valores = static fn (array $filas): string => "    " . implode(",\n    ", $filas);

    return <<<SQL
-- Generado por bin/generar.php a partir de catalogo/permisos.json (versión $version).
-- No editar a mano: cambiar el JSON y volver a generar.
--
-- Sincroniza roles y permisos con el catálogo. Idempotente; va después de
-- esquema.sql. Nunca borra nada y no pisa lo que se administra desde gestion:
--   - roles: crea los que faltan; uno existente no se toca.
--   - permisos nuevos: se insertan y se asignan a sus roles iniciales (solo esa vez).
--   - permisos existentes: solo type y active. name y order se editan en gestion.
--   - permisos que ya no están en el catálogo: active = 0.
-- Al final devuelve una fila con lo que hizo.

START TRANSACTION;

DROP TEMPORARY TABLE IF EXISTS pin_permisos_roles;
CREATE TEMPORARY TABLE pin_permisos_roles (
    slug VARCHAR(60) NOT NULL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    `system` VARCHAR(20) NOT NULL,
    `order` INT NOT NULL,
    legacy_role VARCHAR(60) NULL
) $tabla;
INSERT INTO pin_permisos_roles (slug, name, `system`, `order`, legacy_role) VALUES
{$valores($filasRoles)};

DROP TEMPORARY TABLE IF EXISTS pin_permisos_catalogo;
CREATE TEMPORARY TABLE pin_permisos_catalogo (
    slug VARCHAR(80) NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(40) NOT NULL,
    `order` INT NOT NULL
) $tabla;
INSERT INTO pin_permisos_catalogo (slug, name, type, `order`) VALUES
{$valores($filasPermisos)};

DROP TEMPORARY TABLE IF EXISTS pin_permisos_iniciales;
CREATE TEMPORARY TABLE pin_permisos_iniciales (
    permiso VARCHAR(80) NOT NULL,
    rol VARCHAR(60) NOT NULL,
    PRIMARY KEY (permiso, rol)
) $tabla;
INSERT INTO pin_permisos_iniciales (permiso, rol) VALUES
{$valores($filasIniciales)};

DROP TEMPORARY TABLE IF EXISTS pin_permisos_nuevos;
CREATE TEMPORARY TABLE pin_permisos_nuevos (slug VARCHAR(80) NOT NULL PRIMARY KEY) $tabla;
INSERT INTO pin_permisos_nuevos (slug)
SELECT c.slug FROM pin_permisos_catalogo c
WHERE NOT EXISTS (SELECT 1 FROM permissions p WHERE p.slug = c.slug);

INSERT INTO roles (slug, name, `system`, `order`, legacy_role, active, created_at, updated_at)
SELECT r.slug, r.name, r.`system`, r.`order`, r.legacy_role, 1, NOW(), NOW()
FROM pin_permisos_roles r
WHERE NOT EXISTS (SELECT 1 FROM roles x WHERE x.slug = r.slug);
SET @roles_nuevos = ROW_COUNT();

INSERT INTO permissions (slug, name, type, active, `order`, created_at, updated_at)
SELECT c.slug, c.name, c.type, 1, c.`order`, NOW(), NOW()
FROM pin_permisos_catalogo c
JOIN pin_permisos_nuevos n ON n.slug = c.slug;
SET @permisos_nuevos = ROW_COUNT();

INSERT IGNORE INTO role_has_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM pin_permisos_iniciales i
JOIN pin_permisos_nuevos n ON n.slug = i.permiso
JOIN permissions p ON p.slug = i.permiso
JOIN roles r ON r.slug = i.rol;
SET @asignaciones = ROW_COUNT();

UPDATE permissions p
JOIN pin_permisos_catalogo c ON c.slug = p.slug
SET p.type = c.type, p.active = 1, p.updated_at = NOW()
WHERE p.type <> c.type OR p.active <> 1;
SET @permisos_actualizados = ROW_COUNT();

UPDATE permissions p
SET p.active = 0, p.updated_at = NOW()
WHERE p.active = 1
  AND NOT EXISTS (SELECT 1 FROM pin_permisos_catalogo c WHERE c.slug = p.slug);
SET @permisos_desactivados = ROW_COUNT();

DROP TEMPORARY TABLE pin_permisos_nuevos;
DROP TEMPORARY TABLE pin_permisos_iniciales;
DROP TEMPORARY TABLE pin_permisos_catalogo;
DROP TEMPORARY TABLE pin_permisos_roles;

COMMIT;

SELECT '$version' AS catalogo, @roles_nuevos AS roles_nuevos, @permisos_nuevos AS permisos_nuevos,
    @asignaciones AS asignaciones, @permisos_actualizados AS permisos_actualizados,
    @permisos_desactivados AS permisos_desactivados;

SQL;
}

function generarPhpCatalogo(array $roles, string $version): string
{
    $filas = '';
    foreach ($roles as $r) {
        $filas .= "            ['slug' => " . php($r['slug'])
            . ", 'nombre' => " . php($r['nombre'])
            . ", 'sistema' => " . php($r['sistema'])
            . ", 'orden' => " . (int) $r['orden']
            . ", 'rol_legacy' => " . (isset($r['rol_legacy']) ? php($r['rol_legacy']) : 'null')
            . ", 'equivalentes_legacy' => [" . implode(', ', array_map('php', $r['equivalentes_legacy'] ?? [])) . "]],\n";
    }

    return <<<PHP
<?php

declare(strict_types=1);

// Generado por bin/generar.php a partir de catalogo/permisos.json (versión $version).
// No editar a mano: cambiar el JSON y volver a generar.

namespace Famiq\\PinPermisos;

/**
 * Roles del catálogo y SQL de esquema y sincronización.
 *
 *     foreach (Catalogo::sentencias(Catalogo::ESQUEMA) as \$sql) { \$conexion->executeStatement(\$sql); }
 *     foreach (Catalogo::sentencias(Catalogo::SINCRONIZAR) as \$sql) { ... }
 */
final class Catalogo
{
    public const VERSION = '$version';
    public const ESQUEMA = 'esquema';
    public const SINCRONIZAR = 'sincronizar';

    /**
     * Roles que crea la sincronización si no existen. rol_legacy y
     * equivalentes_legacy traducen los ROLE_* viejos a slugs.
     *
     * @return list<array{slug: string, nombre: string, sistema: string, orden: int, rol_legacy: ?string, equivalentes_legacy: list<string>}>
     */
    public static function roles(): array
    {
        return [
$filas        ];
    }

    /** Ruta de sql/<nombre>.sql dentro del paquete. */
    public static function rutaSql(string \$nombre): string
    {
        return dirname(__DIR__, 2) . '/sql/' . \$nombre . '.sql';
    }

    /**
     * Sentencias de sql/<nombre>.sql, sin comentarios, para ejecutarlas una
     * por una en la misma conexión.
     *
     * @return list<string>
     */
    public static function sentencias(string \$nombre): array
    {
        \$texto = file_get_contents(self::rutaSql(\$nombre));
        if (false === \$texto) {
            throw new \\RuntimeException('No se pudo leer ' . self::rutaSql(\$nombre));
        }

        return self::partir(\$texto);
    }

    /** @return list<string> */
    public static function partir(string \$sql): array
    {
        \$sentencias = [];
        \$actual = '';
        foreach (preg_split('/\\R/', \$sql) as \$linea) {
            if ('' === trim(\$linea) || str_starts_with(ltrim(\$linea), '--')) {
                continue;
            }
            \$actual .= \$linea . "\\n";
            if (str_ends_with(rtrim(\$linea), ';')) {
                \$sentencias[] = rtrim(trim(\$actual), ';');
                \$actual = '';
            }
        }
        if ('' !== trim(\$actual)) {
            \$sentencias[] = trim(\$actual);
        }

        return \$sentencias;
    }
}

PHP;
}

function generarGoSincronizar(string $esquema, string $sincronizar, string $version): string
{
    // Raw strings de Go: no pueden tener backticks, así que se cortan y se concatenan.
    $raw = static fn (string $texto): string => '`' . str_replace('`', '` + "`" + `', $texto) . '`';

    return "// Generado por bin/generar.php a partir de catalogo/permisos.json (versión $version).\n"
        . "// No editar a mano: cambiar el JSON y volver a generar.\n\n"
        . "package permisos\n\n"
        . "import (\n\t\"context\"\n\t\"database/sql\"\n\t\"strings\"\n)\n\n"
        . "// SQLEsquema crea las tablas de roles y permisos si no existen (sql/esquema.sql).\n"
        . "const SQLEsquema = " . $raw($esquema) . "\n\n"
        . "// SQLSincronizar sincroniza roles y permisos con el catálogo (sql/sincronizar.sql).\n"
        . "const SQLSincronizar = " . $raw($sincronizar) . "\n\n"
        . <<<'GO'
// Sentencias parte un SQL del paquete: cada sentencia termina en ';' al final
// de una línea. Saca los comentarios.
func Sentencias(texto string) []string {
	var sentencias []string
	var actual strings.Builder
	for _, linea := range strings.Split(strings.ReplaceAll(texto, "\r\n", "\n"), "\n") {
		limpia := strings.TrimSpace(linea)
		if limpia == "" || strings.HasPrefix(limpia, "--") {
			continue
		}
		actual.WriteString(linea)
		actual.WriteString("\n")
		if strings.HasSuffix(limpia, ";") {
			sentencias = append(sentencias, strings.TrimSuffix(strings.TrimSpace(actual.String()), ";"))
			actual.Reset()
		}
	}
	if resto := strings.TrimSpace(actual.String()); resto != "" {
		sentencias = append(sentencias, resto)
	}
	return sentencias
}

// Sincronizar crea las tablas que falten y sincroniza roles y permisos con el
// catálogo. Usa una sola conexión: las tablas temporales viven en ella.
func Sincronizar(ctx context.Context, db *sql.DB) error {
	conn, err := db.Conn(ctx)
	if err != nil {
		return err
	}
	defer conn.Close()

	for _, sentencia := range append(Sentencias(SQLEsquema), Sentencias(SQLSincronizar)...) {
		if _, err := conn.ExecContext(ctx, sentencia); err != nil {
			_, _ = conn.ExecContext(ctx, "ROLLBACK")
			return err
		}
	}
	return nil
}

GO;
}
