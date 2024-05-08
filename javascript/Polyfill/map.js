const arr = [1, 2, 3, 4, 5];

const re = arr.map((e) => {
  return e * 3;
});
console.log("re: ", re);

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(cb(this[index], index, this));
  }
  return result;
};
const re2 = arr.myMap((e) => {
  return e * 3;
});
console.log("re2: ", re2);
