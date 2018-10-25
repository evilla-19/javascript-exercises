
const roundUp = function(inputValue)
{
  if (inputValue == 0)
  {
    inputValue = inputValue
  } else
  {
    inputValue = inputValue.toFixed(1)
  }
  return(Number(inputValue))
}

roundUp(37.78)

const ftoc = function(inputValue) {
  outputValue = (inputValue - 32) * (5/9)
  return roundUp(outputValue)
}

const ctof = function(inputValue) {
  outputValue = (inputValue * (9/5) + 32)
  return roundUp(outputValue)
}


ftoc(100)
// ctof(100)

module.exports = {
  ftoc,
  ctof
}
