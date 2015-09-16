var Hamming = {
    compute: function(strand1, strand2) {
        if (strand1.length != strand2.length) {
            throw "DNA strands must be of equal length.";
        } else {
            var difference = 0;
            for (var i = 0; i < strand1.length; i++) {
                if (strand1[i] != strand2[i]) {
                    difference = difference + 1;
                }
            }
            return difference;
        }
    }
};

module.exports = Hamming;

