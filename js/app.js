/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
console.log('app.js is loaded');

const startGameButton = document.querySelector('#btn__reset')

startGameButton.addEventListener('click', function() {
    const game = new Game(0);
    game.startGame();
    game.handleInteraction();
})

