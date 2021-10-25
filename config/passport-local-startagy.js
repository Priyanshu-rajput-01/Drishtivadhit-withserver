const passport = require('passport');

const localStratagy = require('passport-local').Strategy;
let value = '';
const User = require('../models/user');
passport.use(new localStratagy({
    usernameField: 'firstname',
    passwordField:'pass'

},
function(firstname,pass,done){
        let user = User.findOne({firstname:firstname},function(err,user){
        if(err){
            console.log('error in finding user');
            value = 'error in finding user';
            return done("this is error" + err);
        }   
        if(!user || user.pass != pass){
            console.log('Invallid credentials');
            value = 'Invallid credentials';
            return done(null, false);
        }
        return done(null, user);
    })
}))

passport.serializeUser(function(user, done){
    done(null,user.id);

})

passport.deserializeUser(function(id, done){
    User.findById(id,function(err, user){
        if(err){
            console.log('error in signing in');
            console.log(err);
        // return doNotTrack(err);
        } 
        return done(null, user);
    })

});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/loginmain');
};

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;