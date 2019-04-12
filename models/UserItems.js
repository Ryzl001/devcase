const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserItemsSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  marketHashName: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  iconUrl: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = UserItems = mongoose.model("userItems", UserItemsSchema);
