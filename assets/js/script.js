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
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame() {
    // Generate two random numbers between 1 and 25 
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;
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