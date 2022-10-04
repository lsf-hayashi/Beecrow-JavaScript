var input = require('fs').readFileSync('dev/stdin_1002', 'utf8');
var lines = input.split('\n');
    
var R = parseFloat(lines.shift());
var n = 3.14159;
A = n * Math.pow(R, 2);

console.log(`A=${A.toFixed(4)}`);