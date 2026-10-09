// Generado por bin/generar.php a partir de catalogo/permisos.json (versión 1.7.0).
// No editar a mano: cambiar el JSON y volver a generar.

export const VERSION = '1.7.0';

export const PREFIJO = 'PERM_';

/** Slugs de permisos. Uso: can(PERM.CLIENTE_OPERAR_COMO) */
export const PERM = Object.freeze({
  PIN_INGRESAR: "pin.ingresar",
  MI_CUENTA_INGRESAR: "mi_cuenta.ingresar",
  MIS_GESTIONES_INGRESAR: "mis_gestiones.ingresar",
  CLIENTE_ELEGIR_OBLIGATORIO: "cliente.elegir_obligatorio",
  CHAT_AYUDA_VER: "chat_ayuda.ver",
  ENCUESTA_RESPONDER: "encuesta.responder",
  CLIENTE_OPERAR_COMO: "cliente.operar_como",
  CATALOGO_VER_COMO_VENDEDOR: "catalogo.ver_como_vendedor",
  CLIENTE_DAR_DE_ALTA: "cliente.dar_de_alta",
  CLIENTE_VER_INFORMACION_INTERNA: "cliente.ver_informacion_interna",
  CLIENTE_VER_NOTAS: "cliente.ver_notas",
  VENDEDOR_ID_SAP: "vendedor.id_sap",
  PRODUCTOS_ESPECIALES_VER: "productos_especiales.ver",
  PRECIO_VER_STANDARD: "precio.ver_standard",
  PRODUCTO_VER_MARCAS_INTERNAS: "producto.ver_marcas_internas",
  PRODUCTO_VER_DESCUENTO_MAXIMO: "producto.ver_descuento_maximo",
  STOCK_VER_POR_SUCURSAL: "stock.ver_por_sucursal",
  CATALOGO_VER_DATOS_TECNICOS: "catalogo.ver_datos_tecnicos",
  RECORTES_VER_DEPOSITO_ORIGEN: "recortes.ver_deposito_origen",
  POLITICA_PRECIOS_DESCARGAR: "politica_precios.descargar",
  PRODUCTO_VER_PRECIO_SIN_DESCUENTO: "producto.ver_precio_sin_descuento",
  CATALOGO_VER_COMO_COMPRAR: "catalogo.ver_como_comprar",
  LISTAS_USAR: "listas.usar",
  LISTAS_CREAR_FAMIQ: "listas.crear_famiq",
  LISTAS_EDITAR_FAMIQ: "listas.editar_famiq",
  LISTAS_DESCARGAR_REPORTE: "listas.descargar_reporte",
  CARRITO_PRECIO_MANUAL: "carrito.precio_manual",
  CARRITO_NOTAS: "carrito.notas",
  CARRITO_ALTERNATIVAS: "carrito.alternativas",
  CARRITO_OPCIONES_CABECERA: "carrito.opciones_cabecera",
  CARRITO_CARGA_MASIVA_OFERTA_PRECIO_MANUAL: "carrito.carga_masiva_oferta_precio_manual",
  CARRITO_CAMBIAR_CENTRO: "carrito.cambiar_centro",
  CARRITO_ANULAR_CON_MOTIVO: "carrito.anular_con_motivo",
  CARRITO_VENDEDOR_REFERENCIADO: "carrito.vendedor_referenciado",
  CARRITO_VENDEDOR_REFERENCIADO_KIOSCO: "carrito.vendedor_referenciado_kiosco",
  CARRITO_RECUPERAR_SIN_FORZAR_CENTRO: "carrito.recuperar_sin_forzar_centro",
  CUPONES_USAR: "cupones.usar",
  ENVIO_BONIFICAR: "envio.bonificar",
  CARRITO_AGREGAR: "carrito.agregar",
  COTIZACION_GUARDAR_EN_CUALQUIER_PASO: "cotizacion.guardar_en_cualquier_paso",
  COTIZACION_CREAR: "cotizacion.crear",
  COTIZACION_CREAR_ESPECIAL: "cotizacion.crear_especial",
  PEDIDO_EMITIR: "pedido.emitir",
  PEDIDO_EXIGIR_MAIL_CONFIRMACION: "pedido.exigir_mail_confirmacion",
  PEDIDO_FINALIDAD: "pedido.finalidad",
  PEDIDO_CONSIGNACION: "pedido.consignacion",
  PEDIDO_PAGO_MOSTRADOR: "pedido.pago_mostrador",
  PEDIDO_OFRECER_RETIRO_MOSTRADOR: "pedido.ofrecer_retiro_mostrador",
  PAGO_CONDICIONES_ADICIONALES: "pago.condiciones_adicionales",
  PAGO_CAMBIAR_MONEDA: "pago.cambiar_moneda",
  PEDIDO_VER_MUESTRAS_GRATIS: "pedido.ver_muestras_gratis",
  PEDIDO_VER_AVISO_PAGO: "pedido.ver_aviso_pago",
  DOCUMENTO_ELEGIR_POSICIONES: "documento.elegir_posiciones",
  DOCUMENTO_COPIAR_COTIZACION: "documento.copiar_cotizacion",
  DOCUMENTO_ACTUALIZAR_OFERTA_ESPECIAL: "documento.actualizar_oferta_especial",
  DOCUMENTO_OMITIR_CONTROL_CENTRO: "documento.omitir_control_centro",
  DOCUMENTO_VER_CONDICIONES_INTERNAS: "documento.ver_condiciones_internas",
  MI_CUENTA_COMPRAS: "mi_cuenta.compras",
  MI_CUENTA_VENTAS: "mi_cuenta.ventas",
  MI_CUENTA_AYUDA: "mi_cuenta.ayuda",
  MI_CUENTA_CENTRO_AYUDA: "mi_cuenta.centro_ayuda",
  MI_CUENTA_ESTADO_CUENTA: "mi_cuenta.estado_cuenta",
  MI_CUENTA_LEGAJO_IMPOSITIVO: "mi_cuenta.legajo_impositivo",
  MI_CUENTA_MIS_CODIGOS: "mi_cuenta.mis_codigos",
  MI_CUENTA_DIRECCIONES: "mi_cuenta.direcciones",
  MI_CUENTA_CAMBIAR_CONTRASENA: "mi_cuenta.cambiar_contrasena",
  PERSONAS_GESTIONAR: "personas.gestionar",
  PERSONAS_FAVORITAS: "personas.favoritas",
  COMPROBANTES_PAGO_VER: "comprobantes_pago.ver",
  RECLAMOS_MODO_ASESOR: "reclamos.modo_asesor",
  RECLAMOS_NOTAS_INTERNAS: "reclamos.notas_internas",
  CRM_GESTIONAR_CONTACTOS: "crm.gestionar_contactos",
  KONNEN_BUSQUEDA: "konnen.busqueda",
  KONNEN_DOCUMENTOS: "konnen.documentos",
  CUENTA_CLIENTE_USAR: "cuenta_cliente.usar",
  CUENTA_PROVEEDOR_USAR: "cuenta_proveedor.usar",
  PROVEEDORES_PORTAL: "proveedores.portal",
  PROVEEDOR_OPERAR_COMO: "proveedor.operar_como",
  PEDIDOS_BLOQUEADOS_FILTRAR_POR_ASESOR: "pedidos_bloqueados.filtrar_por_asesor",
  TRANSPORTES_VER_HORARIOS: "transportes.ver_horarios",
  TRANSPORTES_CREAR: "transportes.crear",
  SISTEMA_LOG_SAP: "sistema.log_sap",
  SISTEMA_DEBUG_CARRITO: "sistema.debug_carrito",
  SISTEMA_MARCAS_DESARROLLO: "sistema.marcas_desarrollo",
  SISTEMA_NO_INFORMAR_USUARIO_SAP: "sistema.no_informar_usuario_sap",
  TOTEM_GENERAR_TICKET: "totem.generar_ticket",
  TOTEM_VER_TICKETS_EN_ESPERA: "totem.ver_tickets_en_espera",
  PRODUCTO_MANTENIMIENTO: "producto.mantenimiento",
  GESTION_INGRESAR: "gestion.ingresar",
  ROLES_ADMINISTRAR: "roles.administrar",
  USUARIOS_ADMINISTRAR_INTERNOS: "usuarios.administrar_internos",
  USER_INDEX: "user.index",
  USER_CREATE: "user.create",
  USER_EDIT: "user.edit",
  USER_DELETE: "user.delete",
  PRODUCT_INDEX: "product.index",
  PAYMENT_INDEX: "payment.index",
  CLIENT_CODE_INDEX: "client-code.index",
  CLIENT_CODE_CREATE: "client-code.create",
  CLIENT_CODE_DESTROY: "client-code.destroy",
  LIST_INDEX: "list.index",
  LIST_SHOW: "list.show",
  LIST_CREATE: "list.create",
  LIST_DESTROY: "list.destroy",
  LEGAJO_INDEX: "legajo.index",
  LEGAJO_UPDATE: "legajo.update",
  MATERIALS_INDEX: "materials.index",
  MATERIALS_SHOW: "materials.show",
  MATERIALS_CREATE: "materials.create",
  MATERIALS_DESTROY: "materials.destroy",
  LEAD_INDEX: "lead.index",
  TAG_INDEX: "tag.index",
  TAG_CREATE: "tag.create",
  TAG_EDIT: "tag.edit",
  TAG_DESTROY: "tag.destroy",
  FILTER_ORDER_INDEX: "filter-order.index",
  FILTER_ORDER_SHOW: "filter-order.show",
  FILTER_ORDER_UPDATE: "filter-order.update",
  COMPONENT_TYPES_TYPES: "component-types.types",
  COMPONENT_TYPES_INDEX: "component-types.index",
  COMPONENTS_INDEX: "components.index",
  COMPONENTS_CREATE: "components.create",
  COMPONENTS_COMPONENT_EDIT: "components.component.edit",
  COMPONENTS_COMPONENT_DELETE: "components.component.delete",
  LOGOS_INDEX: "logos.index",
  LOGOS_CREATE: "logos.create",
  LOGOS_LOGO_EDIT: "logos.logo.edit",
  LOGOS_LOGO_DELETE: "logos.logo.delete",
  HIERARCHY_NODE_INDEX: "hierarchy-node.index",
  HIERARCHY_NODE_CREATE: "hierarchy-node.create",
  HIERARCHY_NODE_NODE_EDIT: "hierarchy-node.node.edit",
  HIERARCHY_NODE_NODE_DELETE: "hierarchy-node.node.delete",
  TEAM_INDEX: "team.index",
  TEAM_CREATE: "team.create",
  TEAM_EDIT: "team.edit",
  TEAM_DELETE: "team.delete",
  MESSAGES_INDEX: "messages.index",
  MESSAGES_CREATE: "messages.create",
  MESSAGES_MESSAGE_EDIT: "messages.message.edit",
  MESSAGES_MESSAGE_DELETE: "messages.message.delete",
  NOTIFICATIONS_INDEX: "notifications.index",
  NOTIFICATIONS_CREATE: "notifications.create",
  NOTIFICATIONS_NOTIFICATION_EDIT: "notifications.notification.edit",
  NOTIFICATIONS_NOTIFICATION_DELETE: "notifications.notification.delete",
  FEATURE_FLAGS_INDEX: "feature-flags.index",
  FEATURE_FLAGS_CREATE: "feature-flags.create",
  FEATURE_FLAGS_FEATURE_FLAG_EDIT: "feature-flags.feature-flag.edit",
  FEATURE_FLAGS_FEATURE_FLAG_DELETE: "feature-flags.feature-flag.delete",
  CERTIFICACION_INDEX: "certificacion.index",
  CERTIFICACION_UPDATE: "certificacion.update",
  CALIDAD_INDEX: "calidad.index",
  CALIDAD_UPDATE: "calidad.update",
  SEGMENTS_INDEX: "segments.index",
  SEGMENTS_CREATE: "segments.create",
  SEGMENTS_SEGMENT_EDIT: "segments.segment.edit",
  SEGMENTS_SEGMENT_DELETE: "segments.segment.delete",
  EMPRESAS_INDEX: "empresas.index",
  HEADER_LINKS_INDEX: "header-links.index",
  HEADER_LINKS_CREATE: "header-links.create",
  HEADER_LINKS_LINK_EDIT: "header-links.link.edit",
  HEADER_LINKS_LINK_DELETE: "header-links.link.delete",
  INFO_LIBRARY_INDEX: "info.library.index",
  INFO_LIBRARY_COLLECTIONS_INDEX: "info.library.collections.index",
  INFO_LIBRARY_COLLECTIONS_CREATE: "info.library.collections.create",
  INFO_LIBRARY_COLLECTIONS_COLLECTION_EDIT: "info.library.collections.collection.edit",
  INFO_LIBRARY_COLLECTIONS_COLLECTION_DELETE: "info.library.collections.collection.delete",
  INFO_LIBRARY_ARTICLES_INDEX: "info.library.articles.index",
  INFO_LIBRARY_ARTICLES_CREATE: "info.library.articles.create",
  INFO_LIBRARY_ARTICLES_ARTICLE_EDIT: "info.library.articles.article.edit",
  INFO_LIBRARY_ARTICLES_ARTICLE_DELETE: "info.library.articles.article.delete",
  INFO_FACTS_INDEX: "info.facts.index",
  INFO_FACTS_CREATE: "info.facts.create",
  INFO_FACTS_FACT_EDIT: "info.facts.fact.edit",
  INFO_FACTS_FACT_DELETE: "info.facts.fact.delete",
  FOOTER_INDEX: "footer.index",
  FOOTER_EDIT: "footer.edit",
});

