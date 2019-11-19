//Products

const mongoose = require("mongoose");

const bookmarksSchema = new mongoose.Schema({
  title: String,
  url: String
});

const Bookmarks = mongoose.model("Bookmarks", bookmarksSchema);

module.exports = Bookmarks;
