const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const authMiddleware = require('../src/middlewares/auth');


const routes = new Router();

//rotas de login
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().required()
    })
}), sessionController.create);

//rotas dos usuarios
routes.post('/users', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
        telephone: Joi.string().required().min(10).max(11)
    })
}), userController.create); //cria um usuario

routes.get('/users', userController.index); //mostra todos os usuarios
routes.delete('/users/:id', userController.delete);

//rotas dos livros
routes.post('/books', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        author: Joi.string().required(),
        description: Joi.string().required()
    })
}), bookController.create); //adiciona um livro a tabela livros

routes.get('/books', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), bookController.index); //mostra todos os livros da tabela

routes.delete('/books/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), bookController.delete); //deleta um livro da tabela

//rotas dos perfis
routes.get('/profile', authMiddleware, celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), profileController.index); //mostra todos os livros que x usuario cadastrou

module.exports = routes;