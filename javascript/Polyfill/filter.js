const arr = [1, 2, 3, 4, 5, 6];

const re = arr.filter((e) => e % 2 === 0);
console.log("re: ", re);

Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};

const re2 = arr.myFilter((e) => e % 2 === 0);
console.log("re2: ", re2);
