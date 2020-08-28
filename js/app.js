/******************************************
 Treehouse FSJS Techdegree:
 project 4 - OOP Game App
 Script by Mark Reijgwart
 I am aiming for a "Exceeds Expectations" grade.
 If I don't get this grade I would like to redo it.
 ******************************************/

const game = new Game();
startGameButton.addEventListener('click', function() {
    game.startGame();
})
game.handleInteraction();

// For press on the physical keyboard add event listener.
// The input will be for example: "keyR" so I remove key from the string and make it lowercase.
// So it can be compared like the onscreen keyboard keys.
// On keydown send input to registerInput().
document.addEventListener('keydown', (event) => {
    console.log(event)
    if (game.isAvailable) {

        console.log(event.key)
        const string = event.code;
        const currentKey = string.toLowerCase().slice(3);
        const regex = /[a-z]/g;

        console.log(currentKey)
        const bla = document.querySelector(`.${currentKey}`)
        console.log(bla)
        // if (currentKey !==)

        if (currentKey.match(regex) && string.length === 4) {
            const allKeys = Array.from(key);
            const keyElement = allKeys.find(k => k.innerHTML === currentKey);
            game.registerInput(keyElement);
        }
    }
});