const {find, findById, save, deleteById, findProductByName} = require("./products.controller")

const express = require("express")

const router = express.Router()

router.get("/findByName", findProductByName)
router.get("/", find)
router.get("/:productId", findById)
router.post("/", save)
router.delete("/:productId", deleteById)


module.exports = router
