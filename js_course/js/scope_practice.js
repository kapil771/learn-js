'use strict';

function calcAge(birthYear){
    console.log('arguments:::::::'+JSON.stringify(arguments));
    const age = 2037-birthYear;
    // console.log(firstName);
    function printAge(){
        const output = `${firstName} are ${age}, born in ${birthYear}`;
        console.log(output);
        if(birthYear>=1981 && birthYear<=1996){
            const firstName = 'Steven';
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a+b;
            }
        }
        // console.log(str);
        // console.log(add(5,8));
        console.log(millenial);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
console.log('hgfgbfrbr',numProducts);
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products removed');
}