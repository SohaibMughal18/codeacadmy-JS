/*const menu ={
_courses:{
    appetizers : [],
    mains : [],
    desserts  : [],
},
get appetizers(){
    return this._courses.appetizers;

},
set appetizers(appetizers){
     return this._courses.appetizers=appetizers;
},
get mains(){
    return this._mains.appetizers;

},
set mains(mains){
     return this._courses.mains= mains;
},
get desserts(){
    return this._courses.desserts;

},
set desserts(desserts){
     return this._courses.desserts= desserts;
},

get courses ( ){
    return{
            appetizer:this.appetizers,
            mains: this.mains,
            desserts : this.desserts,
    };
},
 
addDishToCourse ( courseName , dishName , dishPrice){
const dish = {
    name : dishName,
    price : dishPrice
}
 return this._courses[courseName].push(dish);
},

getRandomDishFromCourse( courseName){
const dishes = this._courses[courseName];
getRandomIndex = Math.floor(Math.random()*dishes.length);
return dishes[getRandomIndex];
},


generateRandomMeal(){
    const app = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const des = this.getRandomDishFromCourse('desserts');
    const totalP = appetizers.price+mains.price+desserts.price;

    return ` Your Meal is ${appetizers
    .name} , ${mains.name} and ${desserts.name} and you bill is ${totalP}`
},
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
let meal = menu.generateRandomMeal();
console.log(meal);
*/