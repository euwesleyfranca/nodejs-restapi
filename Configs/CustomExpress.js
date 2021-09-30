const express = require('express');
const consign = require('consign');
const BodyParser = require('body-parser');

module.exports = () => {
    const app = express();

    app.use(BodyParser.json())
    app.use(BodyParser.urlencoded({ extended: true }))
    
    consign().include('Routes').into(app)   

    return app;
}
