const exepress = require('express');
const cors = require('cors');
const router = require('./router');

const app = exepress();

app.use(exepress.json());
app.use(router);
app.use(cors());

module.exports = app;

