'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = undefined;

var _mongodb = require('mongodb');

var url = 'mongodb://localhost/OfficeSpace';
// for remote server
// const url = 'mongodb://34.218.212.52/OfficeSpace'; 


var connect = exports.connect = function connect(callback) {

    _mongodb.MongoClient.connect(url, function (err, db) {
        return callback(err, db);
    });
};
//# sourceMappingURL=database.js.map