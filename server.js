require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");

app.use(morgan("tiny"));
app.use(bodyParser.json());
const api = process.env.API_URL;


const programSchema = mongoose.Schema({
    title: String,
    body: String,
    image: String,
    dateCreated: { type: Date, default: Date.now}
})

const Program = mongoose.model('Program', programSchema)



app.get(`${api}/programs`, (req, res) => {
  const product = {
    id: 1,
    name: "Youth Empowerment",
    image: "some_url",
  };
  res.send(product);
});

app.post(`${api}/programs`, (req, res) =>{
    const program = new Program({
        title: req.body.title,
        
        image: req.body.image,
    })
    req.send(newProgram)
})

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
