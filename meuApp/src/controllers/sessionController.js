const connection = require('../database/connection');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

//para os logins

module.exports = {
    async create(req, res){
        const { email, password } = req.body;
        
        const user = await connection('users')
        .where({
            email: email,
            password: password
        }).select('email')
        .first();

        if(!user){
            return res.status(400).json({ error: 'User not found'});
        }

        return res.json({ user });
    }
}