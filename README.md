# Project 4 - OOP Game App
Phrase hunter : https://mastermxx.github.io/treehouse-4-phrase-hunter/

project 4 - OOP Game App

Script by Mark Reijgwart

 I am aiming for a "Exceeds Expectations" grade.
 If I don't get this grade I would like to redo it.
 
 ******************************************
 
 ## Additional Styling
- Changed the win screen color into #78C5CF;
- Changed the losing screen color into #FFAB4C;
- Changed the onscreen keyboard into round buttons.
- Gave the onscreen keys hover state.
- I'd like to only use my ID's for javascript and classes
 for styling. So I replaced all the ID styling by classes.
 
 
 
 If the phrase includes the guessed letter, 
 the chosen CSS class is added to the selected letter's keyboard button, 
 the showMatchedLetter() method is called on the phrase, and the checkForWin() 
 method is called. If the player has won the game, the gameOver() method is called
 
 In handleInteraction, you have a really useful registerInput method that is called here, 
 running operations based on a correct letter. One thing is missing in this method, however. 
 If a correct letter is selected, you are not calling gameOver after checkWin is called. 