const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const { title, author } = req.body;
        const user_id = req.headers.authorization;

        const [id] = await connection('books').insert({
            title,
            author,
            user_id,
        });

        return res.json({ id });
    },

    async index(req, res){
        const { page = 1 } = req.query;

        const [count] = await connection('books').count();
        
        const books = await connection('books')
        .join('users', 'user_id', '=', 'books.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'books.*',
            'users.name',
            'users.email',
            'users.city',
            'users.uf',
            'users.telephone'
        ]);
        
        res.header('X-Total-Count', count['count(*)']);
        return res.json(books);
    },

    async delete(req, res){
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const book = await connection('books')
        .where('id', id)
        .select('user_id')
        .first();

        if(book.user_id !== user_id){
            return res.status(401).json({ error: 'Operation not permitted'});
        }

        await connection('books').where('id', id).delete();

        return res.status(204).send();
    }
};