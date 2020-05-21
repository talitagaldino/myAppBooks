const { Router } = require('express');
const userController = require('./controllers/userController');
const bookController = require('./controllers/bookController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = new Router();

//rotas de login
routes.post('/sessions', sessionController.create);

//rotas dos usuarios
routes.post('/users', userController.create); //cria um usuario
routes.get('/users', userController.index); //mostra todos os usuarios

//rotas dos livros
routes.post('/books', bookController.create); //adiciona um livro a tabela livros
routes.get('/books', bookController.index); //mostra todos os livros da tabela
routes.delete('/books/:id', bookController.delete); //deleta um livro da tabela

//rotas dos perfis
routes.get('/profile', profileController.index); //mostra todos os livros que x usuario cadastrou

module.exports = routes;