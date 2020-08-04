/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
console.log('Game.js is loaded');

const overlayDiv = document.querySelector('#overlay')
const heartIcons = document.querySelectorAll('img');
const key = document.querySelectorAll('.key');
let winLoseMessage = document.querySelector('#game-over-message');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

     // * Creates phrases for use in game
     // * @return {array} An array of phrases that could be used in the game
    createPhrases() {
        return ['produce', 'you are pretty', 'wrong', 'monkey', 'something else', 'material', 'party', 'century', 'greatest'];
    };

    // done - this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNumber];
    };

    // * Begins game by selecting a random phrase and displaying it to user
    startGame() {
        this.missed = 0;
        // done - hides the start screen overlay
        overlayDiv.style.display = 'none';
        // done - calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
        this.activePhrase = this.getRandomPhrase();
        // done - It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        this.phrase = new Phrase(this.activePhrase);
        this.phrase.addPhraseToDisplay();
        console.log(this.phrase)
    };

    registerInput(input) {
        const key = input.innerHTML
        if (this.phrase.checkLetter(key)) {
            this.phrase.showMatchedLetter(key);
            input.classList.add('chosen');
            this.checkForWin()
        } else {
            input.classList.add('wrong');
            this.removeLife();
        }
    }

    // done - this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase,
    // and then directs the game based on a correct or incorrect guess. This method should:
    // done - Disable the selected letter’s onscreen keyboard button.
    // done - If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
    // done - If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button,
    // done - call the showMatchedLetter() method on the phrase, and then call the checkForWin() method.
    // done - If the player has won the game, also call the gameOver() method.
    handleInteraction() {

        key.forEach(key => {
            key.classList.add(`key${key.innerHTML}`);
            key.addEventListener('click', (event) => {
                this.registerInput(key);
                key.disabled = 'false'
            });
        });

        document.addEventListener('keydown', (event) => {
            let key = event.code.toLowerCase();
            key = document.querySelector(`.${key}`);
            event.preventDefault();
            console.log(key)
            this.registerInput(key);
        });
        
        // op werk oplossing
        // document.addEventListener('keydown', (event) => {
        //     let keyboardKey = event.code.toLowerCase().slice(3);
        //     keyboardKey = document.querySelector(`.key${keyboardKey}`);
        //     this.registerInput(keyboardKey);
        // });

    };

    // * Increases the value of the missed property
    // * Removes a life from the scoreboard
    // * Checks if player has remaining lives and ends game if player is out
    removeLife() {
        console.log(this.missed);
        if (this.missed === 5){
            this.gameOver();
        } else {
            heartIcons[this.missed].src = 'images/lostHeart.png';
            this.missed = this.missed + 1;
        }
    };


    // * Checks for winning move
    // * @return {boolean} True if game has been won, false if game wasn't won
    //!!! needs fixing boolean instead of message
    checkForWin() {
        const shownLetters = document.querySelectorAll('.show');
        const spaces = document.querySelectorAll('.space');
        const phraseLength = this.activePhrase.length;

        this.winOrLose = phraseLength === shownLetters.length + spaces.length;

        if (phraseLength === shownLetters.length + spaces.length) {
            this.gameOver()
            return this.winOrLose;
        }
    }

    // this method displays the original start screen overlay, and depending on the outcome of the game,
    // updates the overlay h1 element with a friendly win or loss message,
    // and replaces the overlay’s start CSS class with either the win or lose CSS class.
    gameOver() {

        // empty the phrase div to make room for a new phrase
        phraseDiv.innerHTML = '';
        winLoseMessage.innerHTML = '';

        // show the overlay
        overlayDiv.style.display = 'flex';
        overlayDiv.classList.remove('win', 'lose');

        // reset the heart icons into live hearts
        heartIcons.forEach(heart => heart.src = 'images/liveHeart.png');

        // based on win or lose add a lose or win class to the main-container
        // also add a message on the overlay if the player won or lost.
        if (this.winOrLose === true) {
            overlayDiv.classList.add('win')
            winLoseMessage.innerHTML += `Congrats you win this time! :)`
        } else {
            overlayDiv.classList.add('lose')
            winLoseMessage.innerHTML += `You lose, better luck next time :(`
        }

        key.forEach(key => {
            key.removeAttribute('disabled');
            key.classList.remove('wrong', 'chosen');
        });

        this.missed = 0;
    }
}
