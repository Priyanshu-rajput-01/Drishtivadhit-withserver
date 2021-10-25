const Doc = require('../models/document');
let P_Doc = require('../models/public_document');

module.exports.index = function(req,res){
    return res.render('hindi-pages/index');
}
module.exports.donation = function(req,res){
    return res.render('hindi-pages/donation');
}
module.exports.event = function(req,res){
    return res.render('hindi-pages/events');
}
module.exports.goal = function(req,res){
    return res.render('hindi-pages/goal');
}
module.exports.pdoc = async function(req,res){
    let pubicdoc = await P_Doc.find({});
    return res.render('hindi-pages/public-document',{documenents:pubicdoc});
}
module.exports.loginmain = function(req,res){
    return res.render('hindi-pages/loginmain');
}
module.exports.members = function(req,res){
    return res.render('hindi-pages/members');
}
module.exports.app = function(req,res){
    return res.render('hindi-pages/app');
}
module.exports.news = function(req,res){
    return res.render('hindi-pages/news');
}
module.exports.docupload = function(req,res){
    return res.render('hindi-pages/docupload');
}
module.exports.register = function(req,res){
    return res.render('hindi-pages/regester');
}
module.exports.profile = async function(req,res){
    try{
        let documents = await Doc.find({user:req.user});
        console.log(documents);
        return res.render('hindi-pages/profile',{documenents:documents});
    }catch(err){
        console.log("********* here is a error",err);
    }
}
module.exports.destroySession = function(req, res){
    try{
    req.logout();
    req.flash('success','सफलतापूर्वक लॉग आउट हो चुका है');
    return res.redirect('/hindi');
    }
    catch(err){
        req.flash('error','लॉग आउट करने में त्रुटि');
    }
}