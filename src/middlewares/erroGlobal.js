function erroGlobal(error, req, res, next) {
    res.status(500).json({ error: 'Ocorreu um erro no servidor!' });
    
}
module.exports = erroGlobal;