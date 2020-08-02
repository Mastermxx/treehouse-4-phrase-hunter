/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
console.log('Phrase.js is loaded');



class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        // this.phrases = phrases;
        // this.chars = this.phrase.split('');
        // this.addPhraseToDisplay();
    }

    // this adds letter placeholders to the display when the game starts.
    // Each letter is presented by an empty box, one li element for each letter.
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('ul');

        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] !== ' ') {
                phraseDiv.innerHTML += `<li class='hide letter ${this.phrase[i]}'>${this.phrase[i]}</li>`;
            } else {
                phraseDiv.innerHTML += `<li class='space'></li>`;
            }
        }
    }

    // checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter() {

    }

    showMatchedLetter() {
        // reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s),
        // select all of the letter DOM elements that have a CSS class name that matches the selected letter and
        // replace each selected element's hide CSS class with the show CSS class.
    }
}