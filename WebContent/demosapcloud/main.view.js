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
		var sText = "testtext";
		var oTileTemp = new sap.m.StandardTile("idTile",{
			icon:"{icon}",
			title:"{Name}",
			info:"{Descrip}",
			press: [oController.goToNextPage,oController]
		});
		
		var oTileCont = new sap.m.TileContainer();
		
		oTileCont.bindAggregation("tiles","/tabs",oTileTemp);
		
		var oPage = new sap.m.Page({
			title: "Bienvenido",
			content: [
				oTileCont
			]
		});
 		return oPage;
	}

});