/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */




function reverse(str){
    var stringArray=str.split('')
    var newArr=[]
    for (var i=stringArray.length-1;i>=0;i--){
        newArry.push(stringArray[i])
    }
    return newArry.join('');
}




function reverse(str) {
 return str.split('').reverse().join('');
}

module.exports = reverse;
