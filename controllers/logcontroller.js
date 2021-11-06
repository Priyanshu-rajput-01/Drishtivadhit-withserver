const User = require('../models/user');
const db = process.env.DB;
module.exports.register = async function(req,res){
    try{
        if(req.body.pass === req.body.cpass) {
            await User.create(req.body);
            // flashing success message
            req.flash('success','Usser created successfully');
            return res.redirect('/');
        } else{
            // flashing error message
            req.flash('error',"Password and confirm password didn't matched");
            return res.redirect('back');
        }
       } catch (error) {
           res.redirect('back');
            // flashing error message
           req.flash('error',"Error in creating a user");
       }
}

module.exports.createSession = function(req, res){
    req.flash('success','Loggedin Successfully');
    return res.redirect('/profile');
}
module.exports.destroySession = function(req, res){
    try{
    req.logout();
    req.flash('success','Logged out successfully');
    return res.redirect('/');
    }
    catch(err){
         // flashing error message
        req.flash('error','Error while logging out');
    }
}