
const leapYears = function(inputYear)
{
        if(inputYear % 4 == 0)
        {
            if (inputYear % 100 == 0 && inputYear % 400 != 0)
            {
                return false
            } else 
            {
                return true
            }
        } else
        {
            return false
        }
    }


// leapYears(1996)
// leapYears(1997)

// const leapYears = function() {

// }

module.exports = leapYears
