


const sumAll = function(start, end)
{
    endSum = 0;
    if (start < 0 || end < 0 || typeof(start) != 'number' || typeof(end) != 'number')
    {
        return 'ERROR'
    }
    else
    {
        if (end < start)
        {
            for (i = end; i <= start; i++)
        {
            // console.log(i)
            endSum = endSum + i;
        }
        } else
        {
        
            for (i = start; i <= end; i++)
            {
                // console.log(i)
                endSum = endSum + i;
            }
        }
    }
    return endSum
}

// sumAll(10,30)


module.exports = sumAll
