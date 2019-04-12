const express = require("express");
const router = express.Router();
const passport = require("passport");

const isAdmin = require("../../../config/isAdmin");

// Load User Model
const User = require("../../../models/User");

// @route   GET api/admin/users
// @desc    Tests post route
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.find({})
      .populate("userItems")
      .exec()
      .then(response => res.json({ response }))
      .catch(err => console.log(err));
  }
);

module.exports = router;
