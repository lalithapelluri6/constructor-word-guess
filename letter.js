
var letter = function(underscore,letterGuess) {
    let array = ['stringone', 'stringtwo', 'stringthree', 'stringfour'];
    this.underscore = underscore;
    this.letterGuess = false;
    this.display = function () {
        if (this.underscore === ' ') {
            return (' ');
        } else if (this.letterGuess) {
            return (this.underscore);
        } else if (this.underscore === "'") {
            return ("'");
        } else if (this.underscore === "-") {
            return ("-");
        } else if (this.letterGuess) {
            return ("-");
        }
    }
    this.letterGuess = function (guess) {
        if (guess.toLowerCase() === this.underscore.toLowerCase()) {
            this.isLetterGuessed = true;
        }
    }
}
module.exports = letter;
