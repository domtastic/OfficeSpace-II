import {MongoClient} from 'mongodb'


const url = 'mongodb://localhost/OfficeSpace';
// for remote server
// const url = 'mongodb://34.218.212.52/OfficeSpace'; 


export const connect = (callback) => {

    MongoClient.connect(url, (err, db) => {
        return callback(err, db);
    });
};

