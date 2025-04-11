sap.ui.define([
    "./EnvironmentApi"
], 
    function UserApiService(Environment) {
        const endpoint = "/users";
        return {
            async getById(id) {
                const responseUser = await fetch(`${Environment.BASE_URL}${endpoint}/${id}`);
                return await responseUser.json();
            }
        }
});