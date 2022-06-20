require('../conection')

const User = require('../models/User')

const usersUpdate = async () => {   
    const user = await User.findOne({username: 'kashi'}) 
    user.password = '111111'
    await user.save()
    console.log(user)
}
usersUpdate


// const updateUser = async () => {
//     const user = await User.findOneAndUpdate({username: 'Kashi'}, {
//         username: 'Ryan Ray'
//     }, {new: true});
//     console.log(user);
// };

// const update = async ()=> {
//    const updateUser = await User.update({username: 'kai'}, {
//     password: '858585'
//    })


//     console.log(updateUser)
// }


// update()

// updateUser()