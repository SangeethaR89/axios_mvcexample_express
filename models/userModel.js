const axios = require('axios');

class UserModel {
    static async fetchUsers() {
        try {          
           // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const response = await axios.get('http://reqres.in/api/users?page=2;');
            console.log(response.data.data)
            return response.data.data;
        } catch (error) {
            throw new Error('Error fetching users');
        }
    }
}

module.exports = UserModel;