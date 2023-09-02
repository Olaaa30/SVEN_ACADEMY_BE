const mongoose = require("mongoose");


const programSchema = mongoose.Schema({
    title: String,
    body: {
      type: String,
      required: true,
    },
    image: String,
    price: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    dateCreated: { type: Date, default: Date.now },
  });
  
exports.Program = mongoose.model("Program", programSchema);
