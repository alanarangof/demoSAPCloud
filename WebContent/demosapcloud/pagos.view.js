sap.ui.jsview("demosapcloud.pagos", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demosapcloud.pagos
	*/ 
	getControllerName : function() {
		return "demosapcloud.pagos";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demosapcloud.pagos
	*/ 
	createContent : function(oController) {
		
		var img = new sap.m.Image({
			src:"https://pbs.twimg.com/media/BwONPYgIcAAIimZ.jpg"
		});
		var oPage = new sap.m.Page({
			title: "Pagos",
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			content: [
				img
			]
		});
 		return oPage;
	}

});