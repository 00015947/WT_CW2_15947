
const express = require('express');

const body_parser = require('body-parser');

const path = require('path');

global.mock_db = path.join(__dirname, './data/mock_db.json');

const web_route = require('./routes/web'); 

const api_route = require('./routes/api');

const app = express();

// Setting the view engine for web routes
app.set('view engine', 'pug');

app.use('styles.css', express.static('public/styles/styles.css'));
app.use('/', express.static('public/javascript'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route); // API routes
app.use('/', web_route); // web routes

// redirect to home page if unknown requests requested
app.use((req, res) => {
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
