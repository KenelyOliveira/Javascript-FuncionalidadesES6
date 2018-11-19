var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     NOTE: Babel is enabled, which translates much of the below to ES5 compatible code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     https://github.com/google/traceur-compiler
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     An alternative is 6to5: https://6to5.org/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Helpful docs for getting up to speed on ES6: https://6to5.org/docs/learn-es6/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */

// Convenience function for logging. Look funny? It won't by the end of this.
var _ = function _(msg) {return console.log(msg);};

/*
                                                     * let is the new var
                                                     */
var someVariable = 'some value';
_(someVariable); // some value

// Value is mutable
someVariable = 'another value';
_(someVariable); // another value

// This would cause an error, cannot redeclare in the same block/scope.
// let someVariable = 'yet another value';

// This is OK, as it's a different block/scope.
function something() {
  var someVariable = 'yet another value';
  // do stuff
}

/*
   * Constants
   * Cannot be changed once they are set.
   */
var a = 'Some string';
// The following line would generate an error. 'a' is read only.
// a = 'Another string';

/*
 * Template strings
 */
var firstName = 'Brad';
var lastName = 'Daily';

_('My name is ' + firstName + ' ' + lastName + '.'); // My name is Brad Daily.

// Can be multiline too
var multilineString = 'My name is ' + firstName + ' ' + lastName + '.\nReally nice to meet ya.';


_(multilineString); // My name is Brad Daily.\nReally nice to meet ya.

/*
 * 'Spread' operator
 * Creates an array from all passed arguments
 */
var spread = function spread() {for (var _len = arguments.length, x = Array(_len), _key = 0; _key < _len; _key++) {x[_key] = arguments[_key];}
  return x;
};

_(spread(1, 2, 3)); // [1, 2, 3]

/*
 * Fat arrow function syntax
 */

/* Old way
    
      var helloWorld = function() {
        return 'Hello world';
      }
    */

var helloWorld = function helloWorld() {return 'Hello world.';};

_(helloWorld()); // Hello world.

// Here's that spread function from earlier
var newSpread = function newSpread() {for (var _len2 = arguments.length, x = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {x[_key2] = arguments[_key2];}return x;};

_(newSpread(3, 4, 5)); // [3, 4, 5]

// Example using spread operator plus arrow functions.
// add()  will sum any numbers passed to it as arguments.
var add = function add() {for (var _len3 = arguments.length, x = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {x[_key3] = arguments[_key3];}return x.reduce(function (previous, current) {return previous + current;});};
_(add(1, 5, 10, 20)); // 36

// Array sort
_([1, 5, 8, 2, 3, 4].sort(function (a, b) {return a < b ? -1 : 1;})); // [1, 2, 3, 4, 5, 8]

// Arrow functions inherit the scope they are defined in.
// No more var self = this;
// See: this.owner in the sayFruits function
var pantry = {
  owner: 'Jim',
  fruits: ['apple', 'orange', 'pear'],
  sayFruits: function sayFruits() {var _this = this;
    this.fruits.forEach(function (fruit) {
      _(_this.owner + '\'s pantry has ' + fruit + 's');
    });
  } };


pantry.sayFruits();
// Jim's pantry has apples
// Jim's pantry has oranges
// Jim's pantry has pears

/*
 * Object literals
 */
var x = 50;
var y = 100;

/* Old way
             
               var coordinates = {
                 x: x,
                 y: y
               }
               
             */

var coordinates = {
  x: x, y: y };


_(coordinates); // Object { x: 50, y: 100}

/*
 * Destructuring
 */
var http = function http() {return [404, 'Not found'];};var _http =
http(),_http2 = _slicedToArray(_http, 2),status = _http2[0],textResponse = _http2[1];

_(status); // 404
_(textResponse); // Not found

/*
 * Classes
 */var
Person = function () {
  function Person(firstName, lastName, age) {_classCallCheck(this, Person);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Getters allow for dynamic properties
  // In this example, you can use .fullName instead of .fullName()
  // See the greeting() function below 
  _createClass(Person, [{ key: 'greeting', value: function greeting()



    {
      return 'Hi, my name is ' + this.fullName + ' and I am ' + this.age + ' years old.';
    } }, { key: 'isAdult', value: function isAdult()

    {
      return this.age >= 18;
    } }, { key: 'fullName', get: function get() {return this.firstName + ' ' + this.lastName;} }]);return Person;}();


var me = new Person('Brad', 'Daily', 35);
_(me.isAdult()); // true
_(me.greeting()); // Hi, my name is Brad Daily and I am 35 years old.
me.age = 36;
_(me.greeting()); // Hi, my name is Brad Daily and I am 36 years old.

// Class extension
var Pirate = function (_Person) {_inherits(Pirate, _Person);function Pirate() {_classCallCheck(this, Pirate);return _possibleConstructorReturn(this, (Pirate.__proto__ || Object.getPrototypeOf(Pirate)).apply(this, arguments));}_createClass(Pirate, [{ key: 'greeting', value: function greeting()
    {
      return 'Arggh, me name is ' + this.fullName + ' and I\'ve been sailing these here seas for ' + this.age + ' years.';
    } }]);return Pirate;}(Person);


var pirate = new Pirate('Brad', 'Daily', 35);
_(pirate.greeting()); // Arggh, me name is Brad Daily and I've been sailing these here seas for 35 years.

/*
 * Default parameters values
 */
function repeat() {var toldYa = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Nothin';
  return 'You told me ' + toldYa + '.';
}

_(repeat()); // You told me Nothin'.
_(repeat("Somethin'")); // You told me Somethin'.

// Arrow version
var repeat2 = function repeat2() {var toldYa = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Nothin'";return 'You told me ' + toldYa + '.';};

_(repeat2()); // You told me Nothin'.
_(repeat2("Somethin'")); // You told me Somethin'.

/*
 * Sets
 */
var letters = new Set();
letters.add('A');
_(letters.size); // 1

// Ignores duplicate values
letters.add('A');
_(letters.size); // 1

_(letters.has('A')); // true
_(letters.has('B')); // false

letters.add('B');var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

  for (var _iterator = letters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var letter = _step.value;_(letter);} // Outputs A, then B
} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
_(letters.delete('Z')); // returns false since Z is was not in letters before delete()
_(letters.delete('A')); // returns true since A is was in letters before delete()

letters.clear();
_(letters.size); // 0

/*
 * Maps
 */
var map = new Map();
map.set('string-key', 'I belong to the string-key');

// Keys can be anything, like a DOM element
map.set(document.getElementsByTagName('h1')[0], 'I belong to the first <h1> in the DOM.');

_(map.size); // 2

_(map.get(document.getElementsByTagName('h1')[0])); // I belong to the first <h1> in the DOM.
var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
  for (var _iterator2 = map.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _step2$value = _slicedToArray(_step2.value, 2),key = _step2$value[0],val = _step2$value[1];
    _(key); // Outputs 'string-key', then the <h1>
    _(val); // Outputs 'I belong to the string-key', then 'I belong to the first <h1> in the DOM.'
  }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2.return) {_iterator2.return();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}