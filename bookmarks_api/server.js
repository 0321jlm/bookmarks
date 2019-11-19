// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

// const  = 3000;
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

// MIDDLEWARE
app.use(express.json());
app.use(methodOverride("_method"));

// CONTROLLERS
const whitelist = [
  "http://localhost:3000",
  "https://fathomless-sierra-68956.herokuapp.com"
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors(corsOptions));

const bookmarksController = require("./controllers/bookmarks");
app.use("/bookmarks", bookmarksController);

// SEED ROUTE
const seedBookmarks = require("./models/seedBookmarks");
app.get("/seedBookmarks", (req, res) => {
  // seeds the data
  console.log("In seedBookmarks");
  Bookmarks.create(seedBookmarks, (err, createdBookmarks) => {
    console.log(createdBookmarks);
    // redirects to index
    // res.redirect("/");
    res.send("Seed");
  });
});

// CONNECTIONS
app.listen(PORT, () => {
  console.log("listening on PORT: ", PORT);
});

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/Bookmarks";

mongoose.connect("mongodb://localhost:27017/Bookmarks");
// Connect to Mongo
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
//   console.log("connected to mongo database");
// });

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
