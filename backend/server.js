require('dotenv').config();
require('newrelic');
const app = require('./app.js');

//console.log(`process.env.PORT: ${process.env.PORT}`)

const PORT = 3002;

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));

module.exports = app;
