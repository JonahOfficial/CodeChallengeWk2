const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




// Prompt the user to enter the values
rl.question('Value1: ', (value1Input) => {
    (value1Input)
    const value1 = parseInt(value1Input)
    rl.question('Value2: ', (value2Input) => {
        (value2Input)
        const value2 = parseInt(value2Input)

let nArray=[]

function countDown(value1,value2) {
    for (let i = value1; i <= value2; i++) {
        nArray.push(i)

    }
  return nArray
}

console.log(countDown(value1,value2))

rl.close();
})
})