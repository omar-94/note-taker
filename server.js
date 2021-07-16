// Dependencies
const exp = require('constants');
const express = require('express');
const path = require('path');
const fs = require("fs");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


// API Routes
// GET Request
app.get("/api/notes", (req, res) => {
    let data = JSON.parse(fs.readFileSync("db/db.json", "utf8",));
    res.json(data);
});

// POST Request
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    
    let data = JSON.parse(fs.readFileSync("db/db.json", "utf8",));
    
    data.push(newNote);
    
    fs.writeFileSync('./db/db.json', JSON.stringify(data));

    res.json(data);
})


// HTML Routes
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


// Sets up server to begin listening
app.listen(PORT, () =>
    console.log('App listening on PORT: ' + PORT)
);
