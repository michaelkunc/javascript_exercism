var toRna = function(dna){
  var dnaToRna = {
    'G' : 'C',
    'C' : 'G',
    'T' : 'A',
    'A' : 'U'
  }
  var rna = [];
  var dna = dna.split('')
  for (var i = 0; i < dna.length; i++){
    rna.push(dnaToRna[dna[i]]);
  }
  return rna.join('');
};

module.exports = toRna;