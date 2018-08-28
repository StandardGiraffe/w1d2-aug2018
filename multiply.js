/*# w1d2-aug2018
Finger math project

## Project Idea:
Implement an algorithm that will do the magic finger multiplication thingy.

## algorithm or steps
1.  input two numbers between 6 and 10
2.  group fingers in left hand to represent first number according to this method:
  1.  thumb = 6
  2.  index = 7
  3.  middle = 8
  4.  ring = 9
  5.  pinky = 10
3.  Do the same for the other number on the right hand.
4.  Join the grouped fingers together
5.  Count them
6.  Multiply them by 10  <--- RESULT 1
7.  Count floating fingers on left hand
8.  Multiply that number by the number of floating fingers on right hand
9.  Add that number to RESULT 1.
*/

function oneParam(which) {
  return process.argv.slice(2)[which];
}

var left = oneParam(0);
var right = oneParam(1);

function calcGrouped(n) {
  return n - 5;
}

// var leftGrouped = calcGrouped(left);
// var rightGrouped = calcGrouped(right);

var grouped = (calcGrouped(left) + calcGrouped(right)) * 10;

function calcFloating(n) {
  return 10 - n;
}

// var leftFloating = 10 - left;
// var rightFloating = 10 - right;

var ungrouped = calcFloating(left) * calcFloating(right);

console.log(left + " times " + right + " equals " + (grouped + ungrouped) + ".");


// console.log(leftGrouped, rightGrouped);