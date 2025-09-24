const express = require("express");
const app = express();
app.use(express.json());
app.post("/write", (req, res) => {
  const item = req.body;
  res.json(item);
});
app.listen(3000, () => {
  console.log("server is runnning successfully");
});
