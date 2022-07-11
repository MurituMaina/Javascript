var bun = true;

var patty = true;

var cheese = false;

var veggie = true;

var mayonnaise = true;

var ketchup = false;
var order = bun && patty && veggie && (ketchup || mayonnaise);

var happyCustomer = order; //true is for happy customer
//and false is for angry customer
console.log(happyCustomer);

var secondOrder = bun && patty && cheese && (ketchup || mayonnaise);

happyCustomer = secondOrder;

console.log(happyCustomer);