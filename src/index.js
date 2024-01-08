const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));



app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'recources/views'));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/new', (req, res) => {
  res.render('new');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})