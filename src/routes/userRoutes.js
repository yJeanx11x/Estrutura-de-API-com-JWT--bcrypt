const express=require('express')
const appRoutes=express.Router()
const controllers=require('../controllers/controllersUser')

appRoutes.post('/NewUser',controllers.NewUser)

module.exports=[appRoutes]