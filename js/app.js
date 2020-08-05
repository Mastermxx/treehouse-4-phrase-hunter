/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
startGameButton.addEventListener('click', function() {
    game.startGame();
})
game.handleInteraction();
