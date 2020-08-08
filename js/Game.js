/******************************************
 Treehouse FSJS Techdegree:
 project 4 - OOP Game App
 Script by Mark Reijgwart
 I am aiming for a "Exceeds Expectations" grade.
 If I don't get this grade I would like to redo it.
 ******************************************/

const overlayDiv = document.querySelector('#overlay')
const heartIcons = document.querySelectorAll('img');
const key = document.querySelectorAll('.key');
const winLoseMessage = document.querySelector('#game-over-message');
const startGameButton = document.querySelector('#btn__reset')

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.isAvailable = false; // Disables physical keyboard
    }

     // * Creates phrases for use in game
     // * @return {array} An array of phrases that could be used in the game
    createPhrases() {
        return ['produce', 'you are pretty', 'wrong', 'monkey', 'something else', 'material', 'party', 'century', 'greatest'];
    };

    // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNumber];
    };

    // * Begins game by selecting a random phrase and displaying it to user
    startGame() {
        this.isAvailable = true; // Make physical keyboard available
        this.missed = 0;

        phraseDiv.innerHTML = ''; // Empty the phrase div to make room for a new phrase.
        heartIcons.forEach(heart => heart.src = 'images/liveHeart.png'); // Reset the heart icons into live hearts.

        // Remove added classes and remove disabled from buttons.
        key.forEach(k => {
            k.disabled = false;
            k.classList.remove('wrong', 'chosen');
        });

        overlayDiv.style.display = 'none'; // Hides the start screen overlay
        // calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
        this.activePhrase = this.getRandomPhrase();
        // It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        this.phrase = new Phrase(this.activePhrase);
        this.phrase.addPhraseToDisplay();
    };

    // Added this function to register both inputs from onscreen & physical key.
    // If the input (letter) is in the phrase: Show letter on display,give it a class "chosen" and checkForWin().
    // Else removeLife() and give it a class "wrong"
    registerInput(input) {
        const letter = input.innerHTML
        if (this.phrase.checkLetter(letter)) {
            this.phrase.showMatchedLetter(letter);
            input.classList.add('chosen');
            this.checkForWin()
        } else {
            input.classList.add('wrong');
            this.removeLife();
        }
        input.disabled = true; // Disable the selected letter’s onscreen keyboard button.
    }

    handleInteraction() {

        // For every key on the onscreen keyboard add event listener. On click send input to registerInput().
        key.forEach(k => {
            k.addEventListener('click', (event) => {
                this.registerInput(k);
            });
        });

        // For press on the physical keyboard add event listener.
        // The input will be for example: "keyR" so I remove key from the string and make it lowercase.
        // So it can be compared like the onscreen keyboard keys.
        // On keydown send input to registerInput().
        document.addEventListener('keydown', (event) => {
            if (this.isAvailable) {

                const string = event.code;
                const currentKey = string.toLowerCase().slice(3);
                const regex = /[a-z]/g;

                if (currentKey.match(regex) && string.length === 4) {
                    const allKeys = Array.from(key);
                    const keyElement = allKeys.find(k => k.innerHTML === currentKey);
                    this.registerInput(keyElement);
                }
            }
        });

    };

    // * Increases the value of the missed property
    // * Removes a life from the scoreboard
    // * Checks if player has remaining lives and ends game if player is out
    removeLife() {
        if (this.missed === 4){
            this.gameOver();
        } else {
            heartIcons[this.missed].src = 'images/lostHeart.png';
            this.missed += 1;
        }
    };


    // * Checks for winning move
    // * @return {boolean} True if game has been won, false if game wasn't won
    checkForWin() {
        const shownLetters = document.querySelectorAll('.show');
        const spaces = document.querySelectorAll('.space');
        const phraseLength = this.activePhrase.length;
        const gameWon = phraseLength === shownLetters.length + spaces.length;

        // If length of phrase is the same a length of shown letters + amount of spaces, the game is won.
        if (phraseLength === shownLetters.length + spaces.length) {
            this.gameOver(gameWon)
        }
    }

    // this method displays the original start screen overlay, and depending on the outcome of the game,
    // updates the overlay h1 element with a friendly win or loss message,
    // and replaces the overlay’s start CSS class with either the win or lose CSS class.
    gameOver(gameWon) {
        // Reset the win or lose message
        winLoseMessage.innerHTML = '';
        // show the overlay
        overlayDiv.style.display = 'flex';
        overlayDiv.classList.remove('win', 'lose');

        // based on win or lose add a lose or win class to the main-container
        // also add a message on the overlay if the player won or lost.
        if (gameWon) {
            overlayDiv.classList.add('win')
            winLoseMessage.innerHTML += `Congrats you win this time! :)`
        } else {
            overlayDiv.classList.add('lose')
            winLoseMessage.innerHTML +=
                `You lose, better luck next time :( <br>
                The phrase was: "${this.phrase.phrase}"`
        }
        startGameButton.innerHTML = 'Restart Game';

        this.isAvailable = false; // Disables physical keyboard
    }
}
