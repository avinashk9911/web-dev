var a =10;
function b(){
    var x = 10;
}

console.log(window.a);
// Even if we are not putting window, 
// still the output will be 10,
// because it will only search in global scope 
// and a has been defined in global space
console.log(a);

console.log(this.a);

// this will through an error.
// because, 'x' is not a global variable.
console.log(x);

// this is giving the output as undefined (search why ?)
console.log(b.x);