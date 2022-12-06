const mongoose = require("mongoose");

const CmsHero = mongoose.model(
  "Hero",
  mongoose.Schema({
    header: String,
    description: String,
  })
);
