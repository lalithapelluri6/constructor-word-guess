var letter = require("./letter.js");

var Word = function(word) {
    this.buidWord = function(word) {
        var letterArray = [];
          for(var i=0; i<Word.length; i++){
              var currentLetter = new letter(word[i]);
              letterArray.push(currentLetter);
          }
          return letterArray;
    }
}
 this.letters = this.buildWord(Word);
this.chosenWord = word;

this.checkGuess = function(guess){

    for(var i=0; i<this.letters.length; i++){
        this.letters[i].isLetterGuessed(guess);
    }
}
 this.display = function(){
    var  letterArray = '';
         for(var i=0; i<this.letters.length; i++){
             letterArray += this.letters[i].display();
         }
         return letterArray;
 }

module.exports = Word;

