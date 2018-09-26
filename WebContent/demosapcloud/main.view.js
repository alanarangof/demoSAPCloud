sap.ui.jsview("demosapcloud.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demosapcloud.main
	*/ 
	getControllerName : function() {
		return "demosapcloud.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demosapcloud.main
	*/ 
	createContent : function(oController) {
	
		var oTileFacturas = new sap.m.StandardTile({
			icon:"{lang>/main/tileFacturas/icon}",
			title:"{lang>/main/tileFacturas/Name}",
			info:"{lang>/main/tileFacturas/Descrip}",
			press: [oController.goToFacturasPage,oController]
		});
		var oTilePagos = new sap.m.StandardTile({
			icon:"{lang>/main/tilePagos/icon}",
			title:"{lang>/main/tilePagos/Name}",
			info:"{lang>/main/tilePagos/Descrip}",
			press: [oController.goToPagosPage,oController]
		});
		var oTileCont = new sap.m.TileContainer("idTileCont",{
			tiles:[
				oTileFacturas,
				oTilePagos
			]
		});
		var oPage = new sap.m.Page({
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			title: "{lang>/main/title}",
			content: [
				oTileCont
				
			]
		});
 		return oPage;
	}

});