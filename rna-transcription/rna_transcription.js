module.exports = toRna;

function toRna(dna){
  return dna.split('').map(function(index){
   return dnaToRna[index];
  }).join('');
}

var dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
};
