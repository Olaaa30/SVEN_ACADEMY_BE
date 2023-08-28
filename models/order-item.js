const mongoose = requrie('mongoose');

const orderItemSchema = new mongoose.Schema({
    quantity: {
        type: Number, 
        required: true
    },
    program: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Program'
    }
})

exports.OrderItem = mongoose.model("OrderItem", orderItemSchema);