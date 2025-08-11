//Wait for DOM to load before running the game

//Get the button elements and event listeners to them
 
 document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked the submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked a ${gameType}`);
            }
        });
    }
 })
 
 
 
 // To start the game
function runGame() {
   
}

// To check the user's answer
function checkAnswer() {
    
}

// helper function  to calculate the number of correct answers
function calculateCorrectAnswers() {
    
}
// To increment the score
function incrementScore() {
    
}
// To increment the number of wrong answers
function incrementWrongAnswers() {
    
}

// To display an addition question
function displayAdditionQuestion() {
   
}
// To display a subtraction question
function displaySubtractQuestion() {
    
}
  // To display a multiplication question
function displayMultiplyQuestion() {
  
} 

// To display a division question
function displayDivisionQuestion() {
    
}