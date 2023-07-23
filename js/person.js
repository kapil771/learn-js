
/**
 * const person
 * 
 */
// const person = {
//     // name: ["Bob", "Smith"],
//     name:{
//         first:'Bob',
//         last: 'Smith'
//     },
//     age: 32,
//     bio(){
//         console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf(){
//         console.log(`Hi! I'm ${this.name[0]}.`);
//     }
//     // bio: function () {
//     //     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     // },
//     // introduceSelf: function () {
//     //     console.log(`Hi! I'm ${this.name[0]}.`);
//     // },
// };
// person.age = 45;
// person["name"]["last"] = "Cratchit";

// person["eyes"] = "hazel";
// person.farewell = function () {
// 	console.log("Bye everybody!");
// };

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;

/***
 * createPerson
 * 
 */
// function createPerson(name) {
// 	const obj = {};
// 	obj.name = name;
// 	obj.introduceSelf = function () {
// 		console.log(`Hi! I'm ${this.name}. ssssss`);
// 	};
// 	return obj;
// }

// const salva = new createPerson("Salva");
// salva.introduceSelf();

// function Person(name) {
// 	this.name = name;
// 	this.introduceSelf = function () {
// 		console.log(`Hi! I'm ${this.name}.`);
// 	};
// }

// const salva = new Person("Salva");
// salva.introduceSelf();
// // "Hi! I'm Salva."
// const frankie = new Person("Frankie");
// frankie.introduceSelf();
// "Hi! I'm Frankie."
window.onload = (event) => {
    const notification = new Notification("Window Onload!");
};
function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification("Hi there!");
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}