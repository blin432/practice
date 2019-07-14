/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
string.toLowerCase().split('').forEach(item =>{
    if (vowels.indexOf(item) !==-1)
    {
        count +=1
    } else {
        null
    }

})
return count;
}

module.exports = vowels;
