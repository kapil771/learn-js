const jonasArray = [
    'Jonas',
    'Kumar',
    2037 - 1990,
    'teacher',
    ['Michal', 'Peter', 'Steven']
]

const jonas = {
    firstName: 'Jonas',
    lastName: 'Kumar',
    age: 2037 - 1990,
    job: 'teacher',
    friends: ['Michal', 'Peter', 'Steven']
}

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


// console.log(jonas.'first' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');

if (jonas[interestedIn]) {
    console.log(interestedIn + ':::::' + jonas[interestedIn]);
} else {
    console.log('Wrong Request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Delhi';
jonas['twitter'] = '@jonaskumar'
console.log(jonas);



console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);



const kapil = {
    firstName: 'Kapil',
    lastName: 'Kumar',
    birthYear: 2010,
    job: 'Developer',
    friends: ['Michal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function () {
    //     return 2023 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary() {
        return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.calcAge() > 18 ? 'a' : 'no'} driver's license`;
    }
}

console.log(kapil.calcAge());
// console.log(kapil['calcAge']);



console.log(kapil.getSummary());