/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
console.log('Game.js is loaded');

const overlayDiv = document.querySelector('#overlay')
const heartIcons = document.querySelectorAll('img');
const key = document.querySelectorAll('.key');
const winLoseMessage = document.querySelector('#game-over-message');

class Game {
    constructor(missed, phrases, activePhrase) {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
     */
    createPhrases() {
        // return ['produce', 'you are pretty', 'wrong', 'monkey', 'something else', 'material', 'party', 'century', 'greatest'];
        return ['greatest'];
    };

    // done - this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNumber];
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        // done - hides the start screen overlay
        overlayDiv.style.display = 'none';
        // done - calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
        this.activePhrase = this.getRandomPhrase();
        console.log(`phrase length: ${this.activePhrase.length}`)
        // done - It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        this.phrase = new Phrase(this.activePhrase);
        this.phrase.addPhraseToDisplay();
    };

    // done - this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase,
    // and then directs the game based on a correct or incorrect guess. This method should:
    // done - Disable the selected letter’s onscreen keyboard button.
    // done - If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
    // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button,
    // done - call the showMatchedLetter() method on the phrase, and then call the checkForWin() method.
    // If the player has won the game, also call the gameOver() method.
    handleInteraction() {


        let phrase = this.phrase;

        for (let i = 0; i < key.length; i++) {

            key[i].addEventListener('click', (event) => {

                const input = key[i].innerHTML;
                key[i].disabled = 'false'

                if (phrase.checkLetter(input)) {
                    phrase.showMatchedLetter(input)
                    this.checkForWin()
                } else {
                    this.removeLife();
                }
            })
        }


    };

    // this method removes a life from the scoreboard, by replacing one of the liveHeart.png
    // images with a lostHeart.png image (found in the images folder) and increments the missed property.
    // If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    removeLife() {

        console.log(`missed: ${this.missed + 1}`)

        if (this.missed === 4) {
            this.gameOver();
        } else {
            heartIcons[this.missed].src = '../phrase-hunter/images/lostHeart.png';
            this.missed += 1;
        }
    };

    checkForWin() {

        const shownLetters = document.querySelectorAll('.show');
        const phraseLength = this.activePhrase.length;
        if (phraseLength === shownLetters.length) {
            console.log('you won!')
        }



        // this method checks to see if the player has revealed all of the letters in the active phrase.
    };

    // this method displays the original start screen overlay, and depending on the outcome of the game,
    // updates the overlay h1 element with a friendly win or loss message,
    // and replaces the overlay’s start CSS class with either the win or lose CSS class.
    gameOver() {
        overlayDiv.style.display = 'flex';
        winLoseMessage.innerHTML =
            `unlucky, you lose :( <br>
            <span>the correct phrase was : "${this.activePhrase}"</span>`;

        overlayDiv.classList.add('lose')
    }

}