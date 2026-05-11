require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../model/user')

async function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {

        return res.status(401).json({ message: 'Acesso negado!' })
    }
    try {
        const secret = process.env.SECRET
        const decoded = jwt.verify(token, secret)
        const user = await User.findByPk(decoded.id)

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado!' })
        }


        if (user.token !== token) {
            return res.status(401).json({ message: 'Token antigo! Faça login novamente.' })
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(500).json({ message: 'Token invalido!' })
    }

}

module.exports = verificarToken