export const CATALOGO = Object.freeze([
    {
        "slug": "pin.ingresar",
        "nombre": "Ingresar a la PIN",
        "descripcion": "Entrar al sitio y usar la PIN.",
        "modulo": "pin",
        "grupo": "Ingreso y navegación"
    },
    {
        "slug": "mi_cuenta.ingresar",
        "nombre": "Mi cuenta",
        "descripcion": "Entrar a Mi cuenta.",
        "modulo": "pin",
        "grupo": "Ingreso y navegación"
    },
    {
        "slug": "mis_gestiones.ingresar",
        "nombre": "Mis gestiones",
        "descripcion": "El panel del asesor: elegir cliente, seguimiento, reportes.",
        "modulo": "pin",
        "grupo": "Ingreso y navegación"
    },
    {
        "slug": "cliente.elegir_obligatorio",
        "nombre": "Elegir cliente antes de operar",
        "descripcion": "Sin cliente elegido, solo puede usar Mis gestiones y el alta de clientes.",
        "modulo": "pin",
        "grupo": "Ingreso y navegación"
    },
    {
        "slug": "chat_ayuda.ver",
        "nombre": "Ver botones de chat",
        "descripcion": "WhatsApp y chat de ayuda. Sin sesión se siguen viendo.",
        "modulo": "pin",
        "grupo": "Ingreso y navegación"
    },
    {
        "slug": "encuesta.responder",
        "nombre": "Encuesta de satisfacción",
        "descripcion": "Recibir la encuesta de satisfacción.",
        "modulo": "pin",
        "grupo": "Ingreso y navegación"
    },
    {
        "slug": "cliente.operar_como",
        "nombre": "Operar en nombre de un cliente",
        "descripcion": "Elegir un cliente y trabajar por él; mensajes y textos de asesor.",
        "modulo": "pin",
        "grupo": "Operar en nombre de clientes"
    },
    {
        "slug": "catalogo.ver_como_vendedor",
        "nombre": "Catálogo con condiciones de vendedor",
        "descripcion": "Búsqueda y precios del catálogo en modo vendedor; opciones completas de vinilo.",
        "modulo": "pin",
        "grupo": "Operar en nombre de clientes"
    },
    {
        "slug": "cliente.dar_de_alta",
        "nombre": "Dar de alta clientes",
        "descripcion": "Registrar clientes nuevos a su nombre y volver a Mis gestiones.",
        "modulo": "pin",
        "grupo": "Operar en nombre de clientes"
    },
    {
        "slug": "cliente.ver_informacion_interna",
        "nombre": "Ver información interna del cliente",
        "descripcion": "Clasificación, T1, pagos, bloqueos y score del cliente.",
        "modulo": "pin",
        "grupo": "Operar en nombre de clientes"
    },
    {
        "slug": "cliente.ver_notas",
        "nombre": "Ver notas del cliente",
        "descripcion": "Notas del cliente en Mi cuenta y en el encabezado.",
        "modulo": "pin",
        "grupo": "Operar en nombre de clientes"
    },
    {
        "slug": "vendedor.id_sap",
        "nombre": "Vendedor Famiq con ID SAP",
        "descripcion": "Valida el ID de SAP del vendedor y habilita la API externa.",
        "modulo": "pin",
        "grupo": "Operar en nombre de clientes"
    },
    {
        "slug": "productos_especiales.ver",
        "nombre": "Ver Productos Especiales",
        "descripcion": "La sección Productos Especiales.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "precio.ver_standard",
        "nombre": "Ver precio standard",
        "descripcion": "El precio standard en Productos Especiales.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "producto.ver_marcas_internas",
        "nombre": "Ver marcas internas del producto",
        "descripcion": "Inmovilizado, recortes, cajón cerrado; botón Reportar un problema.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "producto.ver_descuento_maximo",
        "nombre": "Ver descuento máximo y contrato marco",
        "descripcion": "El tag de descuento máximo y el contrato marco.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "stock.ver_por_sucursal",
        "nombre": "Ver stock por sucursal",
        "descripcion": "Stock por sucursal en catálogo, ficha técnica y listas.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "catalogo.ver_datos_tecnicos",
        "nombre": "Ver datos técnicos internos",
        "descripcion": "El ID de material y datos técnicos sobre la imagen.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "recortes.ver_deposito_origen",
        "nombre": "Ver depósito de origen en recortes",
        "descripcion": "La columna Depósito de Origen en recortes de tubo.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "politica_precios.descargar",
        "nombre": "Descargar política de precios",
        "descripcion": "El Excel de política de precios.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "producto.ver_precio_sin_descuento",
        "nombre": "Ver precio sin descuento por presentación",
        "descripcion": "El precio sin descuento según la presentación del producto.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "catalogo.ver_como_comprar",
        "nombre": "Ver cómo comprar",
        "descripcion": "El bloque \"cómo comprar\" del pie de página.",
        "modulo": "pin",
        "grupo": "Catálogo y producto"
    },
    {
        "slug": "listas.usar",
        "nombre": "Usar listas y favoritos",
        "descripcion": "Marcar favoritos y usar listas.",
        "modulo": "pin",
        "grupo": "Listas y favoritos"
    },
    {
        "slug": "listas.crear_famiq",
        "nombre": "Crear listas Famiq",
        "descripcion": "Las listas que crea son de Famiq y no personales.",
        "modulo": "pin",
        "grupo": "Listas y favoritos"
    },
    {
        "slug": "listas.editar_famiq",
        "nombre": "Editar listas Famiq",
        "descripcion": "Hoy lo decide un mail hardcodeado; pasa a permiso directo de esas personas.",
        "modulo": "pin",
        "grupo": "Listas y favoritos"
    },
    {
        "slug": "listas.descargar_reporte",
        "nombre": "Descargar reporte de listas",
        "descripcion": "El Excel de listas de deseos.",
        "modulo": "pin",
        "grupo": "Listas y favoritos"
    },
    {
        "slug": "carrito.precio_manual",
        "nombre": "Precio manual y moneda",
        "descripcion": "Cargar precio manual y elegir moneda por posición.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.notas",
        "nombre": "Notas en el carrito",
        "descripcion": "Notas por posición y de cabecera.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.alternativas",
        "nombre": "Alternativas de producto",
        "descripcion": "Generar y ordenar alternativas.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.opciones_cabecera",
        "nombre": "Opciones del carrito",
        "descripcion": "Agregar alternativas y complementarios automáticos.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.carga_masiva_oferta_precio_manual",
        "nombre": "Carga masiva en ofertas de precio manual",
        "descripcion": "Carga masiva aunque el carrito venga de una oferta con precio manual.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.cambiar_centro",
        "nombre": "Cambiar el centro de las posiciones",
        "descripcion": "Mover posiciones entre centros y sucursales.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.anular_con_motivo",
        "nombre": "Anular posición con motivo",
        "descripcion": "Pedir el motivo al anular una posición.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.vendedor_referenciado",
        "nombre": "Vendedor referenciado",
        "descripcion": "Gestión referenciada y elegir el vendedor referenciado.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.vendedor_referenciado_kiosco",
        "nombre": "Vendedor referenciado desde kiosco",
        "descripcion": "El cliente en un kiosco elige el vendedor que lo atendió.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.recuperar_sin_forzar_centro",
        "nombre": "Recuperar carrito sin forzar centro",
        "descripcion": "Recuperar desde un documento manteniendo sus centros.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "cupones.usar",
        "nombre": "Cupones",
        "descripcion": "Ver y aplicar cupones.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "envio.bonificar",
        "nombre": "Bonificar envío y embalaje",
        "descripcion": "Bonificar gastos de envío y embalaje.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "carrito.agregar",
        "nombre": "Agregar productos al carrito",
        "descripcion": "Agregar productos al carrito desde el catálogo y el detalle.",
        "modulo": "pin",
        "grupo": "Carrito"
    },
    {
        "slug": "cotizacion.guardar_en_cualquier_paso",
        "nombre": "Guardar cotización en cualquier paso",
        "descripcion": "Los demás solo guardan en el paso 2.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "cotizacion.crear",
        "nombre": "Crear ofertas comunes",
        "descripcion": "Guardar o enviar una cotización u oferta común desde el carrito.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "cotizacion.crear_especial",
        "nombre": "Crear ofertas especiales",
        "descripcion": "Agregar productos a medida (MVSE), que convierten el carrito en una oferta especial.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.emitir",
        "nombre": "Emitir pedidos",
        "descripcion": "Emitir el pedido desde el carrito. Hoy el responsable de cuenta no puede.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.exigir_mail_confirmacion",
        "nombre": "Exigir mail de confirmación",
        "descripcion": "Pide elegir el mail al que se envía la confirmación.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.finalidad",
        "nombre": "Finalidad del pedido",
        "descripcion": "Cargar la finalidad del pedido.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.consignacion",
        "nombre": "Consignación",
        "descripcion": "Marcar el pedido en consignación (Argentina).",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.pago_mostrador",
        "nombre": "Pago en mostrador",
        "descripcion": "Pedido de mostrador: abona en caja, solo cuenta corriente.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.ofrecer_retiro_mostrador",
        "nombre": "Ofrecer retiro en mostrador",
        "descripcion": "Ofrecer el retiro por mostrador.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pago.condiciones_adicionales",
        "nombre": "Condiciones de pago adicionales",
        "descripcion": "Anticipo, otras condiciones y cambiar la condición del documento.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pago.cambiar_moneda",
        "nombre": "Cambiar moneda de pago",
        "descripcion": "Hoy es Desarrollador y dos mails hardcodeados, que pasan a permiso directo.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.ver_muestras_gratis",
        "nombre": "Ver pedidos de muestra gratis",
        "descripcion": "Ver y abrir pedidos de muestra gratis.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "pedido.ver_aviso_pago",
        "nombre": "Ver avisos de pago al cliente",
        "descripcion": "Avisos de pago que se muestran solo a clientes al confirmar.",
        "modulo": "pin",
        "grupo": "Cotizaciones y pedidos"
    },
    {
        "slug": "documento.elegir_posiciones",
        "nombre": "Elegir posiciones de una cotización",
        "descripcion": "Elegir qué posiciones pasar al carrito.",
        "modulo": "pin",
        "grupo": "Documentos"
    },
    {
        "slug": "documento.copiar_cotizacion",
        "nombre": "Copiar cotización",
        "descripcion": "Copiar y dar de alta por parecido.",
        "modulo": "pin",
        "grupo": "Documentos"
    },
    {
        "slug": "documento.actualizar_oferta_especial",
        "nombre": "Actualizar oferta especial vencida",
        "descripcion": "Actualizar una oferta especial ya vencida.",
        "modulo": "pin",
        "grupo": "Documentos"
    },
    {
        "slug": "documento.omitir_control_centro",
        "nombre": "Abrir documentos de otro centro",
        "descripcion": "No exige que coincidan los centros al comprar, modificar o recotizar.",
        "modulo": "pin",
        "grupo": "Documentos"
    },
    {
        "slug": "documento.ver_condiciones_internas",
        "nombre": "Ver condiciones internas",
        "descripcion": "Sucursal de suministro y notas internas del documento.",
        "modulo": "pin",
        "grupo": "Documentos"
    },
    {
        "slug": "mi_cuenta.compras",
        "nombre": "Compras y transacciones",
        "descripcion": "Las secciones Compras y Transacciones.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.ventas",
        "nombre": "Ventas",
        "descripcion": "La sección Ventas del proveedor.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.ayuda",
        "nombre": "Ayuda",
        "descripcion": "La sección Ayuda.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.centro_ayuda",
        "nombre": "Centro de ayuda",
        "descripcion": "Consultas y reclamos.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.estado_cuenta",
        "nombre": "Estado de cuenta",
        "descripcion": "El estado de cuenta.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.legajo_impositivo",
        "nombre": "Legajo impositivo",
        "descripcion": "El legajo impositivo (Argentina).",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.mis_codigos",
        "nombre": "Mis códigos",
        "descripcion": "Códigos propios del cliente para los productos.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.direcciones",
        "nombre": "Mis direcciones",
        "descripcion": "Direcciones de entrega.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "mi_cuenta.cambiar_contrasena",
        "nombre": "Cambiar contraseña",
        "descripcion": "Cambiar la contraseña desde Mi cuenta.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "personas.gestionar",
        "nombre": "Mis personas",
        "descripcion": "Gestionar las personas de la cuenta.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "personas.favoritas",
        "nombre": "Personas favoritas",
        "descripcion": "Marcar personas favoritas y ver a quién están asociadas.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "comprobantes_pago.ver",
        "nombre": "Comprobantes de pago",
        "descripcion": "Consultar comprobantes de pago.",
        "modulo": "pin",
        "grupo": "Mi cuenta"
    },
    {
        "slug": "reclamos.modo_asesor",
        "nombre": "Reclamos en modo asesor",
        "descripcion": "Ver todos los mensajes, chat privado, elegir cliente y figurar como creador.",
        "modulo": "pin",
        "grupo": "Reclamos"
    },
    {
        "slug": "reclamos.notas_internas",
        "nombre": "Notas internas en reclamos",
        "descripcion": "Cargar notas internas en un reclamo.",
        "modulo": "pin",
        "grupo": "Reclamos"
    },
    {
        "slug": "crm.gestionar_contactos",
        "nombre": "Gestionar contactos del CRM",
        "descripcion": "Crear, asociar, actualizar y cerrar contactos de clientes.",
        "modulo": "pin",
        "grupo": "Reclamos"
    },
    {
        "slug": "konnen.busqueda",
        "nombre": "Búsqueda Konnen",
        "descripcion": "Filtros y subfamilias del canal Konnen.",
        "modulo": "pin",
        "grupo": "Canal Konnen"
    },
    {
        "slug": "konnen.documentos",
        "nombre": "Documentos Konnen",
        "descripcion": "Opera solo documentos Konnen; se informa como Konnen a SAP; login por documento M/K.",
        "modulo": "pin",
        "grupo": "Canal Konnen"
    },
    {
        "slug": "cuenta_cliente.usar",
        "nombre": "Cuenta cliente",
        "descripcion": "Se identifica como cliente ante SAP y en el registro.",
        "modulo": "pin",
        "grupo": "Clientes y proveedores"
    },
    {
        "slug": "cuenta_proveedor.usar",
        "nombre": "Cuenta proveedor",
        "descripcion": "Datos de proveedor e ingreso como proveedor.",
        "modulo": "pin",
        "grupo": "Clientes y proveedores"
    },
    {
        "slug": "proveedores.portal",
        "nombre": "Portal de proveedores",
        "descripcion": "Órdenes de compra y facturas.",
        "modulo": "pin",
        "grupo": "Clientes y proveedores"
    },
    {
        "slug": "proveedor.operar_como",
        "nombre": "Operar en nombre de un proveedor",
        "descripcion": "Elegir un proveedor y trabajar por él (Cuentas a pagar).",
        "modulo": "pin",
        "grupo": "Clientes y proveedores"
    },
    {
        "slug": "pedidos_bloqueados.filtrar_por_asesor",
        "nombre": "Filtrar pedidos bloqueados por asesor",
        "descripcion": "El filtro Asesor en el seguimiento de pedidos bloqueados.",
        "modulo": "pin",
        "grupo": "Pedidos bloqueados y transportes"
    },
    {
        "slug": "transportes.ver_horarios",
        "nombre": "Ver horarios de transportes",
        "descripcion": "La columna de horarios en transportes.",
        "modulo": "pin",
        "grupo": "Pedidos bloqueados y transportes"
    },
    {
        "slug": "transportes.crear",
        "nombre": "Crear transportes",
        "descripcion": "Dar de alta un transporte nuevo.",
        "modulo": "pin",
        "grupo": "Pedidos bloqueados y transportes"
    },
    {
        "slug": "sistema.log_sap",
        "nombre": "Registro técnico de SAP",
        "descripcion": "Guarda el detalle de las llamadas a SAP del usuario.",
        "modulo": "pin",
        "grupo": "Sistema"
    },
    {
        "slug": "sistema.debug_carrito",
        "nombre": "Debug del carrito",
        "descripcion": "La herramienta de debug del carrito.",
        "modulo": "pin",
        "grupo": "Sistema"
    },
    {
        "slug": "sistema.marcas_desarrollo",
        "nombre": "Marcas de desarrollo en pantalla",
        "descripcion": "Marcas técnicas en algunas pantallas.",
        "modulo": "pin",
        "grupo": "Sistema"
    },
    {
        "slug": "sistema.no_informar_usuario_sap",
        "nombre": "No informar el usuario a SAP",
        "descripcion": "No envía el usuario web a SAP al consultar clientes.",
        "modulo": "pin",
        "grupo": "Sistema"
    },
    {
        "slug": "totem.generar_ticket",
        "nombre": "Generar ticket del tótem",
        "descripcion": "Generar un ticket de prueba del tótem (NemoQ).",
        "modulo": "pin",
        "grupo": "Sistema"
    },
    {
        "slug": "totem.ver_tickets_en_espera",
        "nombre": "Ver tickets en espera del tótem",
        "descripcion": "Consultar los tickets en espera del tótem (NemoQ).",
        "modulo": "pin",
        "grupo": "Sistema"
    },
    {
        "slug": "producto.mantenimiento",
        "nombre": "Mantenimiento de productos",
        "descripcion": "Actualizar un material desde SAP y regenerar el Excel de materiales.",
        "modulo": "pin",
        "grupo": "Sistema"
    },
    {
        "slug": "gestion.ingresar",
        "nombre": "Ingresar a gestión",
        "descripcion": "Entrar a gestión.",
        "modulo": "gestion",
        "grupo": "Gestión"
    },
    {
        "slug": "roles.administrar",
        "nombre": "Administrar roles y permisos",
        "descripcion": "Las pantallas de roles y permisos.",
        "modulo": "gestion",
        "grupo": "Gestión"
    },
    {
        "slug": "usuarios.administrar_internos",
        "nombre": "Administrar usuarios internos",
        "descripcion": "Sin este permiso solo se gestionan proveedores.",
        "modulo": "gestion",
        "grupo": "Gestión"
    },
    {
        "slug": "user.index",
        "nombre": "Ver usuarios",
        "descripcion": "Listado de usuarios",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "user.create",
        "nombre": "Crear usuario",
        "descripcion": "Crear usuario",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "user.edit",
        "nombre": "Editar usuario",
        "descripcion": "Editar usuario",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "user.delete",
        "nombre": "Eliminar usuario",
        "descripcion": "Eliminar usuario",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "product.index",
        "nombre": "Ver Productos",
        "descripcion": "Listado de Productos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "payment.index",
        "nombre": "Ver Pagos",
        "descripcion": "Listado de Pagos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "client-code.index",
        "nombre": "Ver Código Cliente",
        "descripcion": "Listado de Código Cliente",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "client-code.create",
        "nombre": "Crear Código Cliente",
        "descripcion": "Crear Código Cliente",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "client-code.destroy",
        "nombre": "Eliminar Código Cliente",
        "descripcion": "Eliminar Código Cliente",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "list.index",
        "nombre": "Ver Mis Listas",
        "descripcion": "Listado de Listas",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "list.show",
        "nombre": "Listas de Empresa",
        "descripcion": "Listas de Empresa",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "list.create",
        "nombre": "Crear Mis Listas",
        "descripcion": "Crear Mis Listas",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "list.destroy",
        "nombre": "Eliminar Lista",
        "descripcion": "Eliminar Lista",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "legajo.index",
        "nombre": "Ver Legajo impositivo",
        "descripcion": "Listado del legajo impositivo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "legajo.update",
        "nombre": "Editar Legajo impositivo",
        "descripcion": "Editar el legajo impositivo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "materials.index",
        "nombre": "Ver Materiales con Defectos",
        "descripcion": "Listado de Materiales con Defectos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "materials.show",
        "nombre": "Ver Material con Defecto",
        "descripcion": "Ver detalle de Material con Defecto",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "materials.create",
        "nombre": "Crear Material con Defecto",
        "descripcion": "Crear Material con Defecto",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "materials.destroy",
        "nombre": "Eliminar Material con Defecto",
        "descripcion": "Eliminar Material con Defecto",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "lead.index",
        "nombre": "Ver Leads",
        "descripcion": "Listado de Leads",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "tag.index",
        "nombre": "Ver Etiquetas",
        "descripcion": "Listado de Etiquetas",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "tag.create",
        "nombre": "Crear Etiquetas",
        "descripcion": "Crear Etiqueta",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "tag.edit",
        "nombre": "Editar Etiqueta",
        "descripcion": "Editar Etiqueta",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "tag.destroy",
        "nombre": "Eliminar Etiqueta",
        "descripcion": "Eliminar Etiqueta",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "filter-order.index",
        "nombre": "Ver Filtros",
        "descripcion": "Listado de Filtros",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "filter-order.show",
        "nombre": "Ver Ordenamiento de filtros",
        "descripcion": "Ver Ordenamiento de filtros",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "filter-order.update",
        "nombre": "Editar Ordenamiento de filtros",
        "descripcion": "Cambiar el orden de los filtros",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "component-types.types",
        "nombre": "Ver Tipos de componentes",
        "descripcion": "Listado de Tipos de componentes",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "component-types.index",
        "nombre": "Ver Componentes de la Sección",
        "descripcion": "Listado de los Componentes de la sección",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "components.index",
        "nombre": "Ver Componentes",
        "descripcion": "Listado de Componentes",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "components.create",
        "nombre": "Crear Componente",
        "descripcion": "Crear Componente",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "components.component.edit",
        "nombre": "Editar Componente",
        "descripcion": "Editar Componente",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "components.component.delete",
        "nombre": "Eliminar Componente",
        "descripcion": "Eliminar Componente",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "logos.index",
        "nombre": "Ver Logos",
        "descripcion": "Listado de Logos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "logos.create",
        "nombre": "Crear Logo",
        "descripcion": "Crear Logo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "logos.logo.edit",
        "nombre": "Editar Logo",
        "descripcion": "Editar Logo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "logos.logo.delete",
        "nombre": "Eliminar Logo",
        "descripcion": "Eliminar Logo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "hierarchy-node.index",
        "nombre": "Ver Nodos",
        "descripcion": "Listado de Nodos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "hierarchy-node.create",
        "nombre": "Crear Nodo",
        "descripcion": "Crear Nodo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "hierarchy-node.node.edit",
        "nombre": "Editar Nodo",
        "descripcion": "Editar Nodo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "hierarchy-node.node.delete",
        "nombre": "Eliminar Nodo",
        "descripcion": "Eliminar Nodo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "team.index",
        "nombre": "Ver Personal",
        "descripcion": "Listado de Personal",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "team.create",
        "nombre": "Crear Personal",
        "descripcion": "Crear Personal",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "team.edit",
        "nombre": "Editar Personal",
        "descripcion": "Editar Personal",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "team.delete",
        "nombre": "Eliminar Personal",
        "descripcion": "Eliminar Personal",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "messages.index",
        "nombre": "Ver Mensajes",
        "descripcion": "Listado de Mensajes",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "messages.create",
        "nombre": "Crear Mensajes",
        "descripcion": "Crear Mensajes",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "messages.message.edit",
        "nombre": "Editar Mensajes",
        "descripcion": "Editar Mensajes",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "messages.message.delete",
        "nombre": "Eliminar Mensajes",
        "descripcion": "Eliminar Mensajes",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "notifications.index",
        "nombre": "Ver Novedad",
        "descripcion": "Listado de Novedades",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "notifications.create",
        "nombre": "Crear Novedad",
        "descripcion": "Crear Novedad",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "notifications.notification.edit",
        "nombre": "Editar Novedad",
        "descripcion": "Editar Novedad",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "notifications.notification.delete",
        "nombre": "Eliminar Novedad",
        "descripcion": "Eliminar Novedad",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "feature-flags.index",
        "nombre": "Ver Funcionalidades",
        "descripcion": "Listado de Funcionalidades",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "feature-flags.create",
        "nombre": "Crear funcionalidad",
        "descripcion": "Crear funcionalidad",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "feature-flags.feature-flag.edit",
        "nombre": "Editar Funcionalidades",
        "descripcion": "Editar Funcionalidades",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "feature-flags.feature-flag.delete",
        "nombre": "Eliminar Funcionalidades",
        "descripcion": "Eliminar Funcionalidades",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "certificacion.index",
        "nombre": "Ver Certificación",
        "descripcion": "Listado de la certificación",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "certificacion.update",
        "nombre": "Editar Certificación",
        "descripcion": "Editar la certificación",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "calidad.index",
        "nombre": "Ver Política de calidad",
        "descripcion": "Listado de la politica de calidad",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "calidad.update",
        "nombre": "Editar Política de calidad",
        "descripcion": "Editar la politica de calidad",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "segments.index",
        "nombre": "Ver Segmentos",
        "descripcion": "Listado de Segmentos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "segments.create",
        "nombre": "Crear Segmento",
        "descripcion": "Crear Segmento",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "segments.segment.edit",
        "nombre": "Editar Segmento",
        "descripcion": "Editar Segmento",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "segments.segment.delete",
        "nombre": "Eliminar Segmento",
        "descripcion": "Eliminar Segmento",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "empresas.index",
        "nombre": "Ver Empresas",
        "descripcion": "Listado de Empresas",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "header-links.index",
        "nombre": "Ver Links del header",
        "descripcion": "Listado de Links del header",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "header-links.create",
        "nombre": "Crear Links del header",
        "descripcion": "Crear Links del header",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "header-links.link.edit",
        "nombre": "Editar Links del header",
        "descripcion": "Editar Links del header",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "header-links.link.delete",
        "nombre": "Eliminar Links del header",
        "descripcion": "Eliminar Links del header",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.index",
        "nombre": "Ver Biblioteca",
        "descripcion": "La Biblioteca de Información técnica",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.collections.index",
        "nombre": "Ver Colecciones",
        "descripcion": "Listado de Colecciones",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.collections.create",
        "nombre": "Crear Colección",
        "descripcion": "Crear Colección",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.collections.collection.edit",
        "nombre": "Editar Colección",
        "descripcion": "Editar Colección",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.collections.collection.delete",
        "nombre": "Eliminar Colección",
        "descripcion": "Eliminar Colección",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.articles.index",
        "nombre": "Ver Artículos",
        "descripcion": "Listado de Artículos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.articles.create",
        "nombre": "Crear Artículo",
        "descripcion": "Crear Artículo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.articles.article.edit",
        "nombre": "Editar Artículo",
        "descripcion": "Editar Artículo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.library.articles.article.delete",
        "nombre": "Eliminar Artículo",
        "descripcion": "Eliminar Artículo",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.facts.index",
        "nombre": "Ver ¿Sabías qué?",
        "descripcion": "Listado de datos curiosos",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.facts.create",
        "nombre": "Crear dato",
        "descripcion": "Crear dato curioso",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.facts.fact.edit",
        "nombre": "Editar dato",
        "descripcion": "Editar dato curioso",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "info.facts.fact.delete",
        "nombre": "Eliminar dato",
        "descripcion": "Eliminar dato curioso",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "footer.index",
        "nombre": "Ver Footer",
        "descripcion": "Ver el footer",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    },
    {
        "slug": "footer.edit",
        "nombre": "Editar Footer",
        "descripcion": "Editar logo, redes, columnas y marcas del footer",
        "modulo": "gestion",
        "grupo": "Pantallas de gestión"
    }
]);
