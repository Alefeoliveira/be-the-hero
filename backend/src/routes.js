const express = require('express');
const ongController = require('./controller/ong.controller');
const incidentController = require('./controller/incident.controller');
const profileController = require('./controller/profile.controller');
const sessionController = require('./controller/profile.controller');
const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/sessions', sessionController.index);

routes.get('/profile', profileController.index);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;