sap.ui.define([], () => {
    "use strict";

    return {

        /*
        @param Number
        @return Number
        * Formating the display value of Donutchart
        */
        getPercentage: function(oValue){
            let empSalary = this.getOwnerComponent().getModel('oBankDetails').getProperty("/empSalary");
            let percentageVal = (oValue / empSalary)*100;
            return percentageVal;

        },

        /*
        @param Number
        @return Number
        * Formating the semantic colors value of Donutchart
        */
        getState: function(oValue){
            let empSalary = this.getOwnerComponent().getModel('oBankDetails').getProperty("/empSalary");
            let percentageVal = (oValue/empSalary) * 100;
            if(percentageVal > 60){
                return "Error"
            } else if(percentageVal > 40){
                return "Critical"
            }else{
                return "Good"
            }
        }
    }
});