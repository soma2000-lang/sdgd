sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
      ], function (Controller, JSONModel) {
        "use strict";
      
        return Controller.extend("your.namespace.EmployeeList", {
          onInit: function () {
            // Create a JSON model and set it to the view
            var oModel = new JSONModel("model/employees.json");
            this.getView().setModel(oModel);
          },
      
          onEmployeeSelect: function (oEvent) {
            var oSelectedItem = oEvent.getParameter("listItem");
            var oEmployeeData = oSelectedItem.getBindingContext().getObject();
            var sGrade = oEmployeeData.grade;
      
            // Navigate based on employee grade
            if (sGrade === "A") {
              this.getOwnerComponent().getRouter().navTo("employeeDetailA");
            } else if (sGrade === "B") {
              this.getOwnerComponent().getRouter().navTo("employeeDetailB");
            }
          }
        });
      });
      