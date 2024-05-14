/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */
// jQuery.sap.registerResourcePath("zxingjs0153", "com/snet/re/order/zreturnorders/controls/libs/zxingjs0153.min");
// jQuery.sap.require("zxingjs0153");

// jQuery.sap.registerResourcePath("extScanner", "com/snet/re/order/zreturnorders/controls/ExtScanner");
// jQuery.sap.require("extScanner");
sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/snet/re/order/zreturnorders/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("com.snet.re.order.zreturnorders.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);