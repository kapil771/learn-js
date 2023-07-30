const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)
// friends.length = 0;
console.log(friends);
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];


/////////////////////
const firstName = 'Jonas';
const jonas = [firstName, 'Schemedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years2 = [1998, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years2[1]), calcAge(years2[years.length - 1])];
console.log(ages);




console.log('======================================================');
const bills = [125, 555, 44];
console.log('bills:::::::' + bills);
const calcTip = (bill) => (bill >= 50 && bill <= 300) ? (bill * 15 / 100) : (bill * 20 / 100);

// const calcTotal = (bills, tip)
const tips = bills.map(calcTip);
// console.log(tips);
console.log('tips:::::::' + tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// const totals = bills + tips;
console.log('totals::::::::' + totals);