/* Treehouse FSJS Techdegree
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

    // done - checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(input) {
        return this.chars.includes(input)
    }

    // done - reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s),
    // done - select all of the letter DOM elements that have a CSS class name that matches the selected letter and
    // done - replace each selected element's hide CSS class with the show CSS class.
    showMatchedLetter(input) {
        const getCorrectLetter = document.getElementsByClassName(input);
        for (let i =0; i < getCorrectLetter.length; i++) {
            getCorrectLetter[i].classList.remove('hide');
            getCorrectLetter[i].classList.add('show');
        }
    }
}