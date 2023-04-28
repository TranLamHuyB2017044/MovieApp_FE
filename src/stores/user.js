import { defineStore } from 'pinia';
import userService from '../services/user.service';

export const useUsersStore = defineStore("users", {
    state: () => ({
        user: null,
    }),
    actions: {
        async register(user) {
            await userService.Register(user);
        },
        async login(username, password) {
            try {
                this.user = await userService.Login({
                    username: username,
                    password: password
                });
                if(this.user){
                    localStorage.setItem('id', this.user._id);
                }
            } catch (error) {
                console.log(error);
            }
            
        },
        async getById(id) {
            try {
                this.user = await userService.detailUser(id);
            } catch (error) {
                console.log(error);
            }
        },
        async update(id, data) {
            await userService.updateUser(id, data);
        },
        async delete(id) {
            await userService.deleteUser(id)
        }
    }
});
