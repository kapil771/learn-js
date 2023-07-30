function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);

const age1 = calcAge1(1992);

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// const age2 = calcAge2(1992); cannot call before defined : function expression

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age1, age2);