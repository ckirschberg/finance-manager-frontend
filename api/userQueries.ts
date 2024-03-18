import axios from 'axios';
import { Category } from '../entities/category';
import { CreateCategoryDTO } from '../entities/CreateCategoryDTO';

export class UserQueries {
    static baseUrl = 'http://localhost:3000/auth/'

    static async login(username: string, password: string) {
        const response = await axios.post(this.baseUrl + "login", { username, password } )
        return response.data;
    }
    static async signup(username: string, password: string) {
        const response = await axios.post(this.baseUrl + "signup", { username, password } )
        return response.data;
    }
    static async logout() {
        console.log("Not implemented yet")
    }
}