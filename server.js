const express = require("express");
require("./db");
const app = express();
app.use(express.json());
const useroutes = require("./routes/useroutes");
app.use("/users", useroutes);
const PORT = 3000;

app.get("/timeNow", (req, res) => {
  const now = new Date();
  const readableTimestamp = now.toISOString();
  res.send({ time: readableTimestamp });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
