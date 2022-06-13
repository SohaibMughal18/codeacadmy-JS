const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    }
    else {
      console.log('input is not valid');
    }
  };
  function getComputerChoice(){
  const randomNumber = Math.floor(Math.random() *3);
  
    switch (randomNumber){
      case 0 :
      return 'rock';
      case 1 :
      return 'paper';
      case 2:
      return 'scissors'
    }
  }
  function determineWinner( userChoice , computerChoice){
    if (userChoice === computerChoice){
      return 'game was tie';
    }
    if (userChoice === 'rock'){
      if ( computerChoice === 'paper'){
        return 'The computer won!';
      } else {
        return 'You Won!';
      }
    }
    if ( userChoice === 'paper'){
      if (computerChoice === 'scissor'){
        return ' the computer Won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissor'){
      if ( computerChoice ==="rock" ){
        return 'The computer won!';
      }else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb'){
      return " Congratulation you won!"
    }
  }
  function playGame(){
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
   console.log ("you threw : " + userChoice );
   console.log(" the computer threw : " +            computerChoice);
  console.log(determineWinner(userChoice , computerChoice));
  }
  playGame();
  