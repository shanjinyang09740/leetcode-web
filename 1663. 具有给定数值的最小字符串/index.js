/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  //数组全部填充a
  let transK = k - n;
  //从后往前拼接字符串
  let cur = 0, res = '';
  for (let i = n - 1; i >= 0; i--, transK -= cur) {
    cur = Math.min(25, transK);
    res = String.fromCharCode(97 + cur) + res;
  }

  return res;

};

var n = 5, k = 95;
let result = getSmallestString(n, k);
console.log("8888888", result);