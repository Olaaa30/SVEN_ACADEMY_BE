require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const api = process.env.API_URL;
const mongoose = require("mongoose");

//Routes
const programRouter = require('./routers/program')


app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(`${api}/programs`, programRouter);

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    console.log("DATABASE CONNECTION IS READY...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
