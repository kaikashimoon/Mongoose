require('../conection')

const Product = require('../models/Product')

const all = async () => {
   const products = await Product.find()
    console.log(products)
}

all()
