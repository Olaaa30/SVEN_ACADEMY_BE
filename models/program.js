const mongoose = require("mongoose");


const programSchema = mongoose.Schema({
    title: String,
    body: {
      type: String,
      required: true,
    },
    image: String,
    dateCreated: { type: Date, default: Date.now },
  });
  
exports.Program = mongoose.model("Program", programSchema);
