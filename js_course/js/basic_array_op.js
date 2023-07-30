const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//push method returns length of new array after push

const newLength2 = friends.unshift('John');
console.log(friends);
console.log(newLength2);


//remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // pop first element
console.log(friends);
friends.push(23);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //-1
console.log(friends.indexOf('23'));
console.log(friends.indexOf(23));


console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));


if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}