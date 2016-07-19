"use strict";
var assert = require('chai').assert;
var samplecode = require('../sample-code');

describe("Sample Test for Sample Code", function() {
    // where alpha is a function in sample-code.js
	describe("alpha() - equal example", function() {
		it("function should return 1", function() {
			var alphaoutput = samplecode.alpha();
			assert.equal(alphaoutput, 1);
		});
	});

  describe("beta() - some inequality examples", function() {
    var betaoutput = samplecode.beta();
    it("function will return number greater than 1", function() {
      assert.isAbove(betaoutput, 1);
    });

    it("function will return number less than 11", function() {
      assert.isBelow(betaoutput, 11);
    });
  });

  describe("throwError() - example of testing for error", function() {
    it("function throws error 500", function() {
      // pass in function, error message
      assert.throws(samplecode.throwError, 500);
    });
  });

  describe("returnExample() - example of isNumber, isString, etc.", function() {
    // we get back a number from the sample code
    it("can return a number", function() {
      assert.isNumber(samplecode.returnExample(1))
    });
    // we get back strings from the sample code
    it("can return a non-number", function() {
      assert.isNotNumber(samplecode.returnExample(2));
    })
    it("can return a string", function() {
      assert.isString(samplecode.returnExample(2));
    });
  })

  describe("giveArr() - example of checking for length of output", function() {
    it("number passed in represents length of array", function() {
      assert.lengthOf(samplecode.giveArr(5), 5);
    });
  });

  describe("TBD", function() {
    it("shows output for function that hasn't been written");
  });

});


