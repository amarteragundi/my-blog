const express = require("express");

const app = express();
const ejs = require("ejs");
app.use(express.static("public"));
app.set("view engine", "ejs");

const path = require("path");

app.listen(3000, () => {
  console.log("App on 3000 port");
});

app.get("/", (req, res) => {
  res.render("index");
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
