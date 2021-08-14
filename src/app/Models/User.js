const mongoose = require('mongoose');

const User = mongoose.Schema(
  {
    name : { type: String, required: true },
    email : { type: String, required: true },
    password : { type: String, required: true },
    itensCompadros : { type:{}, required: false },
    itensCarrinho : { type: {}, required: false }
  },
  { 
    timestamps: true,
  }
)

module.exports = mongoose.model('user', User)