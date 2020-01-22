/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str) {
    var stringArray= str.split('');
    var newArray=[];
    stringArray.forEach(word=>{
        word=word.split('');
        word[0]=word[0].toUpperCase;
        word=word.join();
        newArray.push(word);
    })
    newArray= newArray.join();
    return newArray;
}

module.exports = capitalize;































function captialize(str){
    let stringArray= str.split('');
    let new Arry =[];
    stringArray.forEach(word => {
        word = word.split('');
        word[0]=word[0].toUpperCase();
        word= word.join('');
        newArray.push(word);
    })
    newArray=newArray.join('');
    return newArray;

}











let stringArray= str.split('');
    let newArray = []

    stringArray.forEach(word =>{
        word = word.split('');
        word[0]=word[0].toUpperCase();
        word = word.join('');
        newArray.push(word);
    })
    newArray= newArray.join(' ');
    return newArray;