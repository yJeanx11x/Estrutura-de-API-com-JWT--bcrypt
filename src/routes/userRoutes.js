const express=require('express')
const appRoutes=express.Router()
const controllers=require('../controllers/controllersUser')

appRoutes.post('/NewUser',controllers.NewUser)
appRoutes.get('/LoginUser', controllers.LoginUser)

module.exports=[appRoutes]