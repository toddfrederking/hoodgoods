const { getModel, postModel } = require ("../Models/tshirtsmodel");

module.exports.list = function list(request, response) {
  getModel.find({}).exec()
 .then(tshirt => {
   response.json(tshirt);
 });
};

module.exports.show = function show(request, response) {
  getModel.findById(request.params.id).exec()
  .then(tshirt => {
    response.json(tshirt);
  });
};

module.exports.checkout = function checkout(request, response) {
  postModel.create({ carts: request.body })
  .then(res => res);
}

getModel.find({}).exec()
.then(tshirts => {
  console.log(tshirts)
});