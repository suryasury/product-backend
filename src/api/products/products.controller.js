const productService = require("./products.services")

const findById = async(req, res) => {
    const product = await productService.findById(req.params.productId)
    res.json({status: 'success', data: product})
}

const find = async(req, res) => {
    const product = await productService.find()
    res.json({status: 'success', data: product})
}

const save = async(req, res) => {
    const updatedProduct = await productService.save(req.body)
    res.json({status: 'success', data: {product: updatedProduct}})
}

const deleteById = async(req, res) => {
    const deletedProduct = await productService.deleteById(req.params.productId)
    res.json({status: 'success', data: {product: deletedProduct}})
}

const findProductByName = async(req, res) => {
    console.log("before destructuring", req)
    const { q } = req.query
    console.log("<<<<<<<<<<<<<<<<<<<<", q)
    const products = await productService.findProductByName(q)
    res.json({status: 'success', data: {product: products}})
}



module.exports = {find, findById, save, deleteById, findProductByName}