const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const route = require('./routes');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

app.engine('.hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'recources/views'));

db.Connect();

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
