sap.ui.controller("demosapcloud.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf demosapcloud.main
*/
onInit: function() {

},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf demosapcloud.main
*/
onBeforeRendering: function() {
	

},
goToFacturasPage : function(oEvt){
	var oData = {
		facturas:[{
			Factura: "01f12345670",
			Sociedad: "Soc1",
			TipoComprobante: "FC",
			Fecha: "18/04/2018",
			Neto: "35.415,12",
			Bruto: "38.754,22",
			Moneda: "ARS",
			NroPago: "0123456780",
			FechaPago: "20/04/2018"
		},{
			Factura: "01f12345671",
			Sociedad: "Soc1",
			TipoComprobante: "FC",
			Fecha: "19/05/2018",
			Neto: "35.975,87",
			Bruto: "38.722,77",
			Moneda: "ARS",
			NroPago: "0123456781",
			FechaPago: "20/05/2018"
		},{
			Factura: "01f12345672",
			Sociedad: "Soc2",
			TipoComprobante: "FC",
			Fecha: "15/07/2018",
			Neto: "35.654,64",
			Bruto: "38.123,54",
			Moneda: "ARS",
			NroPago: "0123456782",
			FechaPago: "20/07/2018"
		}]
		
	};
	var oModel = new sap.ui.model.json.JSONModel(oData);
	sap.ui.getCore().setModel(oModel,"data");
	app.to("idfacturaspage");	
},
goToPagosPage : function(oEvt){
	app.to("idpagospage");
	
},
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf demosapcloud.main
*/
onAfterRendering: function() {

	
},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf demosapcloud.main
*/
//	onExit: function() {
//
//	}

});