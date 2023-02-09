const reverseString = function(s) {
    let input = s.toString();
    let output = "";

    for (let i = input.length - 1; i >= 0; i--)
    {
        output += input.charAt(i);
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
