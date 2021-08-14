const mongoose = require('mongoose');

const Product = mongoose.Schema(
  {
    name : { type: String, required: true },
    price : { type: String, required: true },
    quantity : { type: String, required: true },
    text : { type: String, required: true },
    id : { type: String, required: true }
    //img : { type: String, required: true },
  },
  { 
    timestamps: true,
  }
)

module.exports = mongoose.model('produto', Product)