import createApiClient from './api.service';

class MovieService {
    constructor (baseUrl = '/api/movies'){
        this.api = createApiClient(baseUrl);
    }
    async getAll(){
        return  (await this.api.get("/")).data;
    }
    async getOnePost(slug) {
        return (await this.api.get(`/${slug}`)).data;
    }
    async addPost(data) {
        return (await this.api.post("/", data)).data;
    }
    async deletePost(slug) {
        return (await this.api.delete(`/${slug}`)).data;
    }
    async updatePost(slug, data) {
        return (await this.api.put(`/${slug}/edit`, data)).data;
    }
    async getAllFavorites(){
        return  (await this.api.get('/favorite')).data;
    }
}

export default new MovieService();