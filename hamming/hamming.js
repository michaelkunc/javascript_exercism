module.exports = {
    compute: hamming
};

function hamming(strand1, strand2) {
    if (strand1.length != strand2.length) {
        throw "DNA strands must be of equal length.";
        return;
    }
    return difference(strand1, strand2);
}

function difference(strand1, strand2) {
    var count = 0;
    strand1.split('').forEach(function(element, index) {
        if (element != strand2[index]) count++;
    });
    return count;
}