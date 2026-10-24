sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetails.controller.App", {
        onInit() {
            // debugger;
            /* Cheking broswer language and setting the global resource model*/
            // if (navigator.language == "es") {
            //     var i18nModel = this.getOwnerComponent().getModel("i18n_es");
            //     this.getOwnerComponent().setModel(i18nModel, "i18n")
            // } else {
            //     var i18nModel = this.getOwnerComponent().getModel("i18n");
            //     this.getOwnerComponent().setModel(i18nModel, "i18n")
            // }

            // Optimized way
            var appLang;
            if (navigator.language == "es") {
                appLang = "i18n_es";
            } else if (navigator.language == "en") {
                appLang = "i18n";
            } else {
                appLang = "i18n";
            }
            var i18nModel = this.getOwnerComponent().getModel(appLang);
            this.getOwnerComponent().setModel(i18nModel, "i18n")
        },
        onOpenBankDetails: function () {
            // create dialog lazily
            if (!this.moreBankDetails) {
                this.moreBankDetails = this.loadFragment({
                    name: "com.sap.mybankdetails.view.fragments.MoreDetails"
                })
            }

            this.moreBankDetails.then(function (oDialog) {
                oDialog.open();
            });
        },

        onCloseBankDetails: function () {
            this.byId("moreBankDetails").close();
        }
    });
});