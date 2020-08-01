const express = require('express');
const LojaController = require('./controllers/LojaController');
const CardapioController = require('./controllers/CardapioController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/loja', LojaController.index);
routes.post('/loja', LojaController.create);

routes.get('/profile', ProfileController.index);

routes.get('/cardapio', CardapioController.index);
routes.post('/cardapio', CardapioController.create);
routes.delete('/cardapio/:id', CardapioController.delete);

module.exports = routes;