const express = require("express");
const router = express.Router();
const { list, show, checkout } = require( "../Controllers/tshirtcontroller");


router.get("/tshirts", list);
router.get("/tshirt/:id", show);

router.post("/checkout", checkout);



module.exports = router;