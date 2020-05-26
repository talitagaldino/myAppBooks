const connection = require('../database/connection');
const crypto = require('crypto');



module.exports = {
    async create(req, res){
            const { name, email, city, uf, telephone, password } = req.body;

            //para criação do id
            const id = crypto.randomBytes(4).toString('HEX');
            
            const user = await connection('users').insert({
                id,
                name,
                password,
                email,
                city,
                uf,
                telephone,
            });

            return res.json({ id });
        
    },

    async index(req, res){
        const users = await connection('users').select('email','password','name', 'city', 'uf', 'telephone', 'id');
        
        return res.json(users);
    },

    async delete(req, res){
        const { id } = req.params;

        await connection('users').where('id', id).delete();

        return res.status(204).send();
    }
};