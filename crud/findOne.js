require('../conection')

const User = require('../models/User')

const get = async ()=> {
   const getUser = await User.findOne({username: 'kai'})
    console.log(getUser)
}

get()