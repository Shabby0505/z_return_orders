jQuery.sap.require("sap.ndc.BarcodeScanner");
var itemSerialInput;
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Element",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/odata/v2/ODataModel",
    "com/snet/re/order/zreturnorders/controls/ExtScanner"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Element, JSONModel, ODataModel,ExtScanner) {
        "use strict";
        var prefixId;
        var oScanResultText;
        return Controller.extend("com.snet.re.order.zreturnorders.controller.View1", {
            //  formatter: formatter,

            onInit: function () {
                // prefixId = this.createId();
                // if (prefixId) {
                //     prefixId = prefixId.split("--")[0] + "--";
                // } else {
                //     prefixId = "";
                // }
                // oScanResultText = Element.getElementById(prefixId + 'sampleBarcodeScannerResult');

             
                this.oScanner = new ExtScanner({
                    settings: true,
                    valueScanned: this.onScanned.bind(this),
                    decoderKey: 'text',
                    decoders: this.getDecoders()
                  });

            },

            onScanPressed:function(oEvent){
                // itemSerialInput = oEvent.oSource.oParent.getCells()[1];
              //  itemSerialInput = oEvent.getSource().getParent();
                itemSerialInput = oEvent.getSource().mAggregations.tooltip;
                if(sap.ui.Device.os.name === "iOS" && sap.ui.Device.browser.name !=="sf"){
                        sap.m.MessageToast.show("Please use Safari in order to access Camera.!");
                }
                else{
                    this.oScanner.open();
                }
            },
            parserText: function(oResult) {
                var sText = '';
                var iLength = oResult.text.length;
                for (var i = 0; i !== iLength; i++) {
                  if (oResult.text.charCodeAt(i) < 32) {
                    sText += ' ';
                  } else {
                    sText += oResult.text[i];
                  }
                }
                return sText;
              },
           parserPDF417UII: function(oResult) {
                // we expect that
                // first symbol of UII (S - ASCII = 83) or it just last group
                var sText = oResult.text || '';
                if (oResult.format && oResult.format === 10) {
                  sText = '';
                  var iLength = oResult.text.length;
                  var aChars = [];
                  for (var i = 0; i !== iLength; i++) {
                    aChars.push(oResult.text.charCodeAt(i));
                  }
                  var iStart = -1;
                  var iGRCounter = 0;
                  var iGroupUII = -1;
                  var sTemp = '';
                  aChars.forEach(function(code, k) {
                    switch (code) {
                      case 30:
                        if (iStart === -1) {
                          iStart = k;
                          sTemp = '';
                        } else {
                          sText = sTemp;
                          iGRCounter = -1;
                        }
                        break;
                      case 29:
                        iGRCounter += 1;
                        break;
                      default:
                        if (iGRCounter > 2 && code === 83 && iGRCounter > iGroupUII) {
                          sTemp = '';
                          iGroupUII = iGRCounter;
                        }
                        if (iGroupUII === iGRCounter) {
                          sTemp += String.fromCharCode(code);
                        }
                    }
                  });
                  if (sText) {
                    sText = sText.slice(1);
                  }
                }
                return sText;
              },
            getDecoders: function() {
                return [
                  {
                    key: 'PDF417-UII',
                    text: 'PDF417-UII',
                    decoder: this.parserPDF417UII,
                  },
                  {
                    key: 'text',
                    text: 'TEXT',
                    decoder: this.parserText,
                  },
                ];
              },
            onScanned: function(oEvent) {
                //this.oMainModel.setProperty('/scannedValue', oEvent.getParameter('value'));

                switch (itemSerialInput) {
                    case "scan1":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult1').setValue(oEvent.getParameter('value'))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult1').setValue('');
                        }
                        break;
                    case "scan2":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult2').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult2').setValue('');
                        }
                        break;
                    case "scan3":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult3').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult3').setValue('');
                        }
                        break;
                    case "scan4":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult4').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult4').setValue('');
                        }
                        break;
                    case "scan5":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult5').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult5').setValue('');
                        }
                        break;
                    case "scan6":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult6').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult6').setValue('');
                        }
                        break;
                    case "scan7":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult7').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult7').setValue('');
                        }
                        break;
                    case "scan8":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult8').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult8').setValue('');
                        }
                        break;
                    case "scan9":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult9').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult9').setValue('');
                        }
                        break;
                    case "scan10":
                        if (oEvent.getParameter("value")) {
                            this.getView().byId('sampleBarcodeScannerResult10').setValue(oEvent.getParameter("value"))
                        } else {
                            this.getView().byId('sampleBarcodeScannerResult10').setValue('');
                        }
                        break;
                    default:
                        alert("Please enter Serial Number Manually!!");
                }






               // itemSerialInput.setValue( oEvent.getParameter('value'));
              },

            onNavToCustomer: function (oEvent) {

                var orderID = parseInt(oEvent.getSource().mProperties.text);
                if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
                    var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation");
                    oCrossAppNav.toExternal({
                        target: { semanticObject: "Z_SO_SDPGR", action: "manage" },
                        params: { OrderID: [orderID] }
                    })
                }

            },

            onScanSuccess: function (oEvent) {
                if (oEvent.getParameter("cancelled")) {
                    MessageToast.show("Scan cancelled", { duration: 1000 });
                } else {

                    switch (oEvent.mParameters.id.split('--')[2]) {
                        case "sampleBarcodeScannerButton1":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult1').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult1').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton2":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult2').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult2').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton3":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult3').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult3').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton4":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult4').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult4').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton5":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult5').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult5').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton6":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult6').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult6').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton7":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult7').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult7').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton8":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult8').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult8').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton9":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult9').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult9').setValue('');
                            }
                            break;
                        case "sampleBarcodeScannerButton10":
                            if (oEvent.getParameter("text")) {
                                this.getView().byId('sampleBarcodeScannerResult10').setValue(oEvent.getParameter("text"))
                            } else {
                                this.getView().byId('sampleBarcodeScannerResult10').setValue('');
                            }
                            break;
                        default:
                            alert("Please enter Serial Number Manually!!");
                    }




                }
            },

            onScanError: function (oEvent) {
                MessageToast.show("Scan failed: " + oEvent, { duration: 1000 });
            },

            onScanLiveupdate: function (oEvent) {
                // User can implement the validation about inputting value
            },

            onAfterRendering: function () {
                // Reset the scan result
                // var oScanButton = Element.getElementById(prefixId + 'sampleBarcodeScannerButton');
                // if (oScanButton) {
                //     $(oScanButton.getDomRef()).on("click", function () {
                //         oScanResultText.setText('');
                //     });
                // }
            },

            onPressReset: function (oEvent) {
                var i = 1;
                sap.ui.core.BusyIndicator.show(0);
                for (i = 1; i <= 10; i++) {
                    this.getView().byId("sampleBarcodeScannerResult" + i).setValue('');
                }
                this.getView().byId("sidPartNumber").setValue('');
                sap.ui.core.BusyIndicator.hide();



            },


            //--------------------- Start of Select Row---------------------------------
            onSelectRow: function (oEvent) {

                var returOrderNumber = "";
                var oItem = this.getView().byId("idSerNoTable").getSelectedItem();
                //   var oEntry = oItem.returnOrderModel("yourODataModel").getObject();
                returOrderNumber = oItem.getBindingContext("returnOrderModel").getObject().ReturnOrder;
                if (returOrderNumber) {
                    this.getView().byId("idReturnOrderBtn").setEnabled(false);
                    //  this.getView().byId("idPGRBtn").setEnabled(true);
                }
                else {
                    this.getView().byId("idReturnOrderBtn").setEnabled(true);
                    //  this.getView().byId("idPGRBtn").setEnabled(true);
                }


            },

            //---------------------End of Select Row -----------------------------------


            // --------------------Start of Search -------------------------------------
            onPressSearch: function (oEvent) {

                var count = 0, scanner = [];
                this.getView().byId("idReturnOrderBtn").setEnabled(false);
                var oMaterial = this.getView().byId("sidPartNumber").getValue();
                var oFilter = [];
                sap.ui.core.BusyIndicator.show(0);
                for (var i = 1; i <= 10; i++) {


                    scanner[i] = this.getView().byId("sampleBarcodeScannerResult" + i + "").getValue();
                    if (scanner[i] !== '') {
                        count++;
                        oFilter.push(new sap.ui.model.Filter("SerialNumber", sap.ui.model.FilterOperator.EQ, scanner[i]));
                        //  oFilter.push(scanner[i]);
                    }
                }
                scanner.shift();
                if (count !== 0 || oMaterial !== '') {
                  
                    if(oMaterial)
                    {
                        oFilter.push(new sap.ui.model.Filter("Material", sap.ui.model.FilterOperator.EQ, oMaterial));
                    }
                    
                    var oModel = this.getView().getModel();
                    this.returnOrderModel = new JSONModel();
                    this.getView().setModel(this.returnOrderModel, "returnOrderModel");

                    //  oModel.read("/RETURN_ORDERSet(SerialNumber='" + scanner[0] + "')", {
                    oModel.read("/RETURN_ORDERSet", {
                        filters: oFilter,
                        success: function (oData, oResponse) {

                           
                            var obj = oResponse.data.results;
                            var i = 0;
                            this.returnOrderModel.setData(obj);
                            // for(i = 0;i<obj.length; i++){

                            //     switch (obj[i].Status) {
                            //         case "INST":
                            //             this.getView().byId('idStatus').addStyleClass('colorGreen')

                            //         case "CUST":

                            //         case "":

                            //         default:

                            //     }
                            // }                           

                           
                            sap.ui.core.BusyIndicator.hide();
                        }.bind(this),
                        error: function (oError) {
                         
                            this.returnOrderModel = new JSONModel();
                            this.returnOrderModel.setData(null);
                            sap.ui.core.BusyIndicator.hide();
                            MessageToast.show(JSON.parse(oError.responseText).error.message.value);
                        }.bind(this),
                    });
                }
                else {
                    this.returnOrderModel = new JSONModel();
                    MessageToast.show("Please Enter Serial Number!!!");
                    this.returnOrderModel.setData({});
                    sap.ui.core.BusyIndicator.hide();
                    return true;

                    
                }

            },

            //-------------------End of Search -----------------------------------------

            //------------------Start of Creat Return Order ----------------------------

            onPressedCreateRE: function (oEvent) {

                var oTableData = "";
                var payLoad = {};
                var oRowSelected = this.getView().byId("idSerNoTable").getSelectedItem();
                //   var oEntry = oItem.returnOrderModel("yourODataModel").getObject();
                sap.ui.core.BusyIndicator.show(0);
                oTableData = oRowSelected.getBindingContext("returnOrderModel").getObject();
                payLoad.SerialNumber = oTableData.SerialNumber;
                payLoad.ReturnOrder = oTableData.ReturnOrder;
                payLoad.FunctionalLocation = oTableData.FunctionalLocation;
                payLoad.Status = oTableData.Status;
                payLoad.Material = oTableData.Material;
                payLoad.Description = oTableData.Description;
                var oModel = this.getView().getModel();


                oModel.create("/RETURN_ORDERSet", payLoad, {
                    method: "POST",             
                    success: function (data, oResponse) {
                        sap.ui.core.BusyIndicator.hide();

                        MessageToast.show(JSON.parse(oResponse.headers['sap-message']).message);
                    }.bind(this),
                    error: function (e) {

                        //MessageToast.show(e.responseText.split(',')[2].split(":")[1] + ' ' + e.responseText.split(',')[2].split(":")[2]);
                        sap.ui.core.BusyIndicator.hide();
                        MessageToast.show(JSON.parse(e.responseText).error.message.value);
                        this.getView().byId("idButtonUpdate").setEnabled(false);
                    }.bind(this)
                });

             

            },

            //------------------ End of Create Return Order ----------------------------

            //------------------Start of Creat Service Delivery & PGR ----------------

            // onPressedCreatePGR:function(oEvent)
            // {

            //     var  oTableData = "";
            //     var payLoad ={};
            //     var oRowSelected= this.getView().byId("idSerNoTable").getSelectedItem();
            //  //   var oEntry = oItem.returnOrderModel("yourODataModel").getObject();
            //      oTableData =  oRowSelected.getBindingContext("returnOrderModel").getObject();


            //      payLoad.serialNo = oTableData.serialNo;
            //      payLoad.funLocation = oTableData.funLocation;
            //      payLoad.status = oTableData.status;
            //      payLoad.equipment = oTableData.equipment;
            //      payLoad.serialNo = oTableData.serialNo;

            //      var oModel = this.getView().getModel();

            //      oModel.create("/scarrEntitySet", payLoad, null, function (data,response) {
            //         MessageToast.show("Service Delivery & PGR successfully created  " + oCust1);
            //         var mylocation = location; mylocation.reload();
            //         }, function (Error) {
            //         MessageToast.show("Customer Creation Failed  " + oCust1);
            //         });
            // }

            //-----------------End Of Creating Service Delivery PGR--------------------


        });
    });
