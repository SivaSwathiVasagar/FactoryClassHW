
class Hamster {
    constructor(owner = '', name){
      this.owner = owner;
      this.name = name;
      this.price = 15;
    }
    wheelRun(){
      console.log ("squeak squeak");
    }
    eatFood(){
      console.log ("nibble nibble");
    }
    getPrice(){
      return this.price;
    }
    
  }
  // Person
  // attributes:
  
  // name - set name from parameter in constructor method
  // age - initially 0
  // height - initially 0
  // weight - initially 0
  // mood - integer starting at 0 initially
  // hamsters - empty array initially
  // bankAccount - initially set to 0
  // methods:
  
  // getName() - returns name
  // getAge() - returns age
  // getWeight() - returns weight
  // greet() - logs a message with person's name
  // eat() - increment weight, increment mood
  // exercise() - decrement weight
  // ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
  // buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
  
  class Person{
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0){
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.mood = mood;
      this.hamsters = hamsters;
      this.bankAccount = bankAccount ; 
    }
    getName(){
      return this.name;
    }
    getAge(){
      return this.age;
  }
    getWeight(){
      return this.weight;
    }
    greet(){
      console.log(`Hi this is ${this.name}`);
    }
    eat(){
     this.weight +=  10;
     this.mood += 5;
   }
    exercise(){
      return this.weight -= 5 ;
    }
    setAge(age){
      this.age = age;
    }
    ageUp(){
       this.age += 5;
       this.height += 10;
       this.weight += 30;
       this.mood -= 3;
       this.bankAccount += 10;
    }
     buyHamster(hamster){
       this.hamsters.push(hamster);
       this.mood += 10;
       this.bankAccount -= hamster.getPrice();
    }
  }
  
  let p1 = new Person ("Timmy", 5 );
  
  for( let i = 0; i < 5; i++){
     p1.eat();
  }
  for( let i = 0; i < 5; i++){
     p1.exercise();
  }
  p1.setAge(9);
   
  let gus = new Hamster("Timmy","Gus");
  console.log(gus);
  p1.buyHamster(gus);
  p1.setAge(15);
  for( let i = 0; i < 2; i++){
    p1.eat();
 }
 for( let i = 0; i < 2; i++){
    p1.exercise();
 }
  console.log(p1);

  