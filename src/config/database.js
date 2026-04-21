require('dotenv').config()
const Sequelize = require('sequelize')


const sequelize = new Sequelize(process.env.NOME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
})


sequelize.authenticate().then(() => {
    console.log('A conexão foi estabelecida com sucesso.')
}

).catch((error) => {
    console.error('Erro ao conectar:', error);
});





module.exports ={sequelize,Sequelize}