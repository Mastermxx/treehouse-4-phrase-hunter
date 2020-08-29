/******************************************
 Treehouse FSJS Techdegree:
 project 4 - OOP Game App
 Script by Mark Reijgwart
 I am aiming for a "Exceeds Expectations" grade.
 If I don't get this grade I would like to redo it.
 ******************************************/

let game;

function clickHandler(event){
    const btn = event.target.closest('button')
    if(btn) game.handleInteraction(btn)
}

function keydownHandler(event){
    if(game.isAvailable){
        const currentKey = event.key;
        const regex = /[a-z]/g;

        if (currentKey.match(regex)
            && currentKey.length === 1) {
            const element = keys.find(k => k.innerHTML === currentKey);
            game.handleInteraction(element);
        }
    }
}
qwerty.addEventListener('click', clickHandler)
document.addEventListener('keydown', keydownHandler)

startGameButton.addEventListener('click', function() {
    game = new Game();
    game.startGame();
})
