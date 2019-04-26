const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 4000



// Serve public folder
app.use(express.static(__dirname + '/public'));

// Root route
app.get('/', (req, res) => {
    res.sendFile('views/index.html' , { root : __dirname});
});

// Parse URL Encoded Form Data
app.use(bodyParser.urlencoded({extended: true}));
// Parse JSON Data
app.use(bodyParser.json());





let user = [
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
    lastName: 'Odin Son',
    email: 'thor@gmail.com'
    },
    {
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'spidey@gmail.com'
    },
]

// Direct us to admin page
app.get('/api/admin', (req,res) => {
    res.sendFile('views/owner.html' , { root : __dirname}); 
})

// Find all users
app.get('/api/users', (req, res) => {
        db.User.find({}, (err, allUsers) => {
            if(err) { return console.log(err) }
            res.json(allUsers)
        });
    });
    

// Create a new user
app.post('/api/users', (req, res) => {
    let newUser = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    res.json(newUser)
        
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
