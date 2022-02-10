const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","];
let numberOne = 0;
let numberTwo = 0;
let addition = false;
let divide = false;
let multiplication = false;
let subtracttion = false;
let equals = false;
document.getElementById("display").disabled = true;

// ------------- button variables ---------------------

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const clear = document.querySelector("#clear");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const equal = document.querySelector("#equal");
const division = document.querySelector("#division");
const plus = document.querySelector("#plus");
const display = document.querySelector("#display");

// ------------ click functions --------------------

one.addEventListener("click", function () {
  if (equals === true) {
    display.value = "1";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[0];
  }
});

two.addEventListener("click", function () {
  if (equals === true) {
    display.value = "2";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[1];
  }
});

three.addEventListener("click", function () {
  if (equals === true) {
    display.value = "3";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[2];
  }
});
four.addEventListener("click", function () {
  if (equals === true) {
    display.value = "4";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[3];
  }
});

five.addEventListener("click", function () {
  if (equals === true) {
    display.value = "5";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[4];
  }
});

six.addEventListener("click", function () {
  if (equals === true) {
    display.value = "6";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[5];
  }
});
seven.addEventListener("click", function () {
  if (equals === true) {
    display.value = "7";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[6];
  }
});

eight.addEventListener("click", function () {
  if (equals === true) {
    display.value = "8";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[7];
  }
});

nine.addEventListener("click", function () {
  if (equals === true) {
    display.value = "9";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[8];
  }
});

zero.addEventListener("click", function () {
  if (equals === true) {
    display.value = "0";
    equals = false;
  } else {
    document.querySelector("#display").value += arrayOfNumbers[9];
  }
});

// --------------------logic ---------------------------

plus.addEventListener("click", function () {
  numberOne = parseFloat(document.querySelector("#display").value);
  display.value = "";
  addition = true;
});

subtract.addEventListener("click", function () {
  numberOne = parseInt(document.querySelector("#display").value);
  display.value = "";
  subtracttion = true;
});

division.addEventListener("click", function () {
  numberOne = parseInt(document.querySelector("#display").value);
  display.value = "";
  divide = true;
});

multiply.addEventListener("click", function () {
  numberOne = parseInt(document.querySelector("#display").value);
  display.value = "";
  multiplication = true;
});

clear.addEventListener("click", function () {
  display.value = "";
});

// equal operator

equal.addEventListener("click", function () {
  if (addition === true) {
    numberTwo = parseFloat(document.querySelector("#display").value);
    document.querySelector("#display").value = numberOne + numberTwo;
    addition = false;
    equals = true;
  } else if (subtracttion === true) {
    numberTwo = parseInt(document.querySelector("#display").value);
    document.querySelector("#display").value = numberOne - numberTwo;
    subtracttion = false;
  } else if (divide === true) {
    numberTwo = parseInt(document.querySelector("#display").value);
    document.querySelector("#display").value = numberOne / numberTwo;
    divide = false;
  } else if (multiplication === true) {
    numberTwo = parseInt(document.querySelector("#display").value);
    document.querySelector("#display").value = numberOne * numberTwo;
  }
});
