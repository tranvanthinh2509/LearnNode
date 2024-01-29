const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const methodOverride = require('method-override');

const route = require('./routes');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./config/db');

const sortMidleware = require('./app/midleware/sortMidleware')


app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(sortMidleware);

app.engine('.hbs', handlebars({ 
    extname: '.hbs', 
    helpers: {
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            const sortType = field === sort.column ? sort.type : 'default';
            const icons = {
                default: 'fa-sort',
                asc: 'fa-arrow-down-short-wide',
                desc: 'fa-arrow-down-wide-short'
            };
            const types = {
                default: 'desc',
                asc: 'desc',
                desc: 'asc'
            };
            
            const icon = icons[sortType];
            const type = types[sortType]; 
            return `<a href="?_sort&column=${field}&type=${type}"><i class="fa-solid ${icon}"></i></a>`

        }
} }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'recources', 'views'));

db.Connect();

route(app);

app.listen(port, () => {
    console.log(`App on port http://localhost:${port}`);
});
