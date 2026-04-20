require('dotenv').config()
const Sequelize=require('sequelize')


const sequelize=new Sequelize(process.env.NOME,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:process.env.DIALECT
})
    

async function connectDatabase(){
    try {
       await sequelize.authenticate()
       console.log('A conexão foi estabelecida com sucesso.')
    } catch (error) {
        console.log('Não foi possível conectar ao banco de dados:',error)
    }
}

connectDatabase()

module.exports=connectDatabase()