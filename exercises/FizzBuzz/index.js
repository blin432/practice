/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n) {
    for (var i = 1; i<=n; i++){
        if (i%3==0){
            console.log("fizz")
        }else if (i%5==0){
            console.log("buzz")
        }else if (i%5==0 && i%3==0){
            console.log("fizzbuzz")
        }
    }
}

module.exports = fizzBuzz;


function capitalize(string){
    let arr = str.split('');
    let newArr = []
    arr.forEach(function(word){
        word = word.split('');
        word[0] = word[0].toUpperCase();
        word = word.join('');
        console.log(word)
        newArr.push(word);
    })
    console.log(newArr)
    newArr = newa.join('');
    return newArr;
}