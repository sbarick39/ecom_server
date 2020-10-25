"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var phone_client = mongodb.MongoClient;
var PhoneModule = express.Router().get('/', function (req, res) {
    phone_client.connect("mongodb+srv://admin:admin@employeemanagementsyste.ccfym.mongodb.net/<Ecommerce>?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("Ecommerce");
            db.collection("Phones").find().toArray(function (err, db) {
                if (err)
                    throw err;
                else {
                    res.send(db);
                }
            });
        }
    });
});
exports["default"] = PhoneModule;
