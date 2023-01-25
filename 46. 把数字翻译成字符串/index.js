const translateNum = (num) => {
  const str = num.toString();
  const defs = (str, pointer) => {
    if (pointer >= str.length - 1) return 1;
    let temp = Number(str[pointer] + str[pointer + 1]);
    if (temp >= 10 && temp <= 25) {
      return defs(str, pointer + 1) + defs(str, pointer + 2);
    } else {
      return defs(str, pointer + 1);
    }
  };
  return defs(str, 0);
};


var num = 12258;
let result = translateNum(num);
console.log(result);