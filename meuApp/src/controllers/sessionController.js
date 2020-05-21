const connection = require('../database/connection');

//para os logins

module.exports = {
    async create(req, res){
        const { id } = req.body;

        const user = await connection('users')
        .where('id', id)
        .select('name')
        .first();

        if(!user){
            return res.status(400).json({ error: 'No user found with this Id'});
        }

        return res.json(user);
    }
}