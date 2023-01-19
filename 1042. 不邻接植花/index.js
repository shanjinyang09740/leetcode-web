/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  //给每个位置填充上颜色
  let res = new Array(n).fill(1);
  const map = new Map();
  for (const [p1, p2] of paths) {
    map.get(p1) ? map.set(p1, map.get(p1).concat(p2)) : map.set(p1, [p2]);
    map.get(p2) ? map.set(p2, map.get(p2).concat(p1)) : map.set(p2, [p1]);
  }
  for (const [key, value] of map) {
    const colors = [1, 2, 3, 4];
    for (let path of value) {
      //找到相邻位置的颜色
      let colorIs = res[path - 1];
      let index = colors.indexOf(colorIs);
      colors.splice(index, 1);
    }
    res[key - 1] = colors[0];
  }
  return res;
};

var n = 4, paths = [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]];
gardenNoAdj(n, paths);