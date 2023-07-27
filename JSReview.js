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
