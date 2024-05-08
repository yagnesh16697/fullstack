const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(result);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

const result2 = arr.myReduce((acc, val) => {
  return acc + val;
}, 0);

console.log(result2);
