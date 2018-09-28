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

	$.getJSON("data/facturas.json",function(data){
		var oFacturasModel = new sap.ui.model.json.JSONModel(data);
		sap.ui.getCore().setModel(oFacturasModel,"data");
	});
	app.to("idfacturaspage");	
},
goToPagosPage : function(oEvt){
	$.getJSON("data/pagos.json",function(data){
		var oPagosModel = new sap.ui.model.json.JSONModel(data);
		sap.ui.getCore().setModel(oPagosModel,"data");
	});
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