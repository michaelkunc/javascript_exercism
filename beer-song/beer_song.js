function verse(num) {
  if (num === 0) return noBottles();
  if (num === 1) return oneBottle();
  if (num === 2) return twoBottles();
  return thisBottle(num);
}

function sing(firstBottle, lastBottle) {
  if (firstBottle === lastBottle)
    return verse(lastBottle);

  if (firstBottle === 1)
    return verse(1) + '\n' + sing(firstBottle -1, lastBottle);

  if (firstBottle === 0)
    return verse(0);

  return verse(firstBottle) + '\n' + sing(firstBottle - 1, lastBottle);
}

function thisBottle(num) {
  return num + ' bottles of beer on the wall, ' + num +' bottles of beer.\nTake one down and pass it around, ' + (num - 1) + ' bottles of beer on the wall.\n';
}

function twoBottles(){
  return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
}

function oneBottle(){
  return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
}


function noBottles(){
  return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
}

module.exports = {
  verse: verse,
  sing: sing
};