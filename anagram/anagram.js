var Anagram = function(word) {
  this.word = word;

  var sortWord = function(word) {
      return word.toLowerCase().split('').sort().join();
  };

  var checkSelf = function(word, secondWord) {
      return word.toLowerCase() == secondWord.toLowerCase();
  };

  var createArray = function(words, object) {
      if (Array.isArray(words)) {
          return words;
      } else {
          return Array.prototype.slice.call(object);
      }
  };

  var sorted = sortWord(word);

  this.matches = function(words) {
      var matches = [];
      createArray(words, arguments).forEach(function(element) {
          if (sorted == sortWord(element) && (!checkSelf(word, element))) {
              matches.push(element);
          }
      });
      return matches;
  };
  return this;
};

module.exports = Anagram;