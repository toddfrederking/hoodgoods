const tshirtModel = require ("../Models/tshirtsmodel");

module.exports.list = function list(request, response) {
  tshirtModel.find({}).exec()
 .then(tshirt => {
   response.json(tshirt);
 });
};

module.exports.show = function show(request, response) {
  tshirtModel.findById(request.params.id).exec()
  .then(tshirt => {
    response.json(tshirt);
  });
};

tshirtModel.find({}).exec()
.then(tshirts => {
  console.log(tshirts)
});