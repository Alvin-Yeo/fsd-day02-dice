// Load libraries from node_modules
const express = require('express');
const handleBars = require('express-handlebars');

// Configure the environment
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

// Create an instance of express
const app = express();

// Configure handlebars
app.engine('hbs', handleBars({ defaultLayout: 'default.hbs' }));
app.set('view engine', 'hbs');

// GET /roll
let dice = ['one', 'two', 'three', 'four', 'five', 'six'];

app.get('/roll', (req, res) => {
    res.status(200);
    res.type('text/html');
    res.render('blank', { 
        diceOne: dice[Math.floor(Math.random() * 6)] ,
        diceTwo: dice[Math.floor(Math.random() * 6)] 
    });
});

// Public 
app.use(express.static(__dirname + '/public'));

// Error
app.use((req, res) => {
    res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`)
});