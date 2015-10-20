module.exports = {
    compute: hamming
};

function hamming(strand1, strand2) {
    validateInput(strand1,strand2);
    equalityCheck(strand1, strand2);
    return difference(strand1, strand2);
}

function validateInput(strand1, strand2){
    if (strand1.length != strand2.length) {
        throw "DNA strands must be of equal length.";
   }
}

function equalityCheck(strand1, strand2){
    if (strand1 === strand2)
        return 0;
}

function difference(strand1, strand2) {
    var hammingDistance = 0;
    strand1.split('').forEach(function(element, index) {
        if (element != strand2[index]) hammingDistance++;
    });
    return hammingDistance;
}