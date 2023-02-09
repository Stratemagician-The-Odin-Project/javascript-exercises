const removeFromArray = function(arr, ...theArgs) {

    var output = [];

    for (let i = 0; i < arr.length; i++)
    {
        let valid = false;

        for (let j = 0; j < theArgs.length; j++)
        {
            if (arr[i] === theArgs[j])
            {
                valid = true;
                break;
            }
        }

        if (valid == false)
        {
            output.push(arr[i]);
        }
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
