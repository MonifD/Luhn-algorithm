"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducnumb_1 = require("./reducnumb");
var sum_1 = require("./sum");
var modulo_1 = require("./modulo");
function even(suite) {
    var array = suite.split('');
    var reverseArr = array.reverse();
    var luhnarray = [];
    var i;
    for (i = 0; i < reverseArr.length; i += 1) {
        var numbA = parseInt(reverseArr[i]);
        if (i == 0 || i == reverseArr.length - 2) {
            numbA = numbA;
        }
        else if (i % 2 != 0) {
            var newNumbA = void 0;
            newNumbA = numbA * 2;
            if (newNumbA > 9) {
                numbA = (0, reducnumb_1.default)(newNumbA);
            }
            else {
                numbA = newNumbA;
            }
        }
        luhnarray.push(numbA);
    }
    var add = (0, sum_1.default)(luhnarray);
    var isLuhn = (0, modulo_1.default)(add);
    return isLuhn;
}
exports.default = even;
