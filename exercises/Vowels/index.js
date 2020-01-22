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



function vowels(str){
  var vowels=[a,e,i,o,u]
  var count=0;
  var stringArray=str.split('')
  stringArray.toLowerCase.forEach(letter=>{
    if (indexOf(letter) !==-1){
      count=+1
    }else{
      null
    }
  })
  return count
}




module.exports = vowels;



//how to do a table join with javascript//
const a1 = [{ id : 1, name : "test"}, { id : 2, name : "test2"}]
const a2 = [{ id : 1, count : "1"}, {id : 2, count : "2"}]

const merge = (arr1, arr2) => {
  const temp = []

  arr1.forEach(x => {
    arr2.forEach(y => {
      if (x.id === y.id) {
        temp.push({ ...x, ...y })
      }
    })
  })

  return temp
}

console.log(merge(a1, a2))


var newarray = [],
    thing;

for(var y = 0; y < rows.length; y++){
    thing = {};
    for(var i = 0; i < columns.length; i++){
        thing[columns[i]] = rows[y][i];
    }
    newarray.push(thing)
}
