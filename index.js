const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

// importing BlogPost Schema
const BlogPost = require("./models/BlogPost");
// setting the static folder
app.use(express.static("public"));

// parsing the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setting the view engine to ejs
app.set("view engine", "ejs");

// connecting to database
mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });
app.listen(3000, () => {
  console.log("App on 3000 port");
});

app.get("/", async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render("index", { blogposts });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

// create a new post
app.get("/posts/new", (req, res) => {
  res.render("create");
});

// fetching the post data
app.post("/posts/store", async (req, res) => {
  //   create a new post in mongo
  await BlogPost.create(req.body);
  res.redirect("/");
});
