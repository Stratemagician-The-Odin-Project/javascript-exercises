const repeatString = function(s, n) {
    let output = "";
    
    if (typeof s === "string" && n >= 0)
    {
        for (let i = 0; i < n; i++)
        {
            output += s;
        }
        return output;
    }
    else
    {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
