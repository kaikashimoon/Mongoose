const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pruebamongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('open', _  => {
    console.log('open connection');
})

mongoose.connection.on('error', error => {  
    console.log(error)
})