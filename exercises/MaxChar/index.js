/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */



function getMax(str){
  strArray=str.split('');
  max=0;
  maxChar=''
  strArray.toLowerCase.forEach(char=>{
    if(strArray.split(char).length>max){
      max=char
      maxChar=strArray.length(char).length;
    }
  })
}




module.exports = maxChar;



