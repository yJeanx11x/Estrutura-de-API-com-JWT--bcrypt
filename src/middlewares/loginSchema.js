const z=require('zod')

const loginSchema=z.object({
    nome:z.string("Digite um email valido").min(3),
    email:z.email(),
})

module.exports=loginSchema