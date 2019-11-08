const express = require('express'),
  router = express.Router();

  router.get('/', function(req, res, next) {
    res.render('template', { 
        locals: {
          title: 'Welcome to Class Rank!',
          isLoggedIn: req.session.is_logged_in,
          userName: req.session.first_name
        },
        partials: {
          partial: "partial-index"
        }
    });
  });


module.exports = router;

