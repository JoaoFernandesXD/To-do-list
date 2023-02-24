const exepress = require('express')
const router = require('./router')

const app = exepress();

app.use(exepress.json());
app.use(router);


module.exports = app;

