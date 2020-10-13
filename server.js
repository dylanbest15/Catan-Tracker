// require express server with compression
const express = require("express");
const session = require("express-session");
const compression = require("compression");

// require passport
const passport = require("./config/passport");

// run local port
const PORT = process.env.PORT || 8080;

// require models for syncing
const db = require("./models");

// connect to express server and middleware
const app = express();
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// require routes
require("./routes/html-routes")(app);
require("./routes/passport-routes")(app);

// create databases and connection
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
}).catch((err) => {
  console.log(err);
});