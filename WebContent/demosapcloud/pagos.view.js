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
				})
			]
		});
		
		var oCol1 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Nro Orden de Pago"}),
			template:new sap.m.Text({text:"{data>nro}"})
		});
		var oCol2 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Fecha Documento"}),
			template:new sap.m.Text({text:"{data>fecha}"})
		});
		var oCol3 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Pago Total"}),
			template:new sap.m.Text({
				text:"{data>total}",
				textAlign:sap.ui.core.TextAlign.Right
				})
		});
		var oCol4 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Importe Neto"}),
			template:new sap.m.Text({
				text:"{data>neto}",
				textAlign:sap.ui.core.TextAlign.Right
				})
		});
		var oCol5 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Moneda"}),
			template:new sap.m.Text({text:"{data>moneda}"})
		});
		var oCol6 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Forma de Pago"}),
			template:new sap.m.Text({text:"{data>forma}"})
		});
		var oCol7 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Nro de Cheque"}),
			template:new sap.m.Text({text:"{data>cheque}"})
		});
		var oCol8 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Lugar de Pago"}),
			template:new sap.m.Text({text:"{data>lugar}"})
		});
		var oCol9 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Sociedad"}),
			template:new sap.m.Text({text:"{data>sociedad}"})
		});
		var oCol10 = new sap.ui.table.Column({
			label:new sap.m.Label({text:"Descargar"}),
			template:new sap.m.Button({icon:"sap-icon://download"})
		});
		
		var oTable = new sap.ui.table.Table({
			title: "Listado de Pagos",
			columns:[
				oCol1,
				oCol2,
				oCol3,
				oCol4,
				oCol5,
				oCol6,
				oCol7,
				oCol8,
				oCol9,
				oCol10
			]
		});
		
		oTable.bindRows("data>/pagos");
		
		var oPage = new sap.m.Page({
			title: "Pagos",
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

