class Dinner {
    constructor(appetizer, entree, dessert){
      this.appetizer  = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
   }
   
   class Chef {
    createDinner(appetizer, entree, dessert){
      let newDinner = new Dinner (appetizer, entree, dessert);
      return newDinner;
    }
   }
   
   let chef = new Chef();
   
   console.log(chef.createDinner("Stuffed mushrooms", "Chimichanga", "Godiva Cheesecake"));
   console.log(chef.createDinner("Cauliflower wings", "Quesdilla", "Raspberry Cheesecake"));
   console.log(chef.createDinner("Chicken wings", "Briyani", "Gulab Jamun"));
   