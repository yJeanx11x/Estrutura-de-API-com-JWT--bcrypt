const db = require('../config/database')

const User = db.sequelize.define('User', {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false
  }
})

async function criarTabela() {
  try {
    await User.sync({ FORCE: true })
    console.log('Tabela Criada com Sucesso')
  } catch (error) {
    console.log('Erro na criação da tabela', error)
  }
}

criarTabela()
module.exports =User 