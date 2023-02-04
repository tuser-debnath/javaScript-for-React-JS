// (1) var, let, const
// var example
// var firstName = "Pritom";
// console.log(firstName);
// firstName = "Ritom";
// console.log(firstName);

// // let example
// let fName = "Pritom";
// console.log(fName);
// fName = "Ritom";
// console.log(fName);

// // const example
// const firName = "Tuser";
// console.log(firName);

// (2) Arrow Function
// Example 1 (Normal)
// function showText(text) {
//   console.log(text);
// }
// showText("JavaScript Text");

// // Example 2 (Arrow)
// const showTheText = (text) => {
//   console.log(text);
// };
// showTheText("Arrow JavaScript Text");

// // Example 3 (Arrow)
// const showTheText2 = () => {
//   console.log("Arrow JavaScript Text");
// };
// showTheText2();

// // Example 4 (Arrow)
// const showResult = (number) => {
//   return number * 2;
// };
// console.log(showResult(2));

// // Example 5 (Arrow) (4 Short)
// const showResult2 = (number) => number * 2;
// console.log(showResult2(2));

// (3) Spread Operator
// Array Example
// const numOne = [1, 2, 3, 4, 5];
// console.log(numOne);

// const numTwo = [...numOne, 6, 7];
// console.log(numTwo);

// // Object Example
// const userOne = {
//   fName: "Tuser",
//   lName: "Debnath",
// };
// console.log(userOne);

// const userTwo = {
//   ...userOne,
//   age: 23,
// };
// console.log(userTwo);

// // Another Exmaple
// const getNumber = (...numbers) => {
//   console.log(numbers[0]);
// };
// getNumber(1, 2, 3, 4);

// (4) Destructuring
// Array Example
// const number = [1, 2, 3];

// // const num1 = number[0];
// // const num2 = number[1];
// // const num3 = number[2];

// const [, , num3] = number; // Destructuring

// // console.log(num1);
// // console.log(num2);
// console.log(num3);

// // Object Example
// const user = {
//   fName: "Tuser",
//   lName: "Debnath",
//   age: 6,
// };

// const { fName, lName, age } = user;

// // const firstName = user.fName;
// // const lastName = user.lName;

// console.log(fName);
// console.log(lName);
// console.log(age);

// (5) Map

// const number = [1, 2, 3];
// number.map((num) => {
//   console.log(num * 2);
// });

// (6) JavaScript Classes

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     return 2023 - this.year;
//   }
// }
// const myCar = new Car("BMW", 2015);
// const otherCar = new Car("Mustung", 2021);
// console.log(myCar);
// console.log(otherCar);
// console.log(myCar.age());

// (7) Export & Import
