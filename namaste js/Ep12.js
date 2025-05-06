// we have hide the count variable in this.
// because we are using the variable value some other
// function but we can't change the actual value
// of count;
// as shown by the counter1 and counter2 functions

function counter(){
    var count = 0;
    return function incrementCounter(){
        console.log(count);
        count++;
        console.log(count);
    }
}


var counter1 = counter();
counter1();
counter1();

console.log('next function');

var counter2 = counter();
counter2();
counter2();
//console.log(count);