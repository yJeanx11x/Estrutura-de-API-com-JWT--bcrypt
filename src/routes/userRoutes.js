const express=require('express')
const appRoutes=express.Router()
const controllers=require('../controllers/controllersUser')
const jwtLoguin=require('../controllers/validationMiddleware')
appRoutes.post('/NewUser',controllers.NewUser)
appRoutes.get('/LoginUser', controllers.LoginUser)
appRoutes.get('/logado',jwtLoguin,controllers.loguinJwt)

module.exports=[appRoutes]