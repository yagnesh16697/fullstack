/*
There are two types of objects bindings in js
1. Implicit
2. Explicit

1. Implicit Binding is applied when you invoke a function in an Object using the dot notation. this in such scenarios will point to the object using which the function was invoked. Or simply the object on the left side of the dot.


example :
var calc = {
    total: 100,
    add(x) {
        return this.total + x
    }
    subtract(x) {
        return this.total - x
    }
}
const result = calc.add(10);

2. Explicit Binding, you can force a function to use a certain object as its this. Explicit Binding can be applied using call(), apply(), and bind().
*/

//Explain this keyword
