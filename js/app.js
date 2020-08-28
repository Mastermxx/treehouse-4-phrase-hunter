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

// For press on the physical keyboard add event listener.
// The input will be for example: "keyR" so I remove key from the string and make it lowercase.
// So it can be compared like the onscreen keyboard keys.
// On keydown send input to registerInput().
document.addEventListener('keydown', (event) => {
    if (game.isAvailable) {
        const currentKey = event.key;
        const regex = /[a-z]/g;
        console.log(currentKey)

        if (currentKey.match(regex) && currentKey.length === 1) {
            console.log('correct')
            game.registerInput(currentKey);
        }
    }
});
