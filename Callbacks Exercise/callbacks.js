class Clock {
    constructor() {
        const currentDate = new Date();
        this.hours = currentDate.getHours();
        this.minutes = currentDate.getMinutes();
        this.seconds = currentDate.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        // console.log(currentDate.toLocaleTimeString('en-US'));
    }

    _tick() { //Would have to also add conditional to limit hours more than 24 
        if (this.seconds === 59) {
            this.seconds = 0;
            if (this.minutes === 59) {
                this.minutes = 0; 
                this.hours += 1; 
            } else {
                this.minutes += 1; 
            }
        } else {
            this.seconds += 1; 
        }
        this.printTime(); 
        // console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
}

// const clock = new Clock(); 

// const readline = require('readline');
// // Create the interface from the module
// // this will allow us to receive user input
// // via the terminal
// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0 ) {
        reader.close(); 
        return completionCallback(sum); 
    }

    reader.question("Give me a number: ", answer => {
        sum += parseInt(answer);
        console.log(`You gave us ${answer} and you total is now ${sum}`);
        addNumbers(sum, numsLeft - 1, completionCallback);
    });
    
}
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, answer => {
        if (answer === "yes") {
            callback(true);
        } else if (answer === "no") {
            callback(false); 
        } else {
            console.log("Try again ");
            askIfGreaterThan(el1, el2, callback);
        }
    });
}

// askIfGreaterThan(4, 5, answer => {return answer;});

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === arr.length - 1) { 
        outerBubbleSortLoop(madeAnySwaps); 
    } else {
        askIfGreaterThan(arr[i], arr[i + 1], answer => {
            if (answer) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
        });
        
    }
}

// innerBubbleSortLoop([1, 2, 9, 6, 5, 4], 0, false, outerBubbleSortLoop);

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        }
        else {
            sortCompletionCallback(arr);
        }
    }
    madeAnySwaps = true;
    outerBubbleSortLoop(madeAnySwaps);
}

// absurdBubbleSort([6,5,4,3], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });


Function.prototype.myBind = function(context) {
    const that = this; 
    return () => {
        that.apply(context);
    };
};

// Function.prototype.myBind = function(lamp) {
    //     return (lamp) => {
        //         turnOn.apply(lamp);
        //     };
        // };
        
class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
// A MILLION LINES OF CODE 
myBoundTurnOn();
// turnOn.apply(lamp);