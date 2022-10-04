var input = require('fs').readFileSync('dev/stdin_1006', 'utf8');
var lines = input.split('\n');
    
var A = parseFloat(lines.shift());
var weightA = 2
var B = parseFloat(lines.shift());
var weightB = 3
var C = parseFloat(lines.shift());
var weightC = 5

var MEDIA = ((A*weightA)+(B*weightB)+(C*weightC))/(weightA+weightB+weightC)

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);