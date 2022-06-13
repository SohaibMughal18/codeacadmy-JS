let raceNumber = Math.floor(Math.random() * 1000);
const early = true;
const  rAge = 19;
if (early  && rAge > 18){
  raceNumber += 1000;
  console.log(`your  race will began at 9:30 am and race number is ${raceNumber}`);
}
/*else if (early  && rAge > 18){
  console.log(`your  race will began at 9:30 am and race number is ${raceNumber}`);
}*/
 else if (!early  && rAge > 18){
  console.log(`your  race will began at 11:00 am and race number is ${raceNumber}`);
}
else if ( rAge < 18){
  console.log(`your race will began at 12:30 pm and race number is ${raceNumber}`);
}
else{
  console.log(" please approach registration desk");
}