const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async create(req, res){
        const { name, email, city, uf, telephone } = req.body;

        //para criação do id
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            name,
            email,
            city,
            uf,
            telephone,
        })

        return res.json({ id });
    },

    async index(req, res){
        const users = await connection('users').select('*');

        return res.json(users);
    }
};