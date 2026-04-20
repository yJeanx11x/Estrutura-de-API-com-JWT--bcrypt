const { sequelize } = require('../config/database')
const { DataTypes } = require('sequelize')

const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  UserId:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
})

async function criarTabela() {
  try {
    await User.sync({ force: true })
    console.log('Tabela Criada com Sucesso')
  } catch (error) {
    console.log('Erro na criação da tabela', error)
  }
}

criarTabela()