const express = require("express");
const app = express();
app.use(express.json());
const storage = [];
app.post("/data", (req, res) => {
  const data = req.body;
  storage.push(data);
  res.status(200).json("Data readed successfully");
});
app.get("/data", (req, res) => {
  res.status(200).send(storage);
});
app.listen(3000, () => {
  console.log("server is running successfully");
});
