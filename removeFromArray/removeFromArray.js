
// let myArray = [1,2,3,4,4,5, 'casa']



const iterateAndPop = function(inputArray, indicesToRemove)
{
    indicesToRemove = indicesToRemove.sort()
    for(i = indicesToRemove.length -1; i >=0; i--)
    {
        indexToRemove = indicesToRemove[i]
        inputArray.splice(indexToRemove, 1)
    }
    return inputArray
}




const removeFromArray = function(inputArray)
{
    let passedArguments = arguments
    let indicesToRemove = [];
    
    if (passedArguments.length === 2)
    {
        toRemove = arguments[1]
        for (i = 0; i < inputArray.length; i++)
        {
            if (inputArray[i] === toRemove)
            {
                // console.log('position to remove :' + i)
                indicesToRemove.push(i)
            }
            
        }
    } else 
    {
        for(j = 1; j < passedArguments.length; j++)
        {
            toRemove = arguments[j]
            for (i = 0; i < inputArray.length; i++)
        {
            if (inputArray[i] === toRemove)
            {
                // console.log('position to remove :' + i)
                indicesToRemove.push(i)
            }
            
        }
        }
    }
    iterateAndPop(inputArray,indicesToRemove)
    return inputArray
    // return indicesToRemove
    // console.log(indicesToRemove)
}
 

// console.log('before : ' + myArray)
// removeFromArray(myArray, 4, 'casa')
// console.log('after : ' + myArray)





module.exports = removeFromArray
