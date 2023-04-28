console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Conrad',
  // creating my first name
  lastName: 'Rolf',
  //creating my last name
  hasSiblings: true,
  // setting the boolean to true because I have siblings
  shoeCount: 7,
  // setting my shoe count
  favThreeFoods: ['sushi', 'burritos', 'curry'],
  // creating an array of my favorite foods
  // Question #2
  name: function() {
    return this.firstName + ' ' + this.lastName;
  }
  // creating a function to take the firstName and lastName values
  // from within the object to create fullName outside of it
};
console.log('A little about me:', me);
fullName = me.name();
// creating the var fullName with a value equal to the 'name' function
// within the object 'me'
console.log(fullName)
// making sure the function is working properly

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/




/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
// we are accessing the first value of the array
console.log(me.favThreeFoods[me.favThreeFoods.length - 1]);
// here we are accessing the last value of the array



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount);
// checking our shoe count before the increase
me.shoeCount = (me.shoeCount + 1);
// we are accessing the shoe count value within the object
// and adding in a new pair of shoes
console.log(me.shoeCount);
// making sure that our increase adjusted the shoe count correctly


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Forest Green';
// adding a new variable to the 'me' object
console.log(me);
// testing to see if the new variable was added correctly