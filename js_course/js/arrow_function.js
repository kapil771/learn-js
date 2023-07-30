//Arrow function expression
let person = {
    name: 'kapil',
    age: 29,
    greet() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
person.greet();

const calcAge3 = (birthYear) => {
    return 2037 - birthYear;
}

console.log(calcAge3(1995));

const calcAge4 = birthYear => 2037 - birthYear;
console.log(calcAge4(2000));


const yearsUntilRetirement = (birthYear, firstName) => {
    let age = 2037 - birthYear;
    let retirement = 65 - age;
    // return retirement;
    return `${firstName} will retire in ${retirement} years`;
}

console.log('yearsUntilRetirement: ' + yearsUntilRetirement(1990, 'kapil'));
console.log('yearsUntilRetirement: ' + yearsUntilRetirement(1980, 'bob'));