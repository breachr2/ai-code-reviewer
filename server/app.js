const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(3000, () => {
  console.log("Server lsitening on port 3000");
});
