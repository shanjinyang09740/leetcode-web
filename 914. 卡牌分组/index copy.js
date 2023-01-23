/**
 * @description 思路跑偏了
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  return getResult(deck);
};

var deck = [1, 1, 2, 2, 2, 2];

console.log(111111111111111, hasGroupsSizeX(deck));;

function getResult (deck) {
  // 先将传入的数组拆分成n个子数组（n>=2,数组内元素都相同）
  let getChildsResult = getChildsArrFunc(deck);
  console.log(getChildsResult);

  // 查看每个子数组内元素个数是否相同
  if (getChildsResult.length) {
    let newArr = [], flag = true;
    getChildsResult.some(item => {
      let len = item.length;
      if ((newArr.length && newArr.indexOf(len) === -1) || (len < 2)) {
        flag = false;
        return true;
      } else {
        newArr.push(len);
      }
    });
    return flag;
  } else {
    return false;
  }


}

function getChildsArrFunc (deck) {
  let childsArr = [];
  while (deck.length) {
    childsArr.push(getPerChilds(deck));
  }
  return childsArr;
}

function getPerChilds (arr) {
  let newArr = arr.splice(0, 1);
  arr.forEach((item, index) => {
    if (newArr.indexOf(item) > -1) {
      newArr.push(item);
      arr.splice(index, 1);
    }
  });
  return newArr;
}