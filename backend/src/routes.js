const express = require('express');
const {celebrate, Joi, Segments} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/** Login */
routes.post('/session', SessionController.create);

/** ONGs */
routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({

    [Segments.BODY]: Joi.object({

        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    })

}), OngController.create);

/** Profile Ongs */
routes.get('/profile', celebrate({
    
    [Segments.HEADERS]: Joi.object({

        authorization: Joi.string().required()

    }).unknown()
    
}), ProfileController.index);

/** Incidents */
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object({
        page: Joi.number()
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


module.exports = routes;