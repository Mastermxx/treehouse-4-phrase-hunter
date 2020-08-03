/* Treehouse FSJS Techdegre
 * Project 4 - OOP Game App
 * Phrase.js */
console.log('Phrase.js is loaded');

const phraseDiv = document.querySelector('ul');

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        this.chars = this.phrase.split('');
    }

    // done - this adds letter placeholders to the display when the game starts.
    // done - Each letter is presented by an empty box, one li element for each letter.
    addPhraseToDisplay() {
        this.chars
            .map((char) => {
                if (char !== ' ') phraseDiv.innerHTML += `<li class='hide letter ${char}'>${char}</li>`;
                else phraseDiv.innerHTML += `<li class='space'></li>`;
            })
    }

    // * Checks if passed letter is in phrase
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
