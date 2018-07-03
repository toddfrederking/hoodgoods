const mongoose = require("mongoose");
const Schema = mongoose.Schema;


  const tshirtSchema = new Schema({
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    size: {
      required: true,
      type: String
    },
    price: {
      required: true,
      type: String
    },
    imageURL: {
      required: true,
      type: String
    }
  });

module.exports =  mongoose.model("tshirt", tshirtSchema);