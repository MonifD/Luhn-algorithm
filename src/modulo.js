"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function modulo(add) {
    if (add % 10 == 0) {
        return 'OK';
    }
    else {
        return 'KO';
    }
    return;
}
exports.default = modulo;
