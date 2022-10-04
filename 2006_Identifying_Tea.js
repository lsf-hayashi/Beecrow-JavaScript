// 5 contestants
// smell, taste and assess
// tea = white tea, green tea, black tea, herbal tea

var input = require('fs').readFileSync('dev/stdin_2006', 'utf8');
var lines = input.split('\n');
    
var T = parseInt(lines.shift());
var contestants = lines.shift();
contestants = contestants.split(" ")

var corretAnswer = 0
for (var index in contestants){
    contestant = parseInt(contestants[index])
    if (contestant == T){
        corretAnswer += 1
    }
}

console.log(corretAnswer)