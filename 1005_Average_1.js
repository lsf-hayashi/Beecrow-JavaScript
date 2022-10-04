var input = require('fs').readFileSync('dev/stdin_1005', 'utf8');
var lines = input.split('\n');
    
var A = parseFloat(lines.shift());
var weightA = 3.5
var B = parseFloat(lines.shift());
var weightB = 7.5

var MEDIA = ((A*weightA)+(B*weightB))/(weightA+weightB)

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);