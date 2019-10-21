const express = require('express'),
  router = express.Router();

  router.get('/', function(req, res, next) {
    res.render('template', { 
        locals: {
          title: 'Welcome to Class Rank!' 
        },
        partials: {
          partial: "partial-index"
        }
    });
  });


module.exports = router;

