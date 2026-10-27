sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.mybankdetails.controller.App", {
        onInit() {

            /* Setting Global JSON Model */
            this._setGlobalModel();

            /* Cheking broswer language and setting the global resource model*/
            this._setGlobalLanguage();

            /* Get the user profile */
            this.getUserProfile();
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
        },

        getUserProfile: function () {
            let oProfileModel = new sap.ui.model.json.JSONModel(
                { profile: sap.ui.require.toUrl("com/sap/mybankdetails/images/csscrackProfile.png") })
            this.getView().setModel(oProfileModel);
        },

        _setGlobalModel: function () {             // If data is not getting from model then get data from model to controller then utilise.
            let oModel = this.getOwnerComponent().getModel("oBankDetails");
            this.getView().setModel(oModel)
        },

        _setGlobalLanguage: function () {
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
        }
    });
});