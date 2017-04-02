// 1 - Create properties and methods for the Cube constructor
/**
 * Represents a Cube seat
 * @constructor
 * @param {String} length - length of each side
 * @property {Function} volume - method that calculates the volume of the cube
**/
function Cube(length) {
  // 1a - create a length property that is equal to the provided argument, length
  this.length = length;
  // 1b - Create a volume method that returns the volume of the cube
  // The volume of a cube is the length to the third power
  // PRO TIP: Consider using Math.pow, a built-in JavaScript method to calculate this
  this.volume = function() {
    return Math.pow(this.length , 3);
  }; // end this.volume


} // end Cube

// 2 - Create properties and methods for the Rolling Chair constructor
/**
 * Represents a Rolling Chair seat
 * @constructor
 * @param {String} type - type of seat this is
 * @param {String} color - color of the seat fabric
**/
function RollingChair(type, color) {
  // 2a - Create a type property that is equal to the provided argument, type
  this.type = type;
  // 2b - Create a color property that is equal to the provided argument, color
  this.color = color;
} // end RollingChair

// 3 - Create properties and methods for the Room constructor
/**
 * Represents a classroom at Prime
 * @constructor
 * @param {Number} capacity - the room's capacity
 *  @property {Number} capacity - number of seats in this room
 *  @property {Array} rollingChairs - an array of rolling chair objects
 *  @property {Array} cubes - an array of cube objects
**/

function Room(capacity) {
  // 3a - Create a capacity property that is equal to the provided array's first index
  this.capacity = capacity[0];
  // 3b - Create a rollingChairs property that is equal to an empty array
  this.rollingChairs = [];
  // 3b - Create a cubes property that is equal to an empty array
  this.cubes = [];
} // end Room

// 4 - The following function should create a Room object from an array of room data
// and return the created room
function convertRooms(roomAsArray) {
  // 4a - Create a room object using value for the capacity
  var room = new Room(roomAsArray);
  // 4b - Create another loop that adds new rolling chair objects with type "rolling"
  // and the color provided in the array to the created room's rollingChairs array
  for (var i=0; i<roomAsArray[1]; i++) {
    var chair = new RollingChair( 'rolling', roomAsArray[3]);
    room.rollingChairs.push(chair);
  }
  // 4c - Create yet another loop that adds new cube objects with a length of 24 to
  // the created room's cubes array
  for (var j=0; j<roomAsArray[2]; j++) {
    var cube = new Cube(24);
    room.cubes.push(cube);
  }
  // 4d - return the room object
  return room;
} // end convertRooms

// For each inner array we have [capacity, rollingChairs, cubes, color of seats]
var roomsArray = [[20, 14, 12, 'red'], [24, 10, 40, 'blue'], [23, 18, 30, 'black'], [18, 13, 13, 'blue']];

// 5 - Convert each room array to a room object
// 5a - Loop through the roomsArray
// In the body of the loop, call the convertRooms function for each room array
// store all the converted rooms objects in convertedRoomsArray
function convertRoomsList(arrayOfRooms){
  var convertedRoomsArray = [];
  for (var i=0; i<arrayOfRooms.length; i++) {
    convertedRoomsArray.push(convertRooms(arrayOfRooms[i]));
  }
  //return convertedRoomsArray to make it available outside this function:
  return convertedRoomsArray;
}// end convertRoomsList

//Call convertRoomsList
var myRoom = convertRoomsList(roomsArray);
