const express = require('express')
const appRoutes = express.Router()
const controllers = require('../controllers/controllersUser')
const jwtLoguin = require('../middlewares/validationMiddleware')
const limit = require('../middlewares/Ratelimit')

appRoutes.post('/NewUser', limit, controllers.NewUser)
appRoutes.post('/LoginUser', limit, controllers.LoginUser)
appRoutes.get('/logado', jwtLoguin, controllers.loguinJwt)

module.exports = [appRoutes]