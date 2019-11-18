//Products

const mongoose = require("mongoose");

const bookmarksSchema = new mongoose.Schema({
  title: string,
  url: string
});

const Bookmark = mongoose.model("Bookmark", bookmarksSchema);

module.exports = Bookmark;
