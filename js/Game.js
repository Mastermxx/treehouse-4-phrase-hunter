/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
console.log('Game.js is loaded');

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
        return ['produce', 'you are pretty', 'wrong', 'monkey', 'something else', 'material', 'party', 'century', 'greatest'];
    };

    // this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length)
        return this.phrases[randomNumber];
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        // hides the start screen overlay
        document.querySelector('#overlay').style.display = 'none';
        // calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase.
        this.activePhrase = this.getRandomPhrase();
        // It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
        const phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
    };

    // this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase,
    // and then directs the game based on a correct or incorrect guess. This method should:
    // Disable the selected letter’s onscreen keyboard button.
    // If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
    // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button,
    // call the showMatchedLetter() method on the phrase, and then call the checkForWin() method.
    // If the player has won the game, also call the gameOver() method.
    handleInteraction() {

    };

    // this method removes a life from the scoreboard, by replacing one of the liveHeart.png
    // images with a lostHeart.png image (found in the images folder) and increments the missed property.
    // If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    removeLife() {

    };

    checkForWin() {
        // this method checks to see if the player has revealed all of the letters in the active phrase.
    };

    // this method displays the original start screen overlay, and depending on the outcome of the game,
    // updates the overlay h1 element with a friendly win or loss message,
    // and replaces the overlay’s start CSS class with either the win or lose CSS class.
    gameOver() {

    }

}