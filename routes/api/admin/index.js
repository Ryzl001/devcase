const express = require("express");
const router = express.Router();
const passport = require("passport");

const isAdmin = require("../../../config/isAdmin");

// @route   GET api/admin/*
// @desc    Wszystkie ścieżki dostępu do panelu admina chronione przez is Admin
// @access  Public
router.get(
  "/*",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  (req, res, next) => {
    next();
  }
);

module.exports = router;
