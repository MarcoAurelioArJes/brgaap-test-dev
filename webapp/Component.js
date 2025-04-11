sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
 ], (UIComponent, Device) => {
    "use strict";
 
    return UIComponent.extend("ui5.brgaapEntryLevelTest.Component", {
        metadata : {
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
             manifest: "json" //Notice that the information must come from the manifest.json
        },
        init() {
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();
        },
        getContentDensityClass : function () {
			if (!this._sContentDensityClass) {
				if (!Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
    });
});