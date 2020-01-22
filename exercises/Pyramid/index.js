/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */






 
function pyramid(n) {
    for (var i = 1; i<=n; i++){
        const arr=[];
        for (var j=0; j<=n-1; j++){
            arr.push(' ')
        }
        for (var j=0; j<(2*i)-1;j++){
            arr.push('#');
        }
        for (l=0; l<n-i;l++){
            arr.push(' ');
        }
        console.log(arr.join(''));
    }
}

module.exports = pyramid;
