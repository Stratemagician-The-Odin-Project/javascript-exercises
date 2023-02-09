const convertToCelsius = function(temp) {

  if (typeof(temp) == "number")
  {
    return round((temp - 32) * 5 / 9, 1);
  }
  
  return "Error";
};

const convertToFahrenheit = function(temp) {

  if (typeof(temp) == "number")
  {
    return round((temp * 9 / 5) + 32, 1);
  }
  
  return "Error";
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
