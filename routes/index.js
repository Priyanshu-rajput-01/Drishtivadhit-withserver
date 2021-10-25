const express = require('express');
const newsController = require('../controllers/newscontroller');
const mainController = require('../controllers/maincontroller');
const logController = require('../controllers/logcontroller');
const docController = require('../controllers/doccontroller');
const donationcontroller = require('../controllers/donationcontroller');

const passport = require('passport');
const passportLocal = require('../config/passport-local-startagy');
const uploadfile = require('../config/uploadfile');


const router = express.Router();


// get requests english
router.get('/',mainController.index);
router.get('/profile',passport.checkAuthentication,mainController.profile);
router.get('/app',mainController.app);
router.get('/publicdocument',mainController.publicdoc);
router.get('/goal',mainController.goal);
router.get('/member',mainController.member);
router.get('/donation',passport.checkAuthentication,mainController.donation);
router.get('/news',passport.checkAuthentication,newsController.news);
router.get('/register',mainController.register);
router.get('/docupload',mainController.docupload);
router.get('/document/:filename',mainController.viewdoc)
router.get('/pdocupload',mainController.pdocupload);
router.get('/loginmain',mainController.loginmain);
router.get('/event',mainController.event);
router.get('/downloaddoc',mainController.downloaddocument);
router.get('/logout',logController.destroySession);
router.get('/donationthanks',donationcontroller.donationthanks);
router.get('/download/document/:file',mainController.downloaddocument);

// Get request hindi
router.use('/hindi',require('./hindi'));

// Post requests
router.post('/register',logController.register);
router.post('/login',passport.authenticate('local',{
  failureRedirect: '/loginmain'}),logController.createSession);

router.post('/uploadmultiple',passport.checkAuthentication ,docController.docupload);
router.post('/uploadpublic',passport.checkAuthentication ,docController.pdocupload);
router.post('/newDonation',donationcontroller.sendDonation);

module.exports = router;