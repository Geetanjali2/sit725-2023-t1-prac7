let client = require('../dbConnection');

let collection = client.db().collection('Pics');

function postPic(pic, callback) {
    collection.insertOne(pic,callback);
}

function getAllPics(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postPic,getAllPics}