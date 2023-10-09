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
                var oModel = new JSONModel({
                  items: aData
                });
                this.getView().setModel(oModel);
              },
              
              onDraftPress: function () {
                this.byId("buttonLayout").getItems().forEach(function (oButton) {
                  oButton.setVisible(oButton.getText() !== "Draft");
                });
              },
              
              onSavePress: function () {
                // Implement your Save logic here
              },
              
              onCancelPress: function () {
                // Implement your Cancel logic here
              },
              
        });
    });
