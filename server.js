// Dependencies
const exp = require('constants');
const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Routes
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Sets up server to begin listening
app.listen(PORT, () =>
    console.log('App listening on PORT: ' + PORT)
);
