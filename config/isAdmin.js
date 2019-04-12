const mongoose = require("mongoose");
const passport = require("passport");

const User = mongoose.model("users");

module.exports = isAdmin = (req, res, next) => {
  if (req.user.role.isAdmin) {
    next();
  } else {
    res.status(401).json({ authenticated: false });
  }
};
