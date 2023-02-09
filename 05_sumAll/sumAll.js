const sumAll = function(num1, num2) {

    let result = 0;

    if (num1 > num2)
    {
        a = num2;
        b = num1;
    }
    else
    {
        a = num1;
        b = num2;
    }

    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0)
    {
        for (let i = a; i <= b; i++)
        {
            result += i;
        }
        return result;
    }

    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
