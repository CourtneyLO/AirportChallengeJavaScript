function Weather() {
  this.POSSIBLECONDITIONS = ["sunny", "sunny", "stormy", "sunny"]
}

Weather.prototype.condition = function() {
  var weatherConditions = this.POSSIBLECONDITIONS[Math.floor(Math.random() * this.POSSIBLECONDITIONS.length)];
  return weatherConditions;
};
