sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("ui5.brgaapEntryLevelTest.controller.App", {
		onInit() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
		onNavBack: function () {
            let history = History.getInstance();
            let previousRoute = history.getPreviousHash();
    
            if (previousRoute !== undefined) {
              window.history.go(-1);
            } else {
              let routes = this.getOwnerComponent().getRouter();
              routes.navTo("", {}, true);
            }
        }
	});
});
