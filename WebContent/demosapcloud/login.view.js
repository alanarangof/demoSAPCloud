sap.ui.jsview("demosapcloud.login", {
    /** Specifies the Controller belonging to this View. 
    * In the case that it is not implemented, or that null is returned, this View does not have a Controller.
    * @memberOf demosapcloud.login
    */ 
    getControllerName: function() {
        return "demosapcloud.login";
    },
    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
    * Since the Controller is given to this method, its event handlers can be attached right away. 
    * @memberOf demosapcloud.login
    */ 
    createContent: function(oController) {
        var oUser = new sap.m.Input("idUser",{
            placeholder: "Enter your name",
            description:"ID"
        });
        var oPass = new sap.m.Input("idPass",{
            placeholder: "Enter your password",
            description:"Password"
        });
        var oSubmit = new sap.m.Button("idButton",{
            text: "Submit",
            press: [oController.loginUser,oController]
        });
        var oErrorLabel = new sap.m.Text("idErrorLabel");
        var oPage = new sap.m.Page({
           title: "Login",
           content: [
               oUser,
               oPass,
               oSubmit,
               oErrorLabel
           ]
        });
        return oPage;
    }
});