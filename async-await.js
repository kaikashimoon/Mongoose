require('./conection')

const Product = require('./models/Product')



async function main() {
    const product = new Product({
        name: 'Product122',
        description: 'Product description12222', 
        price: 1000,
    })
    
    const productSaved = await product.save()
    return productSaved
}

main()
.then(productSaved =>   console.log(productSaved))
.catch(err => console.error(err))