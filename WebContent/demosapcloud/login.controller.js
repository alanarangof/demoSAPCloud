sap.ui.controller("demosapcloud.login", {
    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf demosapcloud.login
    */
    onInit: function() {
        
    },

    /**
    * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
    * (NOT before the first rendering! onInit() is used for that one!).
    * @memberOf demosapcloud.login
    */

    onBeforeRendering: function() {

    },

    loginUser: function(){
        var sUserVal = sap.ui.getCore().byId("idUser").getValue();
        var sPassVal = sap.ui.getCore().byId("idPass").getValue();
        if (sPassVal==="12345"){
            if (sUserVal==="usuario"){
                var oTextEsp = {
                    main:{
                        tileFacturas:{
                            icon: "sap-icon://receipt",
                            Name: "Facturas",
                            Descrip: "Facturas y sus estados"
                        },
                        tilePagos:{
                            icon: "sap-icon://simple-payment",
                            Name: "Pagos",
                            Descrip: "Pagos y retenciones"
                        },
                        title:"Bienvenido"
                    }
                };
                var oTextModelEsp = new sap.ui.model.json.JSONModel(oTextEsp);
                sap.ui.getCore().setModel(oTextModelEsp,"lang");
                sap.ui.getCore().byId("idErrorLabel").setText("");
                app.to("idmainpage");
            } else if(sUserVal==="user"){
                var oTextEng = {
                    main:{
                        tileFacturas:{
                            icon: "sap-icon://receipt",
                            Name: "Invoices",
                            Descrip: "Invoices and their state"
                        },
                        tilePagos:{
                            icon: "sap-icon://simple-payment",
                            Name: "Payments",
                            Descrip: "Payments and retentions"
                        },
                        title:"Welcome"
                    }
            
                };
                var oTextModelEng = new sap.ui.model.json.JSONModel(oTextEng);
                sap.ui.getCore().setModel(oTextModelEng,"lang");
                sap.ui.getCore().byId("idErrorLabel").setText("");
                app.to("idmainpage");
            }else
                sap.ui.getCore().byId("idErrorLabel").setText("Invalid credentials");
        }else
            sap.ui.getCore().byId("idErrorLabel").setText("Invalid credentials");
    },

    /**
    * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
    * This hook is the same one that SAPUI5 controls get after being rendered.
    * @memberOf demosapcloud.login
    */

    onAfterRendering: function() {

    },

    /**
    * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
    * @memberOf demosapcloud.login
    */

    onExit: function() {

    }

});