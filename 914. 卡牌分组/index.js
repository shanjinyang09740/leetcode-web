/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length < 2) return false;
  const getZdgy = (a, b) => b === 0 ? a : getZdgy(b, a % b);
  let counter = [];
  for (let d of deck) {
    if (counter[d] === undefined) {
      counter[d] = 1;
    } else {
      counter[d]++;
    }
  }
  let prev = null;
  for (let i = 0; i < counter.length; i++) {
    if (counter[i] === undefined) continue;
    if (counter[i] < 2) return false;
    if (counter[i] === undefined) {
      prev = counter[i];
    } else {
      if (getZdgy(prev, counter[i]) < 2) return false;
      prev = counter[i];
    }
  }
  return true;

};




