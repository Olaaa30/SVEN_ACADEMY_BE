const express = require('express');
const app = express();



app.get('/', (req, res) =>{
    res.send("Welcome to SVEN Academy!")
})

app.listen(3500, () => console.log("Server running on port 3500"));