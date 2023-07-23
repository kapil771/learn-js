// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet();

/***
 * getPrototypeOf
 */
// const myDate = new Date();
// let object = myDate;
// console.log(object);
// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

/**
 * Without prototype
 */
// function Student() {
// 	this.name = 'John';
// 	this.gender = 'Male';
// }

// var studObj1 = new Student();
// studObj1.age = 15;
// alert(studObj1.age); // 15

// var studObj2 = new Student();
// alert(studObj2.age); // undefined

/**
 * With prototype
 */
// function Student() {
// 	this.name = 'John';
// 	this.gender = 'M';
// }
// Student.prototype.age = 15;
// var studObj1 = new Student();
// alert(studObj1.age); // 15
// var studObj2 = new Student();
// alert(studObj2.age); // 15

/***
 * Student: __proto__ and prototype
 * 
 */
function Student() {
	this.name = 'John';
	this.gender = 'M';
}

var studObj = new Student();
console.log(Student.prototype); // object
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // object

console.log(typeof Student.prototype); // object
console.log(typeof studObj.__proto__); // object
console.log(Student.prototype === studObj.__proto__ ); // true