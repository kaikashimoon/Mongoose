require('../conection')

const Product = require('../models/Product');

const deletedProduct = async () => {
    // const deletedProduct = await Product.deleteOne({name: 'laptop hp'});
    // const result = await Product.deleteMany({name: 'laptop hp'});
    // const result = await Product.findOneAndDeletmousee({name: 'mouse'});
    const result = await Product.findByIdAndDelete('62b0cdfd3970e354f750a8f7');
    

    console.log(result);

};

deletedProduct()