const restaurant = {
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Iitalian','Pizzeria','Vegetarian','Organic'],
    startMenu:['Focaccia','Bruschetta', 'Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto']
}

const arrays = [1,2,3];
const [x,y,z]=arrays;
console.log(x,y,z);

let [main, secondary] = restaurant.categories;
[secondary, main] = [main,secondary];
console.log('main::::',main);
console.log('secondary::::',secondary);