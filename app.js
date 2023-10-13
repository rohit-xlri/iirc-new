const express = require("express");
const app = express();
const path = require("path");
var cors = require('cors')

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

// Using Middlewares
app.use(cors())
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Importing Routes
const payment = require("./routes/payment")

// Using Routes
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

module.exports = app;