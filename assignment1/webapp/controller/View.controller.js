sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("assignment1.controller.View", {
            onInit: function () {
                this.oModel=this.getOwnerComponent().getModel();
                // this.oModel.setProperty("/showIcon",false);

            },
            onPress: function (Event) {
                
                // this.oModel.setProperty("/showIcon",true);
              
                // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // oRouter.navTo("secondview");

            },
            onItemPress: function (oEvent) {
                
                var param= oEvent.getSource();
                var productId= getBindingContext.getProperty("ProductId");
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("secondview",
                {
                    productId:productId
                });

            }
        });
    });
