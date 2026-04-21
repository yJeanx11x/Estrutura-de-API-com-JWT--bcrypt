const express=require('express')
const appRoutes=express.Router()
const controllers=require('../controllers/AuthController')
appRoutes.get('/teste', controllers.teste1 )

module.exports=[appRoutes]