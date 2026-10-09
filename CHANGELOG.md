# Changelog

## 1.7.0

- El paquete es dueño de las tablas y de su contenido base: `sql/esquema.sql`
  (CREATE TABLE IF NOT EXISTS) y `sql/sincronizar.sql` (generado, idempotente).
  Ya no hacen falta migraciones ni comandos propios de cada proyecto.
- `roles` en el catálogo (antes en la siembra de backend-pin), con
  `rol_legacy` y `equivalentes_legacy`.
- `roles` de cada permiso con la asignación inicial completa; `roles_por_modulo`
  solo para `gestion_admin`.
- PHP: `Catalogo::roles()`, `Catalogo::sentencias()`. Go: `permisos.Sincronizar()`.

## 1.6.0

- Roles iniciales: `roles` en cada permiso y `roles_por_modulo` (`super_admin`
  en pin, `gestion_admin` en gestion). backend-pin los asigna al crear el
  permiso, sin migraciones. El enum PHP suma `rolesIniciales()`.
- Constante `VERSION` en PHP (`Permissions::VERSION`), JS y Go.
- Los permisos del tótem salen con `developer` como rol inicial.

## 1.5.0

- `totem.generar_ticket` y `totem.ver_tickets_en_espera`: endpoints del tótem (NemoQ) que antes pedían ROLE_DEVELOPER.

## 1.4.0

- `footer.index` y `footer.edit`: permisos de gestion para el ABM del footer.

## 1.3.0

- `cotizacion.crear` (guardar o enviar una oferta común desde el carrito) y
  `cotizacion.crear_especial` (agregar productos a medida MVSE, que generan una
  oferta especial).

## 1.2.0

- 17 permisos de gestion para las pantallas nuevas: links del header
  (`header-links.index`, `.create`, `.link.edit`, `.link.delete`), Biblioteca de
  información técnica (`info.library.index`, colecciones `info.library.collections.*`
  y artículos `info.library.articles.*`) y ¿Sabías qué? (`info.facts.*`).

## 1.1.0

- `carrito.agregar`, `producto.ver_precio_sin_descuento`, `catalogo.ver_como_comprar`
  y `pedido.ver_aviso_pago`: funcionalidades que estaban atadas a otro permiso.

## 1.0.0

- Catálogo inicial (PIN-43946): 83 permisos de la PIN y de acceso, y 66 de las
  pantallas de gestion.
- Constantes generadas para PHP, JS y Go.
- Contrato SQL de resolución de permisos efectivos.
