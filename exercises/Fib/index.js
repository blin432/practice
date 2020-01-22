/**
 * Fib
 *
 * Write a function which print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * Example sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 *
 * Examples:
 * fib(4) === 3
 * fib(15) === 610
 */


function fib(n){
    a=0;
    b=1;
    for (var i=1;i<n;i++){
        let temp=b
        b=b+a
        a=temp
    }
    return b

}


console.log(fib(2));
