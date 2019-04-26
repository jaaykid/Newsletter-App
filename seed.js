const db = require('./models');

const newUser = [
    {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tonystark@gmail.com'
    },
    {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steverogers@gmail.com'
    },
    {
    firstName: 'Bruce',
    lastName: 'Banner',
    email: 'brucebanner@gmail.com'
    },
    {
    firstName: 'Thor',
    lastName: '...',
    email: 'thor@gmail.com'
    },
    {
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'spidey@gmail.com'
    },
]

db.User.deleteMany({}, (err, users) => {
    if (err) {return console.log(err)}    
})

// db.User.create(newUser, (err, savedUser) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(newUser.forEach(userData => {
//         let avengers = new db.User({
//             firstName: userData.firstName,
//             lastName: userData.lastName,
//             email: userData.email
//           });
//     }))
// })