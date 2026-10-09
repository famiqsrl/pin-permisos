<?php

declare(strict_types=1);

// Generado por bin/generar.php a partir de catalogo/permisos.json (versión 1.7.0).
// No editar a mano: cambiar el JSON y volver a generar.

namespace Famiq\PinPermisos;

/**
 * Roles del catálogo y SQL de esquema y sincronización.
 *
 *     foreach (Catalogo::sentencias(Catalogo::ESQUEMA) as $sql) { $conexion->executeStatement($sql); }
 *     foreach (Catalogo::sentencias(Catalogo::SINCRONIZAR) as $sql) { ... }
 */
final class Catalogo
{
    public const VERSION = '1.7.0';
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
            ['slug' => 'sales', 'nombre' => 'Vendedor', 'sistema' => 'pin', 'orden' => 0, 'rol_legacy' => 'ROLE_VENTAS', 'equivalentes_legacy' => ['ROLE_VENTAS', 'ROLE_PLANEAMIENTO', 'ROLE_CONTENIDOS', 'ROLE_CONTABILIDAD_E_IMPUESTOS']],
            ['slug' => 'account_manager', 'nombre' => 'Responsable de cuenta', 'sistema' => 'pin', 'orden' => 2, 'rol_legacy' => 'ROLE_RESPCU', 'equivalentes_legacy' => ['ROLE_RESPCU']],
            ['slug' => 'konnen', 'nombre' => 'Vendedor Konnen', 'sistema' => 'pin', 'orden' => 3, 'rol_legacy' => 'ROLE_KONNEN', 'equivalentes_legacy' => ['ROLE_KONNEN']],
            ['slug' => 'finance', 'nombre' => 'Finanzas', 'sistema' => 'pin', 'orden' => 4, 'rol_legacy' => 'ROLE_FINANZAS', 'equivalentes_legacy' => ['ROLE_FINANZAS']],
            ['slug' => 'manager', 'nombre' => 'Gerente', 'sistema' => 'pin', 'orden' => 5, 'rol_legacy' => 'ROLE_GERENTE', 'equivalentes_legacy' => ['ROLE_GERENTE']],
            ['slug' => 'accounts_payable', 'nombre' => 'Cuentas a pagar', 'sistema' => 'pin', 'orden' => 10, 'rol_legacy' => 'ROLE_CUENTAS_A_PAGAR', 'equivalentes_legacy' => ['ROLE_CUENTAS_A_PAGAR']],
            ['slug' => 'super_admin', 'nombre' => 'Super admin', 'sistema' => 'pin', 'orden' => 11, 'rol_legacy' => 'ROLE_SUPER_ADMIN', 'equivalentes_legacy' => ['ROLE_SUPER_ADMIN']],
            ['slug' => 'developer', 'nombre' => 'Desarrollador', 'sistema' => 'pin', 'orden' => 12, 'rol_legacy' => 'ROLE_DEVELOPER', 'equivalentes_legacy' => ['ROLE_DEVELOPER']],
            ['slug' => 'client', 'nombre' => 'Empresa', 'sistema' => 'pin', 'orden' => 14, 'rol_legacy' => 'ROLE_EMPRESA', 'equivalentes_legacy' => ['ROLE_EMPRESA', 'ROLE_PROVEEDOR_EMPRESA']],
            ['slug' => 'supplier', 'nombre' => 'Proveedor', 'sistema' => 'pin', 'orden' => 16, 'rol_legacy' => 'ROLE_PROVEEDOR', 'equivalentes_legacy' => ['ROLE_PROVEEDOR', 'ROLE_PROVEEDOR_EMPRESA']],
            ['slug' => 'gestion_planning', 'nombre' => 'Planeamiento', 'sistema' => 'gestion', 'orden' => 19, 'rol_legacy' => null, 'equivalentes_legacy' => ['ROLE_PLANEAMIENTO']],
            ['slug' => 'gestion_content', 'nombre' => 'Contenidos', 'sistema' => 'gestion', 'orden' => 20, 'rol_legacy' => null, 'equivalentes_legacy' => ['ROLE_CONTENIDOS']],
            ['slug' => 'gestion_accounts_payable', 'nombre' => 'Cuentas a pagar', 'sistema' => 'gestion', 'orden' => 21, 'rol_legacy' => null, 'equivalentes_legacy' => ['ROLE_CUENTAS_A_PAGAR']],
            ['slug' => 'gestion_admin', 'nombre' => 'Administrador de gestión', 'sistema' => 'gestion', 'orden' => 22, 'rol_legacy' => null, 'equivalentes_legacy' => ['ROLE_SUPER_ADMIN', 'ROLE_DEVELOPER']],
            ['slug' => 'gestion_accounting_tax', 'nombre' => 'Contabilidad e impuestos', 'sistema' => 'gestion', 'orden' => 23, 'rol_legacy' => null, 'equivalentes_legacy' => ['ROLE_CONTABILIDAD_E_IMPUESTOS']],
        ];
    }

    /** Ruta de sql/<nombre>.sql dentro del paquete. */
    public static function rutaSql(string $nombre): string
    {
        return dirname(__DIR__, 2) . '/sql/' . $nombre . '.sql';
    }

    /**
     * Sentencias de sql/<nombre>.sql, sin comentarios, para ejecutarlas una
     * por una en la misma conexión.
     *
     * @return list<string>
     */
    public static function sentencias(string $nombre): array
    {
        $texto = file_get_contents(self::rutaSql($nombre));
        if (false === $texto) {
            throw new \RuntimeException('No se pudo leer ' . self::rutaSql($nombre));
        }

        return self::partir($texto);
    }

    /** @return list<string> */
    public static function partir(string $sql): array
    {
        $sentencias = [];
        $actual = '';
        foreach (preg_split('/\R/', $sql) as $linea) {
            if ('' === trim($linea) || str_starts_with(ltrim($linea), '--')) {
                continue;
            }
            $actual .= $linea . "\n";
            if (str_ends_with(rtrim($linea), ';')) {
                $sentencias[] = rtrim(trim($actual), ';');
                $actual = '';
            }
        }
        if ('' !== trim($actual)) {
            $sentencias[] = trim($actual);
        }

        return $sentencias;
    }
}
