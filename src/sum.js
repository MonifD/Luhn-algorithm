"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(luhnarray) {
    var add = 0;
    var i = 0;
    for (i; i < luhnarray.length; i += 1) {
        add += luhnarray[i];
    }
    return add;
}
exports.default = sum;
