var inquirer = require('inquirer');
var Letter = require('./letter.js');
var Word = require('./word.js');


function newGame() {

    var word = new Word("Warriors");
    word.display();
    userGuess(word);

    // if(this.guessedLetter.length > 0){
    //     this.guessedLetter = [];
    //   }

}

// function resetRemainingGuesses() {
//     this.guessesLeft = 10;
//     this.guessedLetter = [];
// }

function userGuess(word){

	inquirer.prompt([{
        name: "letter",
        message: "Guess a letter: ",
        type: "input",
        // validate: function(value) {
        //     if(Letter(value)){
        //       return true;
        //     } else{
        //       return false;
        //     }
        //   }
        }]).then(function(guess){
           //console.log(guess.letter);
		word.checkLetter(guess.letter);
        word.display();
        userGuess(word);

        // if(guessesLeft > 0) {
        //     userGuess();
        //   }else if(that.guessesLeft === 0){
        //     console.log('Game over!');
        //   }
        
    });
    
}
newGame();

