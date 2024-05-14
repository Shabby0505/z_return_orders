sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
        statusText1: function(iValue) {
            debugger
    switch (iValue) {
        case "INST":
            this.getView().byId('idStatus').addStyleClass('colorGreen')
            return iValue;
        case "CUST":
            return sap.ui.core.ValueState.Warning;
        case "":
            return sap.ui.core.ValueState.Error;
        default:
            return sap.ui.core.ValueState.None;
    }
    
   

  }

    };
});