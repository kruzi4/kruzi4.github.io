import axios from "axios";

export default class JokeService {
    static async getCategories() {
        return await axios.get('https://api.chucknorris.io/jokes/categories');
    }

    static async getRandom(category = undefined) {
        return await axios.get('https://api.chucknorris.io/jokes/random', {
            params: {
                'category': category
            }
        });
    }

    static async getOneBySearch(value) {
        return await axios.get('https://api.chucknorris.io/jokes/search', {
            params: {
                'query': value
            }
        });
    }
}
