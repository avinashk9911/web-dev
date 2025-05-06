// in Ep14 the function was not good for scalable.
// so we will use constuctor function

function Counter(){
    var count = 0;

    this.incrementCounter = function () {
        count ++;
        console.log(count);
    }

    this.dectementCounter = function(){
        count --;
        console.log(count);
    }
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();

var counter2 = new Counter();

counter2.dectementCounter();
counter2.dectementCounter();