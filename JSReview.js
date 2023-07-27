///////////////////////  Part II: JavaScript Reps ///////////////
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

////////  Get Even  /////////////
// Write a for loop that will log only the even numbers in 0 through 200.

// Hint: Think about the increment expression.

for (let i = 0; i <= 200; i++) {
  if (i % 2 == 0) {
    console.log(`i is even`);
  }
}

////////// Fizz Buzz  /////////////
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

function FizzBuzz(num){
   if((num%3 == 0) && (num%5 == 0)){
      return "Fizzbuzz";
   }
   else if( num % 5 == 0){
      return "Buzz ";
   }
   else(num % 3 == 0){
      return "Fizz";
   }
}
/////////////// Wild Wild Life  ///////////////////////

// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] ++;
(wolfy[3]= "Gotham City");
dart.splice(1,0,"Hawkins");
console.log(dart);
console.log(plantee);
wolfy[0] = "Gameboy";
console.log(wolfy);


////////////////// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

let ninja = [ "Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let x of ninja){
   let output = x.toUpperCase();
   console.log(output)
}
