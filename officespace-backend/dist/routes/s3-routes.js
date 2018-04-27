'use strict';

// const User = require('../models/s3');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports = function (file) {
    // FILE MANIPULATION
    file.get('/s3/files/:bucket', function (req, res) {
        // GET ALL FILES FROM BUCKET
        // req.body = {
        //     Bucket: "examplebucket"
        // };
        s3.listObjects({ bucket: req.params.bucket }, function (err, data) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(data);
            }
        });
    });
    file.get('/s3/file/:key', function (req, res) {
        // GET ONE FILE
        // req.body = {
        //     Bucket: "examplebucket",
        //     Key: "objectkey.jpg"
        // };
        s3.getObject(req.body, function (err, data) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(data);
            }
        });
    });
    file.post('/s3/file', function (req, res) {
        // UPLOAD ONE FILE
        // req.body = {
        //         Body: <Binary String>,
        //         Bucket: "examplebucket",
        //         Key: "exampleobject",
        //         Metadata: {
        //             "metadata1": "value1",
        //             "metadata2": "value2"
        //     }
        // };
        s3.putObject(req.body, function (err, data) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(data);
            }
        });
    });

    file.delete('/s3/file', function (req, res) {
        // DELETE ONE FILE
        // req.body = {
        //   Bucket: "examplebucket",
        //   Key: "objectkey.jpg"
        //  };
        s3.deleteObject(req.body, function (err, data) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(data);
            }
        });
    });

    // BUCKET MANIPULATION
    file.post('/s3/bucket', function (req, res) {
        // CREATE BUCKET
        // req.body = {
        //     Bucket: "examplebucket",
        //     ACL: public-read-write,
        //     CreateBucketConfiguration: {
        //         LocationConstraint: "eu-west-1"
        //     }
        s3.createBucket(req.body, function (err, data) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(data);
            }
        });
    });
    file.delete('/s3/bucket', function (req, res) {
        // delete bucket
        // req.body = {
        //     Bucket: "examplebucket",
        // };
        s3.deleteBucket(req.body, function (err, data) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(data);
            }
        });
    });
};
//# sourceMappingURL=s3-routes.js.map