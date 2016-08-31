var express = require('express');
var dbRouter = express.Router();
var mongodb = require("mongodb").MongoClient;


// var eventsData = [ 
//     {
//     name: 'Event 1',
//     description: 'First Event',
//     date: '2016.05.01',
//     time: '2:00 PM',
//     duration: '1 Hour',
//     location: {
//         streetAddr: '101 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 100
//     },
//     {
//     name: 'Event 2',
//     description: 'Second Event',
//     date: '2016.05.02',
//     time: '2:30 PM',
//     duration: '1 Hour',
//     location: {
//         streetAddr: '101 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 100
//     },
//     {
//     name: 'Event 3',
//     description: 'Third Event',
//     date: '2016.05.07',
//     time: '2:00 PM',
//     duration: '1 Hour',
//     location: {
//         streetAddr: '101 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 100
//     },
//     {
//     name: 'Event 4',
//     description: 'Fourth Event',
//     date: '2016.05.12',
//     time: '2:00 PM',
//     duration: '1 Hour',
//     location: {
//         streetAddr: '101 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 100
// }]

dbRouter.route('/AddEventData')
    .get(function(req,res){
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, results){
                res.send(results);
                db.close();
            });
        });
    });


module.exports = dbRouter;