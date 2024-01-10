const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/siteController');

         router.use('/search', 
         
         
         siteController.show);
    router.use('/', siteController.index);

  module.exports = router;
