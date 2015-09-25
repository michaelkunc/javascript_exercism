//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//


var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (input === input.toUpperCase() && /[a-z]/i.test(input)) {
        return responses.chill;
    }

    if (input.slice(-1) == '?') {
        return responses.answer;
    }

    if (input.trim().length === 0){
      return responses.silentTreatment;
    }

    return responses.whatever;
};

var responses = {
  chill: 'Whoa, chill out!',
  answer: 'Sure.',
  silentTreatment: 'Fine. Be that way!',
  whatever: 'Whatever.'
};

module.exports = Bob;