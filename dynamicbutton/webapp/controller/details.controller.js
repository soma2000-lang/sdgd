sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("dynamicbutton.controller.myview", {
           // onInit: function () {

          //  }
          onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("details").attachPatternMatched(this._onObjectMatched, this);
          },
          
          _onObjectMatched: function (oEvent) {
            var sObjectId = oEvent.getParameter("arguments").id;
            // Fetch and bind details data for the item with the provided id
            // You can use oDataModel.read or similar methods here
          },
          
              
        });
    });

  