var input = require('fs').readFileSync('dev/stdin_1020', 'utf8');
var lines = input.split('\n');
    
var X = parseInt(lines.shift());
var ano = parseInt(X/365)
var mes = parseInt((X%365)/30)
var dia = parseInt((X%365)%30);

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);