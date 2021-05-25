const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.send("Hello-world");

  let name = "URL Shortner";
  res.render("home", { title: name });
});

app.get("/short", (req, res) => {
  res.send("Hello from Short");
});

app.listen(4000, () => {
  console.log("Server started");
});
