
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// create express app
const app = express();

const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded : Accept the form-urlencoded data in request
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json : Accept the Row (JSON format) data in request
app.use(bodyParser.json());

//application routes
app.get('/api', (req, res) => {
    return res.status(200).send({
        message: "Welcome to EMS (React-Node-Express) App"
    }); 
});

const empolyeeRouter = require('./routes/employee.routes');

app.use('/employeeapi', empolyeeRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));