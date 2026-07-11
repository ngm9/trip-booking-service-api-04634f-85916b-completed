const express = require('express');
const dotenv = require('dotenv');

const exampleRoutes = require('./routes/exampleRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', exampleRoutes);

app.use(errorHandler);

module.exports = app;
