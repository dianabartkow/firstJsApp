console.log("Hello world!");

function add(a, b) {
    // var is visible in the whole function
    var myVar = 1;

    myVar = 'String is also find';

    myVar = function() {
        console.log('Haha');
    }

    myVar = 13;

    if(myVar > 12) {
        let mySecondVar = 5;
        let sum = myVar + mySecondVar;

        console.log(sum);
    }

    //console.log(mySecondVar);
}

add(5, 10);