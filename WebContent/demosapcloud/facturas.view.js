sap.ui.jsview("demosapcloud.facturas", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demosapcloud.facturas
	*/ 
	getControllerName : function() {
		return "demosapcloud.facturas";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demosapcloud.facturas
	*/ 
	createContent : function(oController) {
		var oSimpleForm = new sap.ui.layout.form.SimpleForm({
			layout:sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
			title:"Filtrar",
			content:[
				
				new sap.m.Input({
					placeholder:"Sociedad",
					maxLength:4
				}),
				new sap.m.DatePicker({
					text:"Fecha Desde:"
				}),
				new sap.m.DatePicker({
					text:"Fecha Hasta:"
				}),
				new sap.m.CheckBox({
					text:"Pendientes de pago"
				})	
			]
		});
		
		var oCol1 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Factura"}),
			template:new sap.m.Text({text:"{Factura}"})
		});
		var oCol2 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Sociedad"}),
			template:new sap.m.Text({text:"{Sociedad}"})
		});
		var oCol3 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Tipo de Comprobante"}),
			template:new sap.m.Text({text:"{TipoComprobante}"})
		});
		var oCol4 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Fecha"}),
			template:new sap.m.Text({text:"{Fecha}"})
		});
		var oCol5 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Neto"}),
			template:new sap.m.Text({
				text:"{Neto}",
				textAlign:sap.ui.core.TextAlign.Right
				})
		});
		var oCol6 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Bruto"}),
			template:new sap.m.Text({
				text:"{Bruto}",
				textAlign:sap.ui.core.TextAlign.Right
				})
		});
		var oCol7 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Moneda"}),
			template:new sap.m.Text({text:"{Moneda}"})
		});
		var oCol8 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"NroPago"}),
			template:new sap.m.Text({text:"{NroPago}"})
		});
		var oCol9 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"FechaPago"}),
			template:new sap.m.Text({text:"{FechaPago}"})
		});
		
		var oTable = new sap.ui.table.Table({
			title: "Listado de Facturas",
			columns:[
				oCol1,
				oCol2,
				oCol3,
				oCol4,
				oCol5,
				oCol6,
				oCol7,
				oCol8,
				oCol9
			]
		});
		
		oTable.bindRows("/facturas");
		
		var oPage = new sap.m.Page({
			title: "Facturas",
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			content: [
				oSimpleForm,
				oTable
			]
		});
 		return oPage;
	}

});