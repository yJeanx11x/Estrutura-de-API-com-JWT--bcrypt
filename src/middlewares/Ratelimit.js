const rattelimit=require('express-rate-limit')

const limit=rattelimit({
    max:5,
    windowMs:60 * 1000,
    message:'Muitas requisições. Tente novamente mais tarde.'
})

module.exports=limit