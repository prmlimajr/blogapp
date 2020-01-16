module.exports = {
    eAdmin: function(req, res, next){
        if(req.isAuthenticated() && req.user.eAdmin == 1){
            return next()
        }
        req.flash('error_msg', 'Você precisa de credencial de administrador para acessar esta área.')
        res.redirect('/')
    }
}