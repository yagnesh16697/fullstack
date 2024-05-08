const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.entries(obj));
//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

Object.prototype.myEntries = function (obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const result = [];
  for (let i = 0; i < keys.length; i++) {
    result.push([keys[i], values[i]]);
  }
  return result;
};

console.log(Object.myEntries(obj));
