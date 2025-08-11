//Wait for DOM to load before running the game

//Get the button elements and event listeners to them
 
 document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
              checkAnswer();                                      // If the button is a submit button, check the answer
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        });
    }
    runGame('addition');                                         // Start the game with addition by default

 })
 
 
 

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


/**
 * Checks the answer against the first element in the array returned by
 * calculateCorrectAnswers array.
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);                 // Get the user's answer from the input box
    let correctAnswers = calculateCorrectAnswers();                                        // Get the correct answers from the helper function
    let isCorrect = userAnswer === correctAnswers[0];                                      // Check if the user's answer matches the first element in the array

    if (isCorrect) {
        alert('Hey! you got it right! :D');                                                          // Alert the user if the answer is correct

    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${correctAnswers[0]}!`);                // Alert the user if the answer is incorrect
    }

    document.getElementById('answer-box').value = '';               // Clear the input box for the next question
    runGame(correctAnswers[1]);                                     // Run the game again with the same type of question
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc.)
 * directly from the DOM and checks the answer against the
 */
function calculateCorrectAnswers() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);   //parseInt converts the string to an integer
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, "addition"];  // Return the sum if the operator is plus
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;  // Throw an error if the operator is not implemented    
    }


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