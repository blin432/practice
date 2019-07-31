/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int) {
    const arr = int.toString().split('').reverse().join('');
    return parseInt(arr) * Math.sign(int);
}


// 4
const reverse = (str) => {
    const arr = str.split('');
    let newArray = [];
  
    for (let index = arr.length - 1; index >= 0; index--) {
      newArray.push(arr[index]);
    };
  
    return newArray.join('');
  };

  
module.exports = reverse;
