const UserModel = require('../models/userModel');

class UserController {
    static async listUsers(req, res) {
        try {
            const users = await UserModel.fetchUsers();
            console.log({users})
            res.render('users', { users });
        } catch (error) {
            res.status(500).send('Error fetching users');
        }
    }
}

module.exports = UserController;