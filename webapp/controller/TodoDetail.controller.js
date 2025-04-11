sap.ui.define([
	"./App.controller",
	"sap/ui/model/json/JSONModel",
	"../api/TodoApiService",
	"../api/UserApiService"
], (Controller, JSONModel, TodoApiService, UserApiService) => {
	"use strict";
	const modelName = "todoDetail"
	const userModel = "user";
	
	return Controller.extend("ui5.brgaapEntryLevelTest.controller.TodoDetail", {
		onInit() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("tododetail").attachPatternMatched(this.getUserDetails, this);
		},

		async getUserDetails(oEvent) {
			let id = oEvent.getParameters().arguments.id

			const responseBody = await TodoApiService.getById(id);
			const oModel = new JSONModel(responseBody);
			this.getView().setModel(oModel, modelName);
			
			const responseUserBody = await UserApiService.getById(responseBody.userId);
			const oModelUser = new JSONModel(responseUserBody);
			this.getView().setModel(oModelUser, userModel);
		}
	});
});
