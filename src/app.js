const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const path = require("path");

const userRoute = require("../routes/user");

require("../config/db");
require("../config/passport");

const port = process.env.PORT || 3000;

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Public Directory
const publicDirectory = path.join(__dirname, "../public");
app.use(express.static(publicDirectory));

// Set Pug
app.set("view engine", "pug");

// Express Session
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);

// Passport init
app.use(passport.initialize());
app.use(passport.session());

//

app.use("/", userRoute);

app.get("/", function (req, res) {
  res.render("../views/user/login");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
