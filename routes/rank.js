const express = require('express'),
  router = express.Router(),
  RankingModel = require("../models/rankModel");

router.get('/', async (req, res, next) => {
  const rankData = await RankingModel.getAll();
  const rankStatusData = await RankingModel.getStatus();

  res.render("template", {
      locals: {
          title: "Class Ranking",
          isLoggedIn: req.session.is_logged_in,
          rankData: rankData,
          rankStatusData: rankStatusData
      },
      partials: {
          partial: "partial-rank"
      }
  });
});

router.post("/update", (req, res) => {

    console.log(req.body);
  for (let key of req.body) {
    RankingModel.update(key, req.body[key]);
  }

  res.redirect("/");
});


module.exports = router;