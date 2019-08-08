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

function fib(n) {
    let a = 0;
    let b = 1;
for (var i = 0; i<n+1;i++){
    a=b
    b=a+b;
}
return b
}

module.exports = fib;
function fib(n){
    let a = 0;
    let b = 1;
    for (var i=1;i<n;i++){
        const next=b
        
        b=a+b;
        a=next
    }
    return b;
}