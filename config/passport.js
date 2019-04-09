const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

const User = mongoose.model("users");
const keys = require("./keys");

// Ustawiamy opcje
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload);
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            // zwracamy drugi paramert done z parametrami
            // pierwszy - null (nie ma errorów)
            // drugi user
            return done(null, user);
          }
          // jeśli user nie zostanie znaleziony
          // zwracamy null - jako pierwszy
          // false - jako drugi
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
