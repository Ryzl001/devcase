const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load UserItems Model
const UserItems = require("../../models/UserItems");

// @route   GET api/userItems
// @desc    All userItems
// @access  Public	// @access  Public
router.get("/", (req, res) => {
  UserItems.find({})
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

// @route   Post api/userItems
// @desc    Create userItem
// @access  Public	// @access  Public
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newUserItem = new UserItems({
      userId: req.body.userId,
      marketHashName: req.body.marketHashName,
      status: req.body.status,
      iconUrl: req.body.iconUrl
    });
    newUserItem
      .save()
      .then(item => res.json({ msg: "item created" }))
      .catch(err => console.log(err));
  }
);

module.exports = router;
