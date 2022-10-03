const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let A, B
rl.question("", function(numA){
    A = parseInt(numA)
    rl.question("", function(numB){
        B = parseInt(numB)
        rl.close()
    })
})
rl.on('close',()=> {
  console.log(`X = ${(A+B)}`)  
})
