const express = require('express');
const connectDatabase = require('./database');
const { PORT } = require('./config');
const errorBoundary = require('./middleware/error-handler');
const { v1_routes } = require('./routes');
const app = express();
const router = express.Router();

app.use(express.json());
v1_routes(app);
connectDatabase();
app.use(errorBoundary);
app.listen(PORT, console.log(`App is running on port ${PORT}`));
