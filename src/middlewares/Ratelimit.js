const ratelimit=require('express-rate-limit')

const limit=ratelimit({
    max:5,
    windowMs:60 * 1000,
    message:'Muitas requisições. Tente novamente mais tarde.'
})

module.exports=limit