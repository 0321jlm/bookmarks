// DEPENDENCIES
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const methodOverride = require("method-override");

const request = require("request");
const rp = require("request-promise");
const port = 3000;
// Allow use of Heroku's port or your own local port, depending on the environment
// const PORT = process.env.PORT || 3000;

// MIDDLEWARE
// body parser middleware

// app.use(express.json());
app.use(methodOverride("_method"));
// static files middleware
app.use(express.static(__dirname + "/public"));

// CONTROLLERS
// fitting room three
const showController = require("./controllers/show.js");
const usersController = require("./controllers/users.js");

app.use("/show", showController);
app.use("/users", usersController);

const getStock = stock => {
  let endpoint =
    `https://www.alphavantage.co/query?apikey=S606HP5OS4LQW4TV&function=TIME_SERIES_DAILY_ADJUSTED&symbol=` +
    stock;

  return lastClose;
};

app.get("/", (req, res) => {
  Bookmark.find({}, (error, allBookmarks) => {
    let tempallBookmarks = allBookmarks;
    for (x in allStocks) {
      tempStock = allStocks[x].stock;
    }

    // console.log("allStocks =>", allStocks);
    if (error) {
      res.send(error);
    } else {
      res.render("index.ejs", {
        Bookmarks: allBookmarks
      });
    }
  });
});
// SEED ROUTE
// NOTE: Do NOT run this route until AFTER you have a create user route up and running, as well as encryption working!

const Bookmarks = require("./models/Bookmarks.js");
const seedBookmarks = require("./models/seedBookmarks.js");

app.get("/seedBookmarks", (req, res) => {
  // seeds the data
  Bookmark.create(seedBookmarks, (err, createdBookmarks) => {
    // logs created users
    console.log(createdBookmarks);
    // redirects to index
    res.redirect("/");
  });
});

//put this above your show.ejs file
app.get("/new", (req, res) => {
  console.log("In display new page");
  res.render("new.ejs");
});

// CONNECTIONS
app.listen(PORT, () => {
  console.log("listening on PORT: ", PORT);
});

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/stock";

mongoose.connect("mongodb://localhost:27017/stock");
// Connect to Mongo
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, () => {
//   console.log("connected to mongo database");
// });

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
