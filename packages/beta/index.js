"use strict";

var alpha = require('@mitchallen/alpha');

module.exports = beta;

function beta(a,b,c) {
    // return a + b - c
    return alpha.subtract(alpha.add(a,b),c);
} 