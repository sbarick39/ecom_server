"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var getac_1 = require("./ac/getac");
var getphone_1 = require("./phones/getphone");
var app = express();
app.use(cors());
app.use('/ac', getac_1["default"]);
app.use('/phones', getphone_1["default"]);
var port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log("server started");
});
