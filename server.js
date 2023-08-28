require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const api = process.env.API_URL;
const cors = require('cors');
const mongoose = require("mongoose");

app.use(cors());
app.options('*', cors());

//Routes
const programRoutes = require('./Routes/program');
const categoriesRoutes = require('./Routes/categories.js');


//middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(`${api}/programs`, programRoutes);
app.use(`${api}/categories`, categoriesRoutes);


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
