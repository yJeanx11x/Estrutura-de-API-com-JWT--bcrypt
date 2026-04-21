require('dotenv').config()
const express=require('express');
const app=express()
const rotas=require('../routes/userRoutes')
const eror=require('../middlewares/erroGlobal')
app.use(express.json())


app.use(rotas)
app.use(eror)

app.listen(process.env.PORT,()=>console.log('Servidor Rodando com sucesso'))