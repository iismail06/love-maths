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
                runGame(gameType);
            }
        });
    }
    runGame('addition'); // Start the game with addition by default

 })
 
 
 
// To start the game
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed.
 */
function runGame(gameType) {
    // Generate two random numbers between 1 and 25 
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;

   if(gameType === 'addition') {
       displayAdditionQuestion(num1, num2);
   } else {
         alert(`Unknown game type: ${gameType}`);                   // Alert the user if the game type is unknown
         throw `Unknown game type: ${gameType}. Aborting!`;         // Throw an error to stop the game
   }
  
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
function displayAdditionQuestion(operand1, operand2) {   // Display an addition question
    // Get the element with the id of 'operation' and set its text content to the
    document.getElementById('operand1').textContent = operand1;     // Set the first operand
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}
// To display a subtraction question
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '-';

}
  // To display a multiplication question
function displayMultiplyQuestion() {
  
} 

// To display a division question
function displayDivisionQuestion() {
    
}