const express = require('express');

const loginRoute = require('./router/login');
const userRoute = require('./router/user');
const categoryRoute = require('./router/category');

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;