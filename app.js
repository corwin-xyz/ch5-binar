const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const gamesRouter = require("./routes/games");
const loginRouter = require("./routes/login");
const apiRouter = require("./routes/api");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); //Setup View Engine

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/games", gamesRouter);
app.use("/login", loginRouter);
app.use("/api", apiRouter);

// 404 Handler
app.get("*", (req, res) => {
  res.render("error",{title:"404 "} )
})


// Internal Server Error Handler
app.use(function(err, req, res, next) {
  console.error(err)
  res.status(500).json({
    status: 'fail',
    errors: err.message
  })
})



module.exports = app;
