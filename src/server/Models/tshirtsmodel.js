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
    },
    quantity: {
      required: true,
      type: Number
    }
  });

  const postSchema = new Schema({
    carts: {
      required: true,
      type: Array
    }
  });

module.exports =  {
  getModel: mongoose.model("tshirt", tshirtSchema),
  postModel: mongoose.model("ShoppingCarts", postSchema, "ShoppingCarts")
};