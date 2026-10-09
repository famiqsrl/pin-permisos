# famiq/pin-permisos

Catálogo de permisos de la PIN. Es la fuente única de qué permisos existen. La
usan backend-pin, frontend-pin (BFF y Vue), gestion y cualquier servicio que
necesite preguntar por un permiso, en el lenguaje que sea.

## Qué hay acá

| Archivo | Para qué |
| --- | --- |
| `catalogo/permisos.json` | **Fuente única.** Roles, permisos y qué roles recibe cada permiso al crearse. |
| `sql/esquema.sql` | Tablas `permissions`, `roles`, `role_has_permissions`, `model_has_roles`, `model_has_permissions` (`CREATE TABLE IF NOT EXISTS`). |
| `sql/sincronizar.sql` | Generado. Sincroniza roles y permisos de la base con el catálogo. |
| `sql/permisos_efectivos.sql` | Contrato de cómo se calculan los permisos efectivos de un usuario. |
| `php/src/Permissions.php` | Enum generado (`Famiq\PinPermisos\Permissions`) para Symfony y Laravel. |
| `php/src/Catalogo.php` | Generado. Roles del catálogo y `Catalogo::sentencias()` para correr los SQL desde PHP. |
| `js/permisos.js` | Constantes generadas (`PERM`, `CATALOGO`) para Vue y JS. |
| `go/permisos.go` | Constantes generadas (paquete `permisos`) para Go. |
| `go/sincronizar.go` | Generado. `permisos.Sincronizar(ctx, db)` con los dos SQL embebidos. |
| `bin/generar.php` | Genera todo lo anterior desde el JSON. |

**El paquete es dueño de las tablas y de su contenido base.** No hay
migraciones en ningún proyecto: cualquier consumidor corre `esquema.sql` y
después `sincronizar.sql`, en cualquier orden de deploy y las veces que sea.

## Catálogo

- `roles`: slug, nombre, sistema (`pin` o `gestion`), orden, `rol_legacy` y
  `equivalentes_legacy` (los `ROLE_*` viejos que se traducen a ese rol).
- `permisos`: slug, nombre, descripción, módulo, grupo y `roles`: los roles
  que lo reciben **cuando se crea**.
- `roles_por_modulo`: roles que reciben todo permiso de un módulo
  (`gestion_admin` en `gestion`).

Qué roles tiene cada permiso después se administra desde gestion (ABM de roles
y permisos). La sincronización no pisa nada de eso:

- Roles: crea los que faltan; uno existente no se toca (nombre, orden, etc.).
- Permiso nuevo: se inserta y se asigna a sus roles. Solo esa vez: si después
  se lo sacan a un rol desde gestion, no vuelve.
- Permiso existente: solo `type` y `active`. `name` y `order` se editan en gestion.
- Permiso que ya no está en el catálogo: `active = 0`. Nunca se borra.

En una base vacía deja todo como el corte inicial.

## Reglas

- Un permiso existe porque una funcionalidad lo pregunta. No se crean desde
  pantallas.
- Slug en español, `modulo.accion`, minúsculas y sin tildes
  (`cliente.operar_como`). Los permisos que ya usaba gestion conservan su slug.
- Un permiso por funcionalidad que el negocio pueda querer dar o quitar por
  separado.
- Nunca se renombra ni se borra un slug publicado: se agrega uno nuevo y el
  viejo se deja de usar. La sincronización lo marca como inactivo.

## Agregar un permiso

1. Agregarlo en `catalogo/permisos.json`, con `roles`.
2. `php bin/generar.php` (en local: `docker exec -u $(id -u):$(id -g) -w /var/www/pin-permisos famiq_php81_fpm php bin/generar.php`).
3. Subir la versión en `catalogo/permisos.json`, `package.json` y `CHANGELOG.md`, commitear y taggear (`vX.Y.Z`).
4. `composer update famiq/pin-permisos` en los consumidores. En el deploy se
   sincroniza solo (backend-pin lo corre en su `composer install`).

## Sincronizar

- **mysql:** `cat sql/esquema.sql sql/sincronizar.sql | mysql <base>`
- **PHP:** `foreach (Catalogo::sentencias(Catalogo::ESQUEMA) as $sql) { ... }` y lo mismo con `Catalogo::SINCRONIZAR`, en la misma conexión.
- **Go:** `permisos.Sincronizar(ctx, db)`.

Al final devuelve una fila con roles nuevos, permisos nuevos, asignaciones,
actualizados y desactivados.

frontend-pin y gestion comparan su versión con la de backend-pin (que la
devuelve junto con los permisos del usuario) y dejan un warning en el log si
quedaron atrás.

`php bin/generar.php --verificar` falla si algún archivo generado no coincide
con el JSON.

## Cómo se usa

**PHP (Symfony / Laravel)**, por composer:

```php
use Famiq\PinPermisos\Permissions;

$this->isGranted(Permissions::ClienteOperarComo->attr()); // 'PERM_cliente.operar_como'
```

**Vue / JS:**

```js
import { PERM } from '@famiq/pin-permisos';

can(PERM.CLIENTE_OPERAR_COMO);
```

En frontend-pin se importa desde `vendor/famiq/pin-permisos/js/permisos.js` con
un alias de webpack, sin npm.

**Go:**

```go
import "github.com/famiqsrl/pin-permisos/go"

if usuario.Tiene(permisos.ClienteOperarComo) { ... }
```

Un servicio que no sea backend-pin tiene dos opciones para saber qué permisos
tiene un usuario: pedírselos a backend-pin (como hacen el BFF y gestion) o
resolverlos contra la base con `sql/permisos_efectivos.sql`.

## Instalación mientras no existe el repo

Hasta que exista `famiqsrl/pin-permisos`, los proyectos lo toman de
`~/proyectos/pin-permisos` copiándolo a `vendor/`:

```json
"repositories": [
    { "type": "path", "url": "../pin-permisos", "options": { "symlink": false } }
]
```

Cuando exista el repo, esa entrada se reemplaza por
`{ "type": "git", "url": "https://github.com/famiqsrl/pin-permisos.git" }`,
igual que `famiq/cliente`.
