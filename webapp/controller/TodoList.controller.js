sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"../api/TodoApiService"
], (Controller, Filter, FilterOperator, JSONModel, TodoApiService) => {
	"use strict";
	const modelName = "todos";
	return Controller.extend("ui5.brgaapEntryLevelTest.controller.TodoList", {

		async onInit() {
			const responseBody = await TodoApiService.getAll();
			const oModel = new JSONModel(responseBody);
			this.getView().setModel(oModel, modelName);
		},

		onDetails(oEvent) {
			const oItem = oEvent.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("tododetail", {
				id: window.encodeURIComponent(oItem.getBindingContext(modelName).getProperty("id"))
			});
		},

		onSearch(oEvent) {
			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("title", FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			var oList = this.byId("todos");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters, "Application");
		}
	});
});
