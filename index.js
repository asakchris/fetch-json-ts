"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var https = require("https");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
var httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});
axios_1.default.get(url, { httpsAgent: httpsAgent }).then(function (response) {
    console.log(response.data);
});
