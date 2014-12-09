var exports = module.exports = {};

var Bob = function() {
  // this.hey = function()
};

Bob.prototype.hey = function(sentence) {
    if (sentence.toUpperCase() === sentence && sentence.match(/[a-z]/i))
      return "Woah, chill out!"
    else if (sentence.slice(-1) === "?")
      return "Sure."
    else if (sentence.trim() === "")
      return "Fine. Be that way!"
    else return "Whatever."
  };



bob = new Bob()
console.log(bob.hey(" "))




function Robot() {
  var facing = ""

  this.orient = function(direction) {

    if (this.direction_valid(direction))  {
      facing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  this.bearing = function() {
    return facing
  }
  this.direction_valid = function(direction) {
    directions = ['east', 'west', 'north', 'south' ];
    directions.indexOf(direction) > -1
  }
}



function Simulator() {}

exports.Robot = Robot;
exports.Simulator = Simulator;

var api = require('./simulator');
var Robot = api.Robot;
var Simulator = api.Simulator;


describe("Robot", function() {
  var robot = new Robot();

  it("robot bearing", function() {
    var directions = [ 'east', 'west', 'north', 'south' ];

    for (var i = 0; i < directions.length; i++) {
      var currentDirection = directions[i];
      robot.orient(currentDirection)
      expect(robot.bearing()).toEqual(currentDirection);
    };
  });
