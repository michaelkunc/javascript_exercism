//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {

  this.hey = function(input) {
    if (isLoud(input)) return responses.chill;

    if (isQuestion(input)) return responses.answer;

    if (isSilent(input)) return responses.silentTreatment;

    return responses.whatever;
  };

  var responses = {
        chill: 'Whoa, chill out!',
        answer: 'Sure.',
        silentTreatment: 'Fine. Be that way!',
        whatever: 'Whatever.'
    },

    isLoud = function(input) {
        return input === input.toUpperCase() && /[a-z]/i.test(input);
    },

    isQuestion = function(input) {
        return input.slice(-1) === '?';
    },

    isSilent = function(input) {
        return input.trim().length === 0;
    };

};

module.exports = Bob;