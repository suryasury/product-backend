const Product = require("./products.model")

const findById = async (id) => {
    return await Product.findById(id)
}

const find = async (id) => {
    return await Product.find(id)
}

const save = async (productData) => {
    const product = new Product(productData)
    console.log("osdpd", productData)
    return await product.save(product)
}

const insertMany = async (productData) => {
    const product = new Product(productData)
    return await Product.insertMany(product)
}

const deleteById = async (id) => {
    return await Product.findByIdAndDelete(id)
}

const findProductByName = async (q) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",q)
    return await Product.find({name: q})
}

module.exports = {findById, find, save, insertMany, deleteById, findProductByName}