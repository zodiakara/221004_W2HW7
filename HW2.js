// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = "male";
let gender = isMale ? "male" : "female";
console.log(gender); //"male"

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let intOne = 7;
let intTwo = 1;

const firstCheck = (number1, number2) => {
  if (number1 === 8 || number2 === 8) {
    return true;
  } else {
    return false;
  }
};
const secondCheck = (number1, number2) => {
  if (number1 + number2 === 8) {
    return true;
  } else {
    return false;
  }
};
const thirdCheck = (number1, number2) => {
  if (number1 - number2 === 8 || number2 - number1 === 8) {
    return true;
  } else return false;
};

let numberCheck = (number1, number2) => {
  if (
    firstCheck(number1, number2) === true ||
    secondCheck(number1, number2) === true ||
    thirdCheck(number1, number2) === true
  ) {
    return true;
  } else {
    console.log("no conditions matched");
  }
};
console.log(firstCheck(intOne, intTwo));
console.log(secondCheck(intOne, intTwo));
console.log(numberCheck(intOne, intTwo));

/* WRITE YOUR ANSWER HERE */

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let actorName = "Johnny";
let lastName = "Depp";
console.log(actorName + lastName);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x = 5;
let y = 3;
let z = 8;
let comma = ",";

if (x > y && x > z) {
  if (y > z) {
    console.log(x + comma + y + comma + z);
  } else {
    console.log(x + comma + z + comma + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + comma + x + comma + z);
  } else {
    console.log(y + comma + z + comma + y);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + comma + x + comma + y);
  } else {
    console.log(z + comma + y + comma + x);
  }
}

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let av1 = 5;
let av2 = 7;

console.log((av1 + av2) / 2);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let str1 = "agata agata";
let str2 = "agata";

if (str1.length > str2.length) {
  console.log(str1);
} else console.log(str2);

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let value1 = Number.isInteger(12.3);
let value2 = Number.isInteger(-123);
let value3 = Number.isInteger("123");

console.log(value1);
console.log(value2);
console.log(value3);

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let randomNumber = 456;
let percentage = 20;
console.log(randomNumber * (percentage / 100));

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let num3 = 5;

if (num3 % 2 === 0) {
  console.log("the number is even");
} else console.log("the number is odd");
