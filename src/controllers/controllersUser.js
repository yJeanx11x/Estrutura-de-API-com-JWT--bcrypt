require('dotenv').config()
const User = require('../model/user')
const bcry = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginSchema = require('../middlewares/loginSchema')



// cria o usuário 
async function NewUser(req, res, next) {
    const { nome, email, password } = req.body
    const z = loginSchema.safeParse(req.body)
    try {

        const senhaHash = await bcry.hash(password, 12)
        await User.create({
            nome: z.data.nome,
            email: z.data.email,
            password: senhaHash
        })

        return res.status(201).json({ message: 'Usuário criado com sucesso' })
    } catch (error) {
        next(error)
    }
}

// loguin do usuário
async function LoginUser(req, res, next) {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ message: 'Email inválido' })
        }

        const senha = await bcry.compare(password, user.password)

        if (!senha) {
            return res.status(401).json({ message: 'Senha inválida' })
        }

        const secret = process.env.SECRET

        const token = jwt.sign(
            {
                id: user.id
            },
            secret,
            { expiresIn: '1h' }
        )

        // salva token atual no banco
        user.token = token
        await user.save()

        return res.status(200).json({ token })

    } catch (error) {
        next(error)
    }
}

// loguin com jwt 
async function loguinJwt(req, res, next) {
    try {
        return res.status(200).send()
    } catch (error) {
        next(erro)

    }
}

module.exports = { NewUser, LoginUser, loguinJwt }