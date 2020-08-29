/******************************************
 Treehouse FSJS Techdegree:
 project 4 - OOP Game App
 Script by Mark Reijgwart
 I am aiming for a "Exceeds Expectations" grade.
 If I don't get this grade I would like to redo it.
 ******************************************/

const overlayDiv = document.querySelector('#overlay')
const heartIcons = document.querySelectorAll('img');
const qwerty = document.querySelector('#qwerty');
const keys = Array.from(document.querySelectorAll('.key'));
const winLoseMessage = document.querySelector('#game-over-message');
const startGameButton = document.querySelector('#btn__reset')
const phrases = ['produce', 'you are pretty', 'wrong', 'monkey', 'something else', 'material', 'party', 'century', 'greatest']

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.isAvailable = false; // Disables physical keyboard
    }

    // * Creates phrases for use in game
    // * @return {array} An array of phrases that could be used in the game
    createPhrases() { return phrases.map(phrase => new Phrase(phrase)) }

    // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNumber];
    };

    // * Begins game by selecting a random phrase and displaying it to user
    startGame() {
        phraseDiv.innerHTML = ''; // Empty the phrase div to make room for a new phrase.

        // Remove added classes and remove disabled from buttons.
        keys.forEach(key => {
            key.disabled = false;
            key.classList.remove('wrong', 'chosen');
        });

        heartIcons.forEach(heart => heart.src = 'images/liveHeart.png'); // Reset the heart icons into live hearts.

        overlayDiv.style.display = 'none'; // Hides the start screen overlay


        // calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
        this.activePhrase = this.getRandomPhrase();
        // It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        this.activePhrase.addPhraseToDisplay();

        this.isAvailable = true; // Enable physical keyboard
    };

    // For every key on the onscreen keyboard add event listener. On click send input to registerInput().
    handleInteraction(button) {
        const letter = button.innerHTML
        if (button.disabled === false) {
            button.disabled = true; // Disable the selected letter’s onscreen keyboard button.
            if (this.activePhrase.checkLetter(letter)) {
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(letter);
                if(this.checkForWin()) this.gameOver(true)
            } else {
                button.classList.add('wrong');
                this.removeLife();
            }
        }
    };

    // * Increases the value of the missed property
    // * Removes a life from the scoreboard
    // * Checks if player has remaining lives and ends game if player is out
    removeLife() {
        heartIcons[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver();
        }
    };

    // * Checks for winning move
    // * @return {boolean} True if game has been won, false if game wasn't won
    checkForWin() {
        const shownLetters = document.querySelectorAll('.show');
        const spaces = document.querySelectorAll('.space');
        return this.activePhrase.phrase.length === shownLetters.length + spaces.length;
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
            winLoseMessage.innerHTML += `Congrats you win this time! 😁`
        } else {
            overlayDiv.classList.add('lose')
            winLoseMessage.innerHTML +=
                `You lose, better luck next time 😢 <br>
                The phrase was: "${this.activePhrase.phrase}"`
        }
        startGameButton.innerHTML = 'Restart Game';
        this.isAvailable = false; // Disables physical keyboard
    }
}
