"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var even_1 = require("./src/even");
var findKey_1 = require("./src/findKey");
var createLuhn_1 = require("./src/bonus/createLuhn");
var flag = process.argv[2];
var suite = process.argv[3];
function luhn(flag, suite) {
    if (flag == '-c') {
        console.log((0, even_1.default)(suite));
    }
    else if (flag == '-f') {
        var test = (0, even_1.default)(suite);
        if (test == 'OK') {
            console.log('nothing to add. It is a Luhn code.');
        }
        else {
            console.log((0, findKey_1.default)(suite));
        }
    }
    else if (flag == '-r') {
        console.log((0, createLuhn_1.default)(suite));
    }
    else {
        console.log('flag or input is missing');
    }
}
luhn(flag, suite);
