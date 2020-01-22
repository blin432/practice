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





function reversInt(int){
  var stringInt=int.split('');
  var newArr=[]
  for(var i =stringInt.length-1;i>=0;i--){
    newArr.push(stringInt[i])
  }
  return newArray.join('');
}





function reverse(int) {
    const arr = int.toString().split('').reverse().join('');
    return parseInt(arr) * Math.sign(int);
}


  
module.exports = reverse;
