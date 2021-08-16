const spinner = "|/-\\|/-\\|"; // declare the chars that need to spin"

let timer = 100;

for (let char of spinner) {
  
  setTimeout( () => {
    process.stdout.write('\r' + char + "   ");
  }, timer += 200);

};