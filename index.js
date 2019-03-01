const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const flash = require("connect-flash");


const app = express();

app.use(bodyParser.urlencoded( { extended: true}));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

app.use(express.static('public'));
app.use(require('./routes/index.js'))

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})