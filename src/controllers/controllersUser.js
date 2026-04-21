const User = require('../model/user')
const bcry=require('bcrypt')
// cria o usuário 
async function NewUser(req, res, next) {
    const { nome, email, password } = req.body
    try {
    
        const senhaHash=await bcry.hash(password,12)
        await User.create({
            nome,
            email,
            password:senhaHash
        })
        return res.status(201).json({ message: 'Usuário criado com sucesso' })
    } catch (error) {
        next(error)
    }
}

module.exports = { NewUser }