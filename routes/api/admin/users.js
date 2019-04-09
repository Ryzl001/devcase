const express = require("express");
const router = express.Router();

// Load User Model
const User = require("../../../models/User");

// @route   GET api/admin/users
// @desc    Tests post route
// @access  Public
router.get("/", (req, res) => {
  User.find({})
    .then(response => res.json({ response }))
    .catch(err => console.log(err));
});

module.exports = router;
