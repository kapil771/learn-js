function Cat(name, breed, color) {
    this.name = name,
    this.breed = breed,
    this.color = color,
    this.greeting = function() {
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
};
cat1 = new Cat('Bertie','Cymric','white');
cat1.greeting();
cat2 = new Cat('Elfieeeeeee','Aphrodite Giant','ginger');
cat2.greeting();