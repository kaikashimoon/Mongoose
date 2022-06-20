require('./conection')

const Product = require('./models/Product')


const product = new Product({
    name: 'Product',
    description: 'Product description', 
    price: 100,
})

product.save((err, document) =>{
    if(err) console.log(err)
    console.log(document)
})