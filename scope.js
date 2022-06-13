

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = even => {
  let days;
    if (even === 'Marathon') {
       days = 50;
    } else if (even === 'Triathlon') {
       days = 100;
    } else if (even === 'Pentathlon') {
       days = 200;
    }
  
    return days;
  };
  
  // The scope of `name` is too tight 
  const logEvent = (name ,event) => {
  
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name ,days) => {
    
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const eventt = getRandEvent();
  const days = getTrainingDays(eventt);
  
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  
  logEvent('naila',eventt);
  logTime('naila' ,days);
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
   
  logEvent(name2, event2);
  logTime(name2, days2);
  