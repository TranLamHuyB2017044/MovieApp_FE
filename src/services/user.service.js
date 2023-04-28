import createApiClient from './api.service';

class userService {
    constructor (baseUrl = '/api/user'){
        this.api = createApiClient(baseUrl);
    }
    async detailUser(id){
        return  (await this.api.get(`/${id}`)).data;
    }
    async Register(data) {
        return (await this.api.post("/register", data)).data;
    }
    async deleteUser(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
    async updateUser(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async Login(data){
        return (await this.api.post(`/login`, data)).data;
    }

}

export default new userService();