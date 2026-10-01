# Changelog

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
