// Generado por bin/generar.php a partir de catalogo/permisos.json (versión 1.1.0).
// No editar a mano: cambiar el JSON y volver a generar.

// Package permisos expone el catálogo de permisos de la PIN.
package permisos

// Prefijo de los atributos de seguridad en las aplicaciones Symfony.
const Prefijo = "PERM_"

// Slugs de permisos.
const (
	PinIngresar                          = "pin.ingresar"
	MiCuentaIngresar                     = "mi_cuenta.ingresar"
	MisGestionesIngresar                 = "mis_gestiones.ingresar"
	ClienteElegirObligatorio             = "cliente.elegir_obligatorio"
	ChatAyudaVer                         = "chat_ayuda.ver"
	EncuestaResponder                    = "encuesta.responder"
	ClienteOperarComo                    = "cliente.operar_como"
	CatalogoVerComoVendedor              = "catalogo.ver_como_vendedor"
	ClienteDarDeAlta                     = "cliente.dar_de_alta"
	ClienteVerInformacionInterna         = "cliente.ver_informacion_interna"
	ClienteVerNotas                      = "cliente.ver_notas"
	VendedorIdSap                        = "vendedor.id_sap"
	ProductosEspecialesVer               = "productos_especiales.ver"
	PrecioVerStandard                    = "precio.ver_standard"
	ProductoVerMarcasInternas            = "producto.ver_marcas_internas"
	ProductoVerDescuentoMaximo           = "producto.ver_descuento_maximo"
	StockVerPorSucursal                  = "stock.ver_por_sucursal"
	CatalogoVerDatosTecnicos             = "catalogo.ver_datos_tecnicos"
	RecortesVerDepositoOrigen            = "recortes.ver_deposito_origen"
	PoliticaPreciosDescargar             = "politica_precios.descargar"
	ProductoVerPrecioSinDescuento        = "producto.ver_precio_sin_descuento"
	CatalogoVerComoComprar               = "catalogo.ver_como_comprar"
	ListasUsar                           = "listas.usar"
	ListasCrearFamiq                     = "listas.crear_famiq"
	ListasEditarFamiq                    = "listas.editar_famiq"
	ListasDescargarReporte               = "listas.descargar_reporte"
	CarritoPrecioManual                  = "carrito.precio_manual"
	CarritoNotas                         = "carrito.notas"
	CarritoAlternativas                  = "carrito.alternativas"
	CarritoOpcionesCabecera              = "carrito.opciones_cabecera"
	CarritoCargaMasivaOfertaPrecioManual = "carrito.carga_masiva_oferta_precio_manual"
	CarritoCambiarCentro                 = "carrito.cambiar_centro"
	CarritoAnularConMotivo               = "carrito.anular_con_motivo"
	CarritoVendedorReferenciado          = "carrito.vendedor_referenciado"
	CarritoVendedorReferenciadoKiosco    = "carrito.vendedor_referenciado_kiosco"
	CarritoRecuperarSinForzarCentro      = "carrito.recuperar_sin_forzar_centro"
	CuponesUsar                          = "cupones.usar"
	EnvioBonificar                       = "envio.bonificar"
	CarritoAgregar                       = "carrito.agregar"
	CotizacionGuardarEnCualquierPaso     = "cotizacion.guardar_en_cualquier_paso"
	PedidoEmitir                         = "pedido.emitir"
	PedidoExigirMailConfirmacion         = "pedido.exigir_mail_confirmacion"
	PedidoFinalidad                      = "pedido.finalidad"
	PedidoConsignacion                   = "pedido.consignacion"
	PedidoPagoMostrador                  = "pedido.pago_mostrador"
	PedidoOfrecerRetiroMostrador         = "pedido.ofrecer_retiro_mostrador"
	PagoCondicionesAdicionales           = "pago.condiciones_adicionales"
	PagoCambiarMoneda                    = "pago.cambiar_moneda"
	PedidoVerMuestrasGratis              = "pedido.ver_muestras_gratis"
	PedidoVerAvisoPago                   = "pedido.ver_aviso_pago"
	DocumentoElegirPosiciones            = "documento.elegir_posiciones"
	DocumentoCopiarCotizacion            = "documento.copiar_cotizacion"
	DocumentoActualizarOfertaEspecial    = "documento.actualizar_oferta_especial"
	DocumentoOmitirControlCentro         = "documento.omitir_control_centro"
	DocumentoVerCondicionesInternas      = "documento.ver_condiciones_internas"
	MiCuentaCompras                      = "mi_cuenta.compras"
	MiCuentaVentas                       = "mi_cuenta.ventas"
	MiCuentaAyuda                        = "mi_cuenta.ayuda"
	MiCuentaCentroAyuda                  = "mi_cuenta.centro_ayuda"
	MiCuentaEstadoCuenta                 = "mi_cuenta.estado_cuenta"
	MiCuentaLegajoImpositivo             = "mi_cuenta.legajo_impositivo"
	MiCuentaMisCodigos                   = "mi_cuenta.mis_codigos"
	MiCuentaDirecciones                  = "mi_cuenta.direcciones"
	MiCuentaCambiarContrasena            = "mi_cuenta.cambiar_contrasena"
	PersonasGestionar                    = "personas.gestionar"
	PersonasFavoritas                    = "personas.favoritas"
	ComprobantesPagoVer                  = "comprobantes_pago.ver"
	ReclamosModoAsesor                   = "reclamos.modo_asesor"
	ReclamosNotasInternas                = "reclamos.notas_internas"
	CrmGestionarContactos                = "crm.gestionar_contactos"
	KonnenBusqueda                       = "konnen.busqueda"
	KonnenDocumentos                     = "konnen.documentos"
	CuentaClienteUsar                    = "cuenta_cliente.usar"
	CuentaProveedorUsar                  = "cuenta_proveedor.usar"
	ProveedoresPortal                    = "proveedores.portal"
	ProveedorOperarComo                  = "proveedor.operar_como"
	PedidosBloqueadosFiltrarPorAsesor    = "pedidos_bloqueados.filtrar_por_asesor"
	TransportesVerHorarios               = "transportes.ver_horarios"
	TransportesCrear                     = "transportes.crear"
	SistemaLogSap                        = "sistema.log_sap"
	SistemaDebugCarrito                  = "sistema.debug_carrito"
	SistemaMarcasDesarrollo              = "sistema.marcas_desarrollo"
	SistemaNoInformarUsuarioSap          = "sistema.no_informar_usuario_sap"
	ProductoMantenimiento                = "producto.mantenimiento"
	GestionIngresar                      = "gestion.ingresar"
	RolesAdministrar                     = "roles.administrar"
	UsuariosAdministrarInternos          = "usuarios.administrar_internos"
	UserIndex                            = "user.index"
	UserCreate                           = "user.create"
	UserEdit                             = "user.edit"
	UserDelete                           = "user.delete"
	ProductIndex                         = "product.index"
	PaymentIndex                         = "payment.index"
	ClientCodeIndex                      = "client-code.index"
	ClientCodeCreate                     = "client-code.create"
	ClientCodeDestroy                    = "client-code.destroy"
	ListIndex                            = "list.index"
	ListShow                             = "list.show"
	ListCreate                           = "list.create"
	ListDestroy                          = "list.destroy"
	LegajoIndex                          = "legajo.index"
	LegajoUpdate                         = "legajo.update"
	MaterialsIndex                       = "materials.index"
	MaterialsShow                        = "materials.show"
	MaterialsCreate                      = "materials.create"
	MaterialsDestroy                     = "materials.destroy"
	LeadIndex                            = "lead.index"
	TagIndex                             = "tag.index"
	TagCreate                            = "tag.create"
	TagEdit                              = "tag.edit"
	TagDestroy                           = "tag.destroy"
	FilterOrderIndex                     = "filter-order.index"
	FilterOrderShow                      = "filter-order.show"
	FilterOrderUpdate                    = "filter-order.update"
	ComponentTypesTypes                  = "component-types.types"
	ComponentTypesIndex                  = "component-types.index"
	ComponentsIndex                      = "components.index"
	ComponentsCreate                     = "components.create"
	ComponentsComponentEdit              = "components.component.edit"
	ComponentsComponentDelete            = "components.component.delete"
	LogosIndex                           = "logos.index"
	LogosCreate                          = "logos.create"
	LogosLogoEdit                        = "logos.logo.edit"
	LogosLogoDelete                      = "logos.logo.delete"
	HierarchyNodeIndex                   = "hierarchy-node.index"
	HierarchyNodeCreate                  = "hierarchy-node.create"
	HierarchyNodeNodeEdit                = "hierarchy-node.node.edit"
	HierarchyNodeNodeDelete              = "hierarchy-node.node.delete"
	TeamIndex                            = "team.index"
	TeamCreate                           = "team.create"
	TeamEdit                             = "team.edit"
	TeamDelete                           = "team.delete"
	MessagesIndex                        = "messages.index"
	MessagesCreate                       = "messages.create"
	MessagesMessageEdit                  = "messages.message.edit"
	MessagesMessageDelete                = "messages.message.delete"
	NotificationsIndex                   = "notifications.index"
	NotificationsCreate                  = "notifications.create"
	NotificationsNotificationEdit        = "notifications.notification.edit"
	NotificationsNotificationDelete      = "notifications.notification.delete"
	FeatureFlagsIndex                    = "feature-flags.index"
	FeatureFlagsCreate                   = "feature-flags.create"
	FeatureFlagsFeatureFlagEdit          = "feature-flags.feature-flag.edit"
	FeatureFlagsFeatureFlagDelete        = "feature-flags.feature-flag.delete"
	CertificacionIndex                   = "certificacion.index"
	CertificacionUpdate                  = "certificacion.update"
	CalidadIndex                         = "calidad.index"
	CalidadUpdate                        = "calidad.update"
	SegmentsIndex                        = "segments.index"
	SegmentsCreate                       = "segments.create"
	SegmentsSegmentEdit                  = "segments.segment.edit"
	SegmentsSegmentDelete                = "segments.segment.delete"
	EmpresasIndex                        = "empresas.index"
)

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
	{Slug: PinIngresar, Nombre: "Ingresar a la PIN", Descripcion: "Entrar al sitio y usar la PIN.", Modulo: "pin", Grupo: "Ingreso y navegación"},
	{Slug: MiCuentaIngresar, Nombre: "Mi cuenta", Descripcion: "Entrar a Mi cuenta.", Modulo: "pin", Grupo: "Ingreso y navegación"},
	{Slug: MisGestionesIngresar, Nombre: "Mis gestiones", Descripcion: "El panel del asesor: elegir cliente, seguimiento, reportes.", Modulo: "pin", Grupo: "Ingreso y navegación"},
	{Slug: ClienteElegirObligatorio, Nombre: "Elegir cliente antes de operar", Descripcion: "Sin cliente elegido, solo puede usar Mis gestiones y el alta de clientes.", Modulo: "pin", Grupo: "Ingreso y navegación"},
	{Slug: ChatAyudaVer, Nombre: "Ver botones de chat", Descripcion: "WhatsApp y chat de ayuda. Sin sesión se siguen viendo.", Modulo: "pin", Grupo: "Ingreso y navegación"},
	{Slug: EncuestaResponder, Nombre: "Encuesta de satisfacción", Descripcion: "Recibir la encuesta de satisfacción.", Modulo: "pin", Grupo: "Ingreso y navegación"},
	{Slug: ClienteOperarComo, Nombre: "Operar en nombre de un cliente", Descripcion: "Elegir un cliente y trabajar por él; mensajes y textos de asesor.", Modulo: "pin", Grupo: "Operar en nombre de clientes"},
	{Slug: CatalogoVerComoVendedor, Nombre: "Catálogo con condiciones de vendedor", Descripcion: "Búsqueda y precios del catálogo en modo vendedor; opciones completas de vinilo.", Modulo: "pin", Grupo: "Operar en nombre de clientes"},
	{Slug: ClienteDarDeAlta, Nombre: "Dar de alta clientes", Descripcion: "Registrar clientes nuevos a su nombre y volver a Mis gestiones.", Modulo: "pin", Grupo: "Operar en nombre de clientes"},
	{Slug: ClienteVerInformacionInterna, Nombre: "Ver información interna del cliente", Descripcion: "Clasificación, T1, pagos, bloqueos y score del cliente.", Modulo: "pin", Grupo: "Operar en nombre de clientes"},
	{Slug: ClienteVerNotas, Nombre: "Ver notas del cliente", Descripcion: "Notas del cliente en Mi cuenta y en el encabezado.", Modulo: "pin", Grupo: "Operar en nombre de clientes"},
	{Slug: VendedorIdSap, Nombre: "Vendedor Famiq con ID SAP", Descripcion: "Valida el ID de SAP del vendedor y habilita la API externa.", Modulo: "pin", Grupo: "Operar en nombre de clientes"},
	{Slug: ProductosEspecialesVer, Nombre: "Ver Productos Especiales", Descripcion: "La sección Productos Especiales.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: PrecioVerStandard, Nombre: "Ver precio standard", Descripcion: "El precio standard en Productos Especiales.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: ProductoVerMarcasInternas, Nombre: "Ver marcas internas del producto", Descripcion: "Inmovilizado, recortes, cajón cerrado; botón Reportar un problema.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: ProductoVerDescuentoMaximo, Nombre: "Ver descuento máximo y contrato marco", Descripcion: "El tag de descuento máximo y el contrato marco.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: StockVerPorSucursal, Nombre: "Ver stock por sucursal", Descripcion: "Stock por sucursal en catálogo, ficha técnica y listas.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: CatalogoVerDatosTecnicos, Nombre: "Ver datos técnicos internos", Descripcion: "El ID de material y datos técnicos sobre la imagen.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: RecortesVerDepositoOrigen, Nombre: "Ver depósito de origen en recortes", Descripcion: "La columna Depósito de Origen en recortes de tubo.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: PoliticaPreciosDescargar, Nombre: "Descargar política de precios", Descripcion: "El Excel de política de precios.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: ProductoVerPrecioSinDescuento, Nombre: "Ver precio sin descuento por presentación", Descripcion: "El precio sin descuento según la presentación del producto.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: CatalogoVerComoComprar, Nombre: "Ver cómo comprar", Descripcion: "El bloque \"cómo comprar\" del pie de página.", Modulo: "pin", Grupo: "Catálogo y producto"},
	{Slug: ListasUsar, Nombre: "Usar listas y favoritos", Descripcion: "Marcar favoritos y usar listas.", Modulo: "pin", Grupo: "Listas y favoritos"},
	{Slug: ListasCrearFamiq, Nombre: "Crear listas Famiq", Descripcion: "Las listas que crea son de Famiq y no personales.", Modulo: "pin", Grupo: "Listas y favoritos"},
	{Slug: ListasEditarFamiq, Nombre: "Editar listas Famiq", Descripcion: "Hoy lo decide un mail hardcodeado; pasa a permiso directo de esas personas.", Modulo: "pin", Grupo: "Listas y favoritos"},
	{Slug: ListasDescargarReporte, Nombre: "Descargar reporte de listas", Descripcion: "El Excel de listas de deseos.", Modulo: "pin", Grupo: "Listas y favoritos"},
	{Slug: CarritoPrecioManual, Nombre: "Precio manual y moneda", Descripcion: "Cargar precio manual y elegir moneda por posición.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoNotas, Nombre: "Notas en el carrito", Descripcion: "Notas por posición y de cabecera.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoAlternativas, Nombre: "Alternativas de producto", Descripcion: "Generar y ordenar alternativas.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoOpcionesCabecera, Nombre: "Opciones del carrito", Descripcion: "Agregar alternativas y complementarios automáticos.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoCargaMasivaOfertaPrecioManual, Nombre: "Carga masiva en ofertas de precio manual", Descripcion: "Carga masiva aunque el carrito venga de una oferta con precio manual.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoCambiarCentro, Nombre: "Cambiar el centro de las posiciones", Descripcion: "Mover posiciones entre centros y sucursales.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoAnularConMotivo, Nombre: "Anular posición con motivo", Descripcion: "Pedir el motivo al anular una posición.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoVendedorReferenciado, Nombre: "Vendedor referenciado", Descripcion: "Gestión referenciada y elegir el vendedor referenciado.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoVendedorReferenciadoKiosco, Nombre: "Vendedor referenciado desde kiosco", Descripcion: "El cliente en un kiosco elige el vendedor que lo atendió.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoRecuperarSinForzarCentro, Nombre: "Recuperar carrito sin forzar centro", Descripcion: "Recuperar desde un documento manteniendo sus centros.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CuponesUsar, Nombre: "Cupones", Descripcion: "Ver y aplicar cupones.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: EnvioBonificar, Nombre: "Bonificar envío y embalaje", Descripcion: "Bonificar gastos de envío y embalaje.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CarritoAgregar, Nombre: "Agregar productos al carrito", Descripcion: "Agregar productos al carrito desde el catálogo y el detalle.", Modulo: "pin", Grupo: "Carrito"},
	{Slug: CotizacionGuardarEnCualquierPaso, Nombre: "Guardar cotización en cualquier paso", Descripcion: "Los demás solo guardan en el paso 2.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoEmitir, Nombre: "Emitir pedidos", Descripcion: "Emitir el pedido desde el carrito. Hoy el responsable de cuenta no puede.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoExigirMailConfirmacion, Nombre: "Exigir mail de confirmación", Descripcion: "Pide elegir el mail al que se envía la confirmación.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoFinalidad, Nombre: "Finalidad del pedido", Descripcion: "Cargar la finalidad del pedido.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoConsignacion, Nombre: "Consignación", Descripcion: "Marcar el pedido en consignación (Argentina).", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoPagoMostrador, Nombre: "Pago en mostrador", Descripcion: "Pedido de mostrador: abona en caja, solo cuenta corriente.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoOfrecerRetiroMostrador, Nombre: "Ofrecer retiro en mostrador", Descripcion: "Ofrecer el retiro por mostrador.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PagoCondicionesAdicionales, Nombre: "Condiciones de pago adicionales", Descripcion: "Anticipo, otras condiciones y cambiar la condición del documento.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PagoCambiarMoneda, Nombre: "Cambiar moneda de pago", Descripcion: "Hoy es Desarrollador y dos mails hardcodeados, que pasan a permiso directo.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoVerMuestrasGratis, Nombre: "Ver pedidos de muestra gratis", Descripcion: "Ver y abrir pedidos de muestra gratis.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: PedidoVerAvisoPago, Nombre: "Ver avisos de pago al cliente", Descripcion: "Avisos de pago que se muestran solo a clientes al confirmar.", Modulo: "pin", Grupo: "Cotizaciones y pedidos"},
	{Slug: DocumentoElegirPosiciones, Nombre: "Elegir posiciones de una cotización", Descripcion: "Elegir qué posiciones pasar al carrito.", Modulo: "pin", Grupo: "Documentos"},
	{Slug: DocumentoCopiarCotizacion, Nombre: "Copiar cotización", Descripcion: "Copiar y dar de alta por parecido.", Modulo: "pin", Grupo: "Documentos"},
	{Slug: DocumentoActualizarOfertaEspecial, Nombre: "Actualizar oferta especial vencida", Descripcion: "Actualizar una oferta especial ya vencida.", Modulo: "pin", Grupo: "Documentos"},
	{Slug: DocumentoOmitirControlCentro, Nombre: "Abrir documentos de otro centro", Descripcion: "No exige que coincidan los centros al comprar, modificar o recotizar.", Modulo: "pin", Grupo: "Documentos"},
	{Slug: DocumentoVerCondicionesInternas, Nombre: "Ver condiciones internas", Descripcion: "Sucursal de suministro y notas internas del documento.", Modulo: "pin", Grupo: "Documentos"},
	{Slug: MiCuentaCompras, Nombre: "Compras y transacciones", Descripcion: "Las secciones Compras y Transacciones.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaVentas, Nombre: "Ventas", Descripcion: "La sección Ventas del proveedor.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaAyuda, Nombre: "Ayuda", Descripcion: "La sección Ayuda.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaCentroAyuda, Nombre: "Centro de ayuda", Descripcion: "Consultas y reclamos.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaEstadoCuenta, Nombre: "Estado de cuenta", Descripcion: "El estado de cuenta.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaLegajoImpositivo, Nombre: "Legajo impositivo", Descripcion: "El legajo impositivo (Argentina).", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaMisCodigos, Nombre: "Mis códigos", Descripcion: "Códigos propios del cliente para los productos.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaDirecciones, Nombre: "Mis direcciones", Descripcion: "Direcciones de entrega.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: MiCuentaCambiarContrasena, Nombre: "Cambiar contraseña", Descripcion: "Cambiar la contraseña desde Mi cuenta.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: PersonasGestionar, Nombre: "Mis personas", Descripcion: "Gestionar las personas de la cuenta.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: PersonasFavoritas, Nombre: "Personas favoritas", Descripcion: "Marcar personas favoritas y ver a quién están asociadas.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: ComprobantesPagoVer, Nombre: "Comprobantes de pago", Descripcion: "Consultar comprobantes de pago.", Modulo: "pin", Grupo: "Mi cuenta"},
	{Slug: ReclamosModoAsesor, Nombre: "Reclamos en modo asesor", Descripcion: "Ver todos los mensajes, chat privado, elegir cliente y figurar como creador.", Modulo: "pin", Grupo: "Reclamos"},
	{Slug: ReclamosNotasInternas, Nombre: "Notas internas en reclamos", Descripcion: "Cargar notas internas en un reclamo.", Modulo: "pin", Grupo: "Reclamos"},
	{Slug: CrmGestionarContactos, Nombre: "Gestionar contactos del CRM", Descripcion: "Crear, asociar, actualizar y cerrar contactos de clientes.", Modulo: "pin", Grupo: "Reclamos"},
	{Slug: KonnenBusqueda, Nombre: "Búsqueda Konnen", Descripcion: "Filtros y subfamilias del canal Konnen.", Modulo: "pin", Grupo: "Canal Konnen"},
	{Slug: KonnenDocumentos, Nombre: "Documentos Konnen", Descripcion: "Opera solo documentos Konnen; se informa como Konnen a SAP; login por documento M/K.", Modulo: "pin", Grupo: "Canal Konnen"},
	{Slug: CuentaClienteUsar, Nombre: "Cuenta cliente", Descripcion: "Se identifica como cliente ante SAP y en el registro.", Modulo: "pin", Grupo: "Clientes y proveedores"},
	{Slug: CuentaProveedorUsar, Nombre: "Cuenta proveedor", Descripcion: "Datos de proveedor e ingreso como proveedor.", Modulo: "pin", Grupo: "Clientes y proveedores"},
	{Slug: ProveedoresPortal, Nombre: "Portal de proveedores", Descripcion: "Órdenes de compra y facturas.", Modulo: "pin", Grupo: "Clientes y proveedores"},
	{Slug: ProveedorOperarComo, Nombre: "Operar en nombre de un proveedor", Descripcion: "Elegir un proveedor y trabajar por él (Cuentas a pagar).", Modulo: "pin", Grupo: "Clientes y proveedores"},
	{Slug: PedidosBloqueadosFiltrarPorAsesor, Nombre: "Filtrar pedidos bloqueados por asesor", Descripcion: "El filtro Asesor en el seguimiento de pedidos bloqueados.", Modulo: "pin", Grupo: "Pedidos bloqueados y transportes"},
	{Slug: TransportesVerHorarios, Nombre: "Ver horarios de transportes", Descripcion: "La columna de horarios en transportes.", Modulo: "pin", Grupo: "Pedidos bloqueados y transportes"},
	{Slug: TransportesCrear, Nombre: "Crear transportes", Descripcion: "Dar de alta un transporte nuevo.", Modulo: "pin", Grupo: "Pedidos bloqueados y transportes"},
	{Slug: SistemaLogSap, Nombre: "Registro técnico de SAP", Descripcion: "Guarda el detalle de las llamadas a SAP del usuario.", Modulo: "pin", Grupo: "Sistema"},
	{Slug: SistemaDebugCarrito, Nombre: "Debug del carrito", Descripcion: "La herramienta de debug del carrito.", Modulo: "pin", Grupo: "Sistema"},
	{Slug: SistemaMarcasDesarrollo, Nombre: "Marcas de desarrollo en pantalla", Descripcion: "Marcas técnicas en algunas pantallas.", Modulo: "pin", Grupo: "Sistema"},
	{Slug: SistemaNoInformarUsuarioSap, Nombre: "No informar el usuario a SAP", Descripcion: "No envía el usuario web a SAP al consultar clientes.", Modulo: "pin", Grupo: "Sistema"},
	{Slug: ProductoMantenimiento, Nombre: "Mantenimiento de productos", Descripcion: "Actualizar un material desde SAP y regenerar el Excel de materiales.", Modulo: "pin", Grupo: "Sistema"},
	{Slug: GestionIngresar, Nombre: "Ingresar a gestión", Descripcion: "Entrar a gestión.", Modulo: "gestion", Grupo: "Gestión"},
	{Slug: RolesAdministrar, Nombre: "Administrar roles y permisos", Descripcion: "Las pantallas de roles y permisos.", Modulo: "gestion", Grupo: "Gestión"},
	{Slug: UsuariosAdministrarInternos, Nombre: "Administrar usuarios internos", Descripcion: "Sin este permiso solo se gestionan proveedores.", Modulo: "gestion", Grupo: "Gestión"},
	{Slug: UserIndex, Nombre: "Ver usuarios", Descripcion: "Listado de usuarios", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: UserCreate, Nombre: "Crear usuario", Descripcion: "Crear usuario", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: UserEdit, Nombre: "Editar usuario", Descripcion: "Editar usuario", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: UserDelete, Nombre: "Eliminar usuario", Descripcion: "Eliminar usuario", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ProductIndex, Nombre: "Ver Productos", Descripcion: "Listado de Productos", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: PaymentIndex, Nombre: "Ver Pagos", Descripcion: "Listado de Pagos", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ClientCodeIndex, Nombre: "Ver Código Cliente", Descripcion: "Listado de Código Cliente", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ClientCodeCreate, Nombre: "Crear Código Cliente", Descripcion: "Crear Código Cliente", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ClientCodeDestroy, Nombre: "Eliminar Código Cliente", Descripcion: "Eliminar Código Cliente", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ListIndex, Nombre: "Ver Mis Listas", Descripcion: "Listado de Listas", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ListShow, Nombre: "Listas de Empresa", Descripcion: "Listas de Empresa", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ListCreate, Nombre: "Crear Mis Listas", Descripcion: "Crear Mis Listas", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ListDestroy, Nombre: "Eliminar Lista", Descripcion: "Eliminar Lista", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: LegajoIndex, Nombre: "Ver Legajo impositivo", Descripcion: "Listado del legajo impositivo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: LegajoUpdate, Nombre: "Editar Legajo impositivo", Descripcion: "Editar el legajo impositivo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MaterialsIndex, Nombre: "Ver Materiales con Defectos", Descripcion: "Listado de Materiales con Defectos", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MaterialsShow, Nombre: "Ver Material con Defecto", Descripcion: "Ver detalle de Material con Defecto", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MaterialsCreate, Nombre: "Crear Material con Defecto", Descripcion: "Crear Material con Defecto", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MaterialsDestroy, Nombre: "Eliminar Material con Defecto", Descripcion: "Eliminar Material con Defecto", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: LeadIndex, Nombre: "Ver Leads", Descripcion: "Listado de Leads", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TagIndex, Nombre: "Ver Etiquetas", Descripcion: "Listado de Etiquetas", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TagCreate, Nombre: "Crear Etiquetas", Descripcion: "Crear Etiqueta", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TagEdit, Nombre: "Editar Etiqueta", Descripcion: "Editar Etiqueta", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TagDestroy, Nombre: "Eliminar Etiqueta", Descripcion: "Eliminar Etiqueta", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: FilterOrderIndex, Nombre: "Ver Filtros", Descripcion: "Listado de Filtros", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: FilterOrderShow, Nombre: "Ver Ordenamiento de filtros", Descripcion: "Ver Ordenamiento de filtros", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: FilterOrderUpdate, Nombre: "Editar Ordenamiento de filtros", Descripcion: "Cambiar el orden de los filtros", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ComponentTypesTypes, Nombre: "Ver Tipos de componentes", Descripcion: "Listado de Tipos de componentes", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ComponentTypesIndex, Nombre: "Ver Componentes de la Sección", Descripcion: "Listado de los Componentes de la sección", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ComponentsIndex, Nombre: "Ver Componentes", Descripcion: "Listado de Componentes", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ComponentsCreate, Nombre: "Crear Componente", Descripcion: "Crear Componente", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ComponentsComponentEdit, Nombre: "Editar Componente", Descripcion: "Editar Componente", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: ComponentsComponentDelete, Nombre: "Eliminar Componente", Descripcion: "Eliminar Componente", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: LogosIndex, Nombre: "Ver Logos", Descripcion: "Listado de Logos", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: LogosCreate, Nombre: "Crear Logo", Descripcion: "Crear Logo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: LogosLogoEdit, Nombre: "Editar Logo", Descripcion: "Editar Logo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: LogosLogoDelete, Nombre: "Eliminar Logo", Descripcion: "Eliminar Logo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: HierarchyNodeIndex, Nombre: "Ver Nodos", Descripcion: "Listado de Nodos", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: HierarchyNodeCreate, Nombre: "Crear Nodo", Descripcion: "Crear Nodo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: HierarchyNodeNodeEdit, Nombre: "Editar Nodo", Descripcion: "Editar Nodo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: HierarchyNodeNodeDelete, Nombre: "Eliminar Nodo", Descripcion: "Eliminar Nodo", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TeamIndex, Nombre: "Ver Personal", Descripcion: "Listado de Personal", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TeamCreate, Nombre: "Crear Personal", Descripcion: "Crear Personal", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TeamEdit, Nombre: "Editar Personal", Descripcion: "Editar Personal", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: TeamDelete, Nombre: "Eliminar Personal", Descripcion: "Eliminar Personal", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MessagesIndex, Nombre: "Ver Mensajes", Descripcion: "Listado de Mensajes", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MessagesCreate, Nombre: "Crear Mensajes", Descripcion: "Crear Mensajes", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MessagesMessageEdit, Nombre: "Editar Mensajes", Descripcion: "Editar Mensajes", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: MessagesMessageDelete, Nombre: "Eliminar Mensajes", Descripcion: "Eliminar Mensajes", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: NotificationsIndex, Nombre: "Ver Novedad", Descripcion: "Listado de Novedades", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: NotificationsCreate, Nombre: "Crear Novedad", Descripcion: "Crear Novedad", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: NotificationsNotificationEdit, Nombre: "Editar Novedad", Descripcion: "Editar Novedad", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: NotificationsNotificationDelete, Nombre: "Eliminar Novedad", Descripcion: "Eliminar Novedad", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: FeatureFlagsIndex, Nombre: "Ver Funcionalidades", Descripcion: "Listado de Funcionalidades", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: FeatureFlagsCreate, Nombre: "Crear funcionalidad", Descripcion: "Crear funcionalidad", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: FeatureFlagsFeatureFlagEdit, Nombre: "Editar Funcionalidades", Descripcion: "Editar Funcionalidades", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: FeatureFlagsFeatureFlagDelete, Nombre: "Eliminar Funcionalidades", Descripcion: "Eliminar Funcionalidades", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: CertificacionIndex, Nombre: "Ver Certificación", Descripcion: "Listado de la certificación", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: CertificacionUpdate, Nombre: "Editar Certificación", Descripcion: "Editar la certificación", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: CalidadIndex, Nombre: "Ver Política de calidad", Descripcion: "Listado de la politica de calidad", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: CalidadUpdate, Nombre: "Editar Política de calidad", Descripcion: "Editar la politica de calidad", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: SegmentsIndex, Nombre: "Ver Segmentos", Descripcion: "Listado de Segmentos", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: SegmentsCreate, Nombre: "Crear Segmento", Descripcion: "Crear Segmento", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: SegmentsSegmentEdit, Nombre: "Editar Segmento", Descripcion: "Editar Segmento", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: SegmentsSegmentDelete, Nombre: "Eliminar Segmento", Descripcion: "Eliminar Segmento", Modulo: "gestion", Grupo: "Pantallas de gestión"},
	{Slug: EmpresasIndex, Nombre: "Ver Empresas", Descripcion: "Listado de Empresas", Modulo: "gestion", Grupo: "Pantallas de gestión"},
}

// Existe indica si el slug pertenece al catálogo.
func Existe(slug string) bool {
	for _, permiso := range Catalogo {
		if permiso.Slug == slug {
			return true
		}
	}
	return false
}
