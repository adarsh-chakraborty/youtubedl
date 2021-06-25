const express = require('express');
const mainController = require('../controller/mainController');

const Router = express.Router();

Router.get('/',mainController.getIndex);
Router.get('/videoInfo',mainController.getVideoInfo);
Router.get('/download',mainController.getDownload);
module.exports = Router;