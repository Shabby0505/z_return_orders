sap.ui.define([
	"sap/ui/base/ManagedObject"
], function(
	ManagedObject
) {
	"use strict";

	return ManagedObject.extend("com.snet.re.order.zreturnorders.model.formatter", {

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


	});
});