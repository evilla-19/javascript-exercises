// let myString = 'hello there!'
// let myString2 = myString.split('')
// let myString3 = myString2.reverse()
// let myString4 = myString3.join('')


const reverseString = function(inputString) {
    tmp1 = inputString.split('')
    tmp2 = tmp1.reverse()
    output = tmp2.join('')
    return output
}

module.exports = reverseString
