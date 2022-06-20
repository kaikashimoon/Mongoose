require('./conection')

const User = require('./models/User')

async function createUser() {
    const user = new User({
        username: 'kai',
        password: '123456',
    })
    
    const userSaved = await user.save()
    return userSaved
}

createUser()
.then(userSaved => console.log(userSaved))
.catch(err => console.error(err))