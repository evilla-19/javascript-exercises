

const repeatString = function(inputString, notimes) {
    if (notimes < 0) 
    {
        return 'ERROR'
    }
    let output = inputString.repeat(notimes)
    console.log(output)
    return output
}

// repeatString('hey', 5)

module.exports = repeatString

