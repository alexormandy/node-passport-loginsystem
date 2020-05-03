var passport = require("passport");
const userController = require("../controllers/user");

// Using LocalStrategy with passport
var LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(function (username, password, done) {
    userController.getUserByUsername(username, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: "Unknown User" });
      }

      userController.comparePassword(password, user.password, function (
        err,
        isMatch
      ) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    });
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  userController.getUserById(id, function (err, user) {
    done(err, user);
  });
});
