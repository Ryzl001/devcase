const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const userItems = require("./routes/api/userItems");

const admin = require("./routes/api/admin");
const adminUsers = require("./routes/api/admin/users");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Mongoose Setup
mongoose.set("useFindAndModify", false);

// Passport middleware
app.use(passport.initialize());

// Passport Config - w funkcję z tego pliku jako argument wkładamy passport
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/user_items", userItems);

app.use("/api/admin", admin);
app.use("/api/admin/users", adminUsers);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
