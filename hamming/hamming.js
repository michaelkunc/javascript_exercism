var hamming = {
    compute: function(strand1, strand2) {
        if (strand1.length != strand2.length)
            throw "DNA strands must be of equal length.";

        var difference = 0;

        strand1.split('').forEach(function(element, index) {
            if (element != strand2[index])
                difference++;
        });

        return difference;
    }
};

module.exports = hamming;