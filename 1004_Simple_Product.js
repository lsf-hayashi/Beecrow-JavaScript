var input = require('fs').readFileSync('dev/stdin_1004', 'utf8');
var lines = input.split('\n');
    
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var PROD = A * B

console.log(`PROD = ${PROD}`);