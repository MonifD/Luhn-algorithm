"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findKey_1 = require("../findKey");
function createLuhn(suite) {
    var length;
    length = parseInt(suite);
    var numberToComplet = [];
    var i;
    var random;
    for (i = 0; i < length - 1; i += 1) {
        random = Math.floor(Math.random() * 9);
        numberToComplet.push(random);
    }
    var number = numberToComplet.join('');
    var key = (0, findKey_1.default)(number);
    var newN;
    newN = number.concat("".concat(key));
    return newN;
}
exports.default = createLuhn;
