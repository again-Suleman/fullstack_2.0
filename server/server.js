const express = require("express");
const dotnv = require("dotenv");
const cors = require("cors");
dotnv.config();

const app = express();

// Middlwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

require("./startup/route")(app);

// Server Check
app.get("/", (req, res) => {
  res.status(200).send("This app is currently in build");
});

// Runnning where
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
