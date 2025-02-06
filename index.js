const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

require("dotenv").config();

// create port const
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", routes);

// listen on port
const server = app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = server;
