const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




// Prompt the user to enter a string
rl.question('Please enter a string: ', (stInput) => {
    let st =(stInput)
    // The function changes the input to a toggled string
 function toggleCase(st) {
        return st.split('').map((char)=> {
            if (char === char.toUpperCase()) {
                return char.toLowerCase()
            } else {
                return char.toUpperCase()
            }
        }).join('')
    }

    console.log('Toggled String:', toggleCase(st) )

    // Close the readline interface
    rl.close();
});