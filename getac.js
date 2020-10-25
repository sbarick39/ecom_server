"use strict";
exports.__esModule = true;
var express = require("express");
var mongodb = require("mongodb");
var ac_client = mongodb.MongoClient;
var acModule = express.Router().get('/', function (req, res) {
    ac_client.connect("mongodb+srv://admin:admin@employeemanagementsyste.ccfym.mongodb.net/<Ecommerce>?retryWrites=true&w=majority", function (err, client) {
        if (err)
            throw err;
        else {
            var db = client.db("Ecommerce");
            db.collection("Ac").find().toArray(function (err, db) {
                if (err)
                    throw err;
                else {
                    res.send(db);
                }
            });
        }
    });
});
exports["default"] = acModule;
