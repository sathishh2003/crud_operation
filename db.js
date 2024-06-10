/* const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;
let database;
 */

const mongoose = require('mongoose');

async function getDatabase(){
/*     const client = await mongoClient.connect('mongodb://localhost');
    database = client.db('library');

    if(!database){
        console.log('Database not connected!');
    }

    return database;
 */

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