/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length. Ignore punctuation
* and assume sentence will not be empty.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
* longestWord("fun&!! time") === "time"
*/

function longestWord(sen) {
var array1 = sen.match(/\w[a-z]{0,}/gi);
var longest= array[0];
for (var i = 1; i <array1.length; i++){
    if (longest.legnth< array1[i].length){
        longest= array[i];
    }
}
return longest;
}

module.exports = longestWord;
/* */

function longestWord(sen){
    var array1=sen.math(/)
    var longest =array1[0];
    for (var i =1;i<array.length;i++){
        if (longest.length<array[i].length){
            longest = array[i]
        }
    }
}

function longestWord(sen){
    var array1= sen.match(alphapet);
    var longest = array[0];
    for (var i = 1; i < array1.length;i++){
        if (longest.length< array[i].length){
            longest= array[i];
        }
    }
    return logest
}


phoneCalls=[{start:1,end:2}];



function maxOverlapCalls(start, end){
    count=0;
    for (let i = 0; i<phoneCalls.length; i++){
        if (phoneCalls[i].start===phoneCalls[i+1].end){
            count+=1
        }
    }
    return count;

}