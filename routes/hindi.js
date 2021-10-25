const express = require('express');
const hidiMainController = require('../controllers/hindimaincontroller');
const passport = require('passport');
const passportLocal = require('../config/passport-local-startagy');
const router = express.Router();


// Get request hindi
router.get('/',hidiMainController.index);
router.get('/app',hidiMainController.app);
router.get('/loginmain',hidiMainController.loginmain);
router.get('/events',hidiMainController.event);
router.get('/goal',hidiMainController.goal);
router.get('/member',hidiMainController.members);
router.get('/donate',hidiMainController.donation);
router.get('/docup',hidiMainController.docupload);
router.get('/register',hidiMainController.register);
router.get('/news',hidiMainController.news);
router.get('/profile',hidiMainController.profile);
router.get('/publicdoc',hidiMainController.pdoc);
router.get('/logout',hidiMainController.destroySession);

router.post('/login',passport.authenticate('local',{
    failureRedirect: '/hindi/loginmain'}),function(req, res) {
      req.flash('success','सफलतापूर्वक लॉग इन हो चुका है');
      res.redirect('/hindi');
    });

module.exports =router;