# famiq/pin-permisos

Catálogo de permisos de la PIN. Es la fuente única de qué permisos existen. La
usan backend-pin, frontend-pin (BFF y Vue), gestion y cualquier servicio que
necesite preguntar por un permiso, en el lenguaje que sea.

## Qué hay acá

| Archivo | Para qué |
| --- | --- |
| `catalogo/permisos.json` | **Fuente única.** Slug, nombre, descripción, módulo y grupo de cada permiso. |
| `php/src/Permissions.php` | Enum generado (`Famiq\PinPermisos\Permissions`) para Symfony y Laravel. |
| `js/permisos.js` | Constantes generadas (`PERM`, `CATALOGO`) para Vue y JS. |
| `go/permisos.go` | Constantes generadas (paquete `permisos`) para Go. |
| `sql/permisos_efectivos.sql` | Contrato de cómo se calculan los permisos efectivos de un usuario. |
| `bin/generar.php` | Genera los tres archivos de constantes desde el JSON. |

Qué roles tiene cada permiso **no** está acá: eso es un dato que administra
backend-pin (siembra inicial y después el ABM de gestion).

## Reglas

- Un permiso existe porque una funcionalidad lo pregunta. No se crean desde
  pantallas.
- Slug en español, `modulo.accion`, minúsculas y sin tildes
  (`cliente.operar_como`). Los permisos que ya usaba gestion conservan su slug.
- Un permiso por funcionalidad que el negocio pueda querer dar o quitar por
  separado.
- Nunca se renombra ni se borra un slug publicado: se agrega uno nuevo y el
  viejo se deja de usar. backend-pin lo marca como inactivo al sincronizar.

## Agregar un permiso

1. Agregarlo en `catalogo/permisos.json`.
2. `php bin/generar.php` (en local: `docker exec -u $(id -u):$(id -g) -w /var/www/pin-permisos famiq_php81_fpm php bin/generar.php`).
3. Subir la versión en `catalogo/permisos.json`, `package.json` y `CHANGELOG.md`, commitear y taggear (`vX.Y.Z`).
4. Actualizar la versión en los consumidores y correr `app:permissions:sync` en backend-pin.

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
