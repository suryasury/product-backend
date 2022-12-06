const {
  find,
  findById,
  save,
  deleteById,
  findProductByName,
} = require("./products.controller");

const {
  bodySchema,
  querySchema,
  sortValidation,
} = require("./products.validator");

const express = require("express");

const router = express.Router();

router.get("/findByName", querySchema, findProductByName);
router.get("/:productId", findById);
router.get("/", sortValidation, find);
router.post("/", bodySchema, save);
router.delete("/:productId", deleteById);

module.exports = router;
