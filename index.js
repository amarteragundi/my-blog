const express = require("express");

const app = express();

const path = require("path");

app.listen(3000, () => {
  console.log("App on 3000 port");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.json({
    name: "About Amar Teragundi",
  });
});
