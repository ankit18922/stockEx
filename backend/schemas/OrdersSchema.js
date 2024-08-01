const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty:Number,
    price: Number,
    percent: String,
     mode:String,
    isDown: Boolean,

});

module.exports = { OrdersSchema };