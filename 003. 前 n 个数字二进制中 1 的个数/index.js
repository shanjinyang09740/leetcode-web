/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let resArr = [];
  for (let i = 0; i <= n; i++) {
    let ejz = i.toString(2);
    let num = 0;
    for (let str of ejz) {
      if (str === '1') {
        num++;
      }
    }
    resArr.push(num);

  }

  return resArr;
};