var express = require('express');
var router = express.Router();

var Message = require('../models/message');

/* Get Messages */
router.get('/', function(req, res, next) {
    Message.find()
        .exec(function(err, docs) {
            if (err) {
                return res.status(400).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });
});

/* Post Message */
router.post('/', function(req, res, next) {
    var message = new Message({
        content: req.body.content
    });

    message.save(function(err, result) {
        if (err) {
            return res.status(400).json({
                title: 'An error occurred',
                error: err
            });
        }

        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

module.exports = router;