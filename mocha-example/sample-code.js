"use strict";

/*
toy functions for sample-test.js in mocha
*/
var sample = {};

// IIFE
(function() {

sample.alpha = function alpha() {
	return 1;
}

sample.beta = function beta() {
  return Math.floor((Math.random() * 10) + 2);
}

sample.throwError = function throwError() {
  throw 500;
}

sample.returnExample = function(n) {
  if (n === 1) {
    return 1;
  } else {
    return "two";
  }
}

sample.giveArr = function(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = i + 1;
  }
  return arr;
}

})();

// make functions public (ie API)
if (typeof module === 'object' && module.exports) {
  module.exports = sample;
}
