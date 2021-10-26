//function
//create new array
//input into array in reverse
//loop through the array to output string

const args = process.argv.slice(2);
function reverseF(args) {
  for (let i = 0; i < args.length; i++) {
    let string = "";
    for (let j = args[i].length - 1; j >= 0; j--) {
      string = string + args[i].charAt(j);
    }
    console.log(string);
  }
}
//console.log(args);
reverseF(args);