/* const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;
let database;
 */

const mongoose = require('mongoose');

async function getDatabase(){

    mongoose.connect('mongodb://localhost/library')
    .then(()=>{
        console.log("database connected!");
    })
    .catch(()=>{
        console.log("database connection error");
    })
}

module.exports = {
    getDatabase
};