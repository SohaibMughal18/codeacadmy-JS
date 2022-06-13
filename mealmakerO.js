const menu = {
    _courses : {
      appetizers: [],
      mains:[],
      desserts:[],
     },
     get appetizers (){
       return this._courses.appetizers;
     },
      set appetizers (appetizers){
        this._courses.appetizers =appetizers;
      },
      get mains(){
         return this._courses.mains;
      },
      set mains(mains){
        this._courses.mains = mains;
      },
      get desserts(){
         return this._courses.mains;
      },
      set desserts(desserts){
        this._courses.desserts =desserts;
      },
    
    get courses (){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
         name: dishName,
          price :dishPrice,
          }
      return this._courses[courseName].push(dish); 
    },
    
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex 
      = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    
    generateRandomMeal(){
      const appetizer = 
      this.getRandomDishFromCourse('appetizers');
      const main = 
      this.getRandomDishFromCourse('mains');
      const dessert =  
      this.getRandomDishFromCourse('desserts');
    const totalPrice= appetizer.price+ main.price+dessert.price;
     
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} ... The price is ${totalPrice}.`
    
    }
    }
    menu.addDishToCourse('appetizers', 'salad', 4.25);
    menu.addDishToCourse('appetizers', 'Wings', 4);
    menu.addDishToCourse('appetizers', 'Fries', 3);
    menu.addDishToCourse('mains', 'stack', 4.25);
    menu.addDishToCourse('mains', 'Salman', 4);
    menu.addDishToCourse('mains', 'Tofu', 3);
    menu.addDishToCourse('desserts', 'Ice Cream', 4.25);
    menu.addDishToCourse('desserts', 'Coffee', 4);
    menu.addDishToCourse('desserts', 'Cake', 3);
console.log(menu._courses.appetizers);
console.log(menu._courses.mains);
console.log(menu._courses.desserts);

    let meal = menu.generateRandomMeal();
    console.log(meal);
        