sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("assignment1.controller.secondview", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("secondview").attachMatched(this._onRouteMatched,this);
            },

            _onRouteMatched:function(oEvent){
                var args=oEvent.getParameter("arguments");
                var productId =JSON.parse(args.productId);
                console.log("Clicked Row Details is in the 2nd Page",productId);

            }


                // var oModel = oRouter.getRoute("RouteView").arguments;
                // var ParameterValue=oModel.productId;

            
        });
    });
