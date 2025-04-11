sap.ui.define([
    "./EnvironmentApi"
], 
    function TodoApiService(Environment) {
        const endpoint = "/todos";
        return {
            async getAll() {
                const response = await fetch(`${Environment.BASE_URL}${endpoint}`);
                return await response.json();
            },

            async getById(id) {
                const response = await fetch(`${Environment.BASE_URL}${endpoint}/${id}`);
                return await response.json();
            }
        }
});