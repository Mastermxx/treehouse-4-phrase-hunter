/******************************************
 Treehouse FSJS Techdegree:
 project 4 - OOP Game App
 Script by Mark Reijgwart
 I am aiming for a "Exceeds Expectations" grade.
 If I don't get this grade I would like to redo it.
 ******************************************/

const phraseDiv = document.querySelector('ul');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        this.chars = this.phrase.split('');
    }

    // For every character in the phrase add a list item to the DOM.
    // Add the classes "hide" "letter" and "current character" and also the current character as innerHTML.
    // For every space in a phrase at a list item with a "space" class.
    addPhraseToDisplay() {
        this.chars
            .map((char) => {
                if (char !== ' ') phraseDiv.innerHTML += `<li class='hide letter ${char}'>${char}</li>`;
                else phraseDiv.innerHTML += `<li class='space'></li>`;
            })
    }

    // * Checks if passed letter is in the phrase
    // * @param (string) letter - Letter to check
    // * @return {boolean} True if letter is in phrase
    checkLetter(input) {
        return this.chars.includes(input)
    }


     // * Displays passed letter on screen after a match is found
     // * @param (string) letter - Letter to display
    showMatchedLetter(input) {
        const getCorrectLetter = document.getElementsByClassName(input);
        for (let i =0; i < getCorrectLetter.length; i++) {
            getCorrectLetter[i].classList.remove('hide');
            getCorrectLetter[i].classList.add('show');
        }
    }
}
