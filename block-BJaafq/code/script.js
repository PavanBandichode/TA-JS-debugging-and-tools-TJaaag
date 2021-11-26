function addTwoNumbers(numA, numB) {
  return numA + numB;
}

function testAdd() {
  let results = addTwoNumbers(5, 4);
  let expected = 10;
  if (results !== expected) {
    throw new Error(`${results} are not equal to ${expected}`);
  }
}
function test(message, callback) {
  try {
    callback();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}
test("add 5 & 4", addTwoNumbers);

//Multiply two numbers
function multiplyTwoNumbers(numA, numB) {
  return numA * numB;
}

function testAdd() {
  let results = multiplyTwoNumbers(5, 4);
  let expected = 20;
  if (results !== expected) {
    throw new Error(`${results} are not equal to ${expected}`);
  }
}
function test(message, callback) {
  try {
    callback();
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}
test("add 5 & 4", multiplyTwoNumbers);
