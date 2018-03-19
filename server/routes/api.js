const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://admin:admin@ds215739.mlab.com:15739/projectstatusapp', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get project details
router.get('/projectDetails', (req, res) => {
    connection((db) => {
        db.collection('projectDetails')
            .find()
            .toArray()
            .then((projectDetails) => {
                response.data = projectDetails;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


// Get basicData details

router.get('/basicData', (req, res) => {
    connection((db) => {
        db.collection('basicData')
        .find()
        .toArray()
        .then((projectDetails) => {
            response.data = projectDetails;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        })
    })
})

module.exports = router;