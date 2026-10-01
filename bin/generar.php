<?php

declare(strict_types=1);

/**
 * Genera las constantes de cada lenguaje a partir de catalogo/permisos.json.
 *
 * El JSON es la única fuente de verdad. Los archivos generados se commitean
 * para que cada consumidor los use sin correr nada:
 *
 *   php/src/Permissions.php  enum para Symfony / Laravel (composer)
 *   js/permisos.js           constantes para Vue / JS
 *   go/permisos.go           constantes para Go
 *
 * Uso:
 *   php bin/generar.php              regenera los archivos
 *   php bin/generar.php --verificar  falla si algún archivo no coincide con el JSON
 */

$raiz = dirname(__DIR__);
$catalogo = json_decode((string) file_get_contents("$raiz/catalogo/permisos.json"), true, 512, JSON_THROW_ON_ERROR);
$permisos = $catalogo['permisos'];
$prefijo = $catalogo['prefijo_atributo'];

validar($permisos, array_keys($catalogo['modulos']));

$salidas = [
    "$raiz/php/src/Permissions.php" => generarPhp($permisos, $prefijo, $catalogo['version']),
    "$raiz/js/permisos.js" => generarJs($permisos, $prefijo, $catalogo['version']),
    "$raiz/go/permisos.go" => generarGo($permisos, $prefijo, $catalogo['version']),
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
 * @param list<array{slug:string,nombre:string,descripcion:string,modulo:string,grupo:string}> $permisos
 * @param list<string> $modulos
 */
function validar(array $permisos, array $modulos): void
{
    $vistos = [];
    $nombres = [];

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

        $caso = nombreCaso($slug);
        if (isset($nombres[$caso])) {
            throw new RuntimeException("$slug y {$nombres[$caso]} generan el mismo nombre de constante ($caso)");
        }

        $vistos[$slug] = true;
        $nombres[$caso] = $slug;
    }
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

    foreach ($permisos as $p) {
        $caso = nombreCaso($p['slug']);
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
}

PHP;
}

function generarJs(array $permisos, string $prefijo, string $version): string
{
    $constantes = '';
    foreach ($permisos as $p) {
        $constantes .= '  ' . nombreConstante($p['slug']) . ': ' . json_encode($p['slug']) . ",\n";
    }

    $catalogo = json_encode(array_values($permisos), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);

    return <<<JS
// Generado por bin/generar.php a partir de catalogo/permisos.json (versión $version).
// No editar a mano: cambiar el JSON y volver a generar.

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
