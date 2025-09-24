const express = require("express");
const app = express();
app.use((req, res) => {
  res.status(404).json({ message: " not found" });
});
app.listen(3000, () => {
  console.log("server is running successfully");
});
