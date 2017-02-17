function Weather() {

}

Weather.prototype.condition = function() {
  possibleConditions = ["sunny", "sunny", "stormy", "sunny"]
  var weatherConditions = possibleConditions[Math.floor(Math.random() * possibleConditions.length)];
  return weatherConditions
};
