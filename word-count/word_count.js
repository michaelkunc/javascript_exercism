function words(string) {
    var wordArray = string.trim().split(/\s+/),
        wordCount = wordArray.reduce(function(map, word) {
            map[word] = (map[word] || 0) + 1;
            return map;
        }, Object.create(null));
    return wordCount;
}
module.exports = words;