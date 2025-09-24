const express = require("express");
const app = express();
app.get("/user/:name", (req, res) => {
  const name = "devi";
  res.send(`Hello ${name}`);
});
app.listen(3000, () => {
  console.log("server is running successfully");
});
