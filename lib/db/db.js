"use strict";

var mysql = require("mysql");
var sqlConfigs = require("../configs/sql");

var db = new mysql.createConnection(sqlConfigs);

module.exports = db;