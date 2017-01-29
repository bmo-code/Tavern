"use strict";
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var App = (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    //conf Express middleware
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    //conf API endpoints
    App.prototype.routes = function () {
        var router = express.Router();
        router.get('/', function (req, res, next) {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    };
    return App;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
