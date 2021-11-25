let firstName = "Pavan";
let lastName = "Bandichode";

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
let result = fullName(firstName, lastName);
let expected = "PavanBandichode";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

//Calculate total amount
let amount = 3000;
let taxRate = 10 / 100;

function totalAmount(amount, taxRate) {
  return amount + amount * taxRate;
}

let result = totalAmount(amount, taxRate);
let expected = 4000;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
