function getSleepHours(day){
  day = day.toLowerCase();
  if (day === 'monday'){
    return 7;
  } 
  else if ( day === 'tuesday'){
    return 8;
  }
  else if ( day === 'thursday'){
    return 7;
  }
  else if ( day === 'friday'){
    return 7;
  }
  else if ( day === 'saturday'){
    return 7;
  }
  else if ( day === 'sunday'){
    return 7;
  }
  else if ( day === 'wednesday'){
    return 7;
  }
}

function getActualSleepHours(){
  const mon = getSleepHours('monday');
  const sun  = getSleepHours('sunday');
  const tue = getSleepHours('tuesday');
  const wed = getSleepHours('wednesday');
  const thu = getSleepHours('thursday');
  const fri = getSleepHours('friday');
  const sat = getSleepHours('saturday');
const totalHoursWeek = sat +sun+ tue+ wed + thu + fri +mon;
return totalHoursWeek;
}
 function getIdealSleepHours (idealHours = 7) {
  
   return idealHours * 7;
 }

function calculateSleepDebt(){
 const actualSleepHours = getActualSleepHours();
  const idealSleepHours  = getIdealSleepHours(6);
  if ( actualSleepHours === idealSleepHours ){
    return 'User got the exect amount of sleep';
  }
 else  if ( actualSleepHours > idealSleepHours ){
     const over = actualSleepHours - idealSleepHours;
    return 'User got more ' + over + ' Hour sleep than needed ';
  }
else if ( actualSleepHours < idealSleepHours ){
      const less = idealSleepHours - actualSleepHours;
    return 'User should get ' + less + ' Hour rest';
  }
}
console.log (calculateSleepDebt());
