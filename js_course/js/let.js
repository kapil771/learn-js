// let age = 30;
// age = 31;
// console.log('age:::::', age);

// const birthYear = 1991;
// // birthYear = 1992;

// // const job;

// let x = 10 + 5;
// console.log('x:::::', x);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('BMIMark::::', BMIMark)
console.log('BMIJohn::::', BMIJohn)

const markHigherBMI = BMIJohn < BMIMark;
console.log(markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}