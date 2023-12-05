"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var even_1 = require("./even");
function findKey(suite) {
    var newSuite;
    var i = 0;
    for (i; i < 10; i += 1) {
        newSuite = suite.concat("".concat(i));
        var testEven = (0, even_1.default)(newSuite);
        if (testEven == 'OK') {
            return i;
        }
    }
}
exports.default = findKey;
