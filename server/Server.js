require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

const restaurantRouter = require('./routes/restaurants');

app.use(express.json())
app.use('/api', restaurantRouter);


const port = process.env.DEV_PORT || 3001;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});