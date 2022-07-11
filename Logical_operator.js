var bun = true;

var patty = true;

bun && patty;
console.log(bun && patty);
//_the console should print out 'true' because both the bun_

//_and patty are true then bun && patty are also true_
var bun = true;

var patty = false;

bun && patty; //the console should print out 'false'

console.log(bun && patty);

var bun = false;

var patty = false;

bun && patty; //the console should print out 'false'

console.log(bun && patty);