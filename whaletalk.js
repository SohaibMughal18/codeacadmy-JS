const input = 'turpentine and turtles';
const vowels = [ 'a','e', 'i', 'o' ,'u'];
const resultArray = [];
for ( i = 0 ; i < input.length ; i++){
  for (j= 0 ; j < vowels.length ; j++){
    if (input[i] === vowels[j]){
      if (input[i] === 'e'){
        resultArray.push('ee');
      }
      else if (input[i] === 'u'){
        resultArray.push('uu');
      }
      else {
        resultArray.push(input[i]);
      }
       } 
  }
};
console.log(resultArray.join('').toUpperCase());