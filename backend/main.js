// Get the client
const mysql = require('mysql2');
require('dotenv').config()

// ATTENTION REQUIRED: Create the connection to database

const pool = mysql.createPool({
    host: process.env.SQL_HOSTNAME,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DBNAME,
});

// Set up the API
const express = require('express')
var cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const port = 3001

// Make it available for public access

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

app.use(cors());
app.options("*", cors());

app.set('json spaces', 2)
app.use(bodyParser.json({
    limit: "50mb"
}))
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

// Listen to outside connection

app.listen(port, () => {
    console.log(`App running on port ${port}. Control+C to exit.`)
})

// Spit out data

app.get('/', (request, response) => {
    response.json({ info: 'Backend for GBC Library, set up by Chris K' })
})

// ATTENTION REQUIRED: Reach out to SQL database and fetch info

app.get('/authors', (request, response) => {

    let query = `SELECT * FROM authors`;

    pool.query(query, [], (error, results) => {

        console.log(error);
        console.log(results);

        response.status(200).json({
            status: "success",
            message: "Fetch successful",
            data: results,
            count: results.length,
        });

    });

})

app.get('/books', (request, response) => {

    let query = `SELECT * FROM books`;

    pool.query(query, [], (error, results) => {

        response.status(200).json({
            status: "success",
            message: "Fetch successful",
            data: results,
            count: results.length,
        });

    });

})

app.get('/users', (request, response) => {

    let query = `SELECT * FROM users`;

    pool.query(query, [], (error, results) => {

        response.status(200).json({
            status: "success",
            message: "Fetch successful",
            data: results,
            count: results.length,
        });

    });

})

// ATTENTION REQUIRED: Modify and add more API endpoints as needed

app.delete('/users', (request, response) => {

    // WIP - REQUIRES SQL WORK

    console.log(request.body);

    response.status(200).json({
        status: "success",
        message: "Removal successful",
        data: {},
    });

})

app.post('/users', (request, response) => {

    // WIP - REQUIRES SQL WORK

    console.log(request.body);

    response.status(200).json({
        status: "success",
        message: "Addition / removal successful",
        data: {},
    });

})