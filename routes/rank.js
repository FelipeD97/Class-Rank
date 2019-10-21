const express = require('express'),
  router = express.Router(),
  RankingModel = require("../models/rankModel");

router.get('/', async (req, res, next) => {
  const rankData = await RankingModel.getAll();
  const rankStatusData = await RankingModel.getStatus();

  res.render("template", {
      locals: {
          title: "Class Ranking",
          rankdata: rankData,
          rankStatusData: rankStatusData
      },
      partials: {
          partial: "partial-rank"
      }
  });
});

router.post("/update", (req, res) => {
  for (let key in req.body) {
    RankingModel.update(key, req.body[key]);
  }

  res.status(200).redirect("/");
});


module.exports = router;