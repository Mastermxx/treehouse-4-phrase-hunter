/******************************************
 Treehouse FSJS Techdegree:
 project 4 - OOP Game App
 Script by Mark Reijgwart
 I am aiming for a "Exceeds Expectations" grade.
 If I don't get this grade I would like to redo it.
 ******************************************/

startGameButton.addEventListener('click', function() {
    const game = new Game();
    game.startGame();
    game.handleInteraction();
})
