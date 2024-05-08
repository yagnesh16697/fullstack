const arr = [1, 2, 3, 4, 5];

arr.forEach((ele) => {
  console.log(ele);
});

console.log("-".repeat(10));
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((ele) => {
  console.log(ele);
});
