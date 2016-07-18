Testing 101
=================

## An Intro

### Considerations on when to write tests

You can either write tests:
(a) Before you even start writing your code (test-driven development)
(b) After you've written an initial version of your code

The first option means you need to plan out your code ahead of time, since you need to create corresponding tests for each function/module. It also means that you may have to rewrite tests as you go if your code changes drastically. The advantage though is that you can test your code from the very start and build things up as you go.

The second option provides you with more flexibility in that you can develop your code for a while and explore different ideas before you create tests.

### Test-driven development (TDD)

TDD is a way of developing software in which you repeat the following steps:
- add a test
- run all the tests to see if the new test fails
- write code
- run tests and change code

### Private Functions and API



## Unit Testing Frameworks

A very comprehensive list of frameworks by language can be found [here] (https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks).


## Setting up Jasmine and Karma

To be written.

## Setting up Mocha and Chai

[Mocha] (http://mochajs.org/) is described by its creators as "a simple, flexible, fun JavaScript test framework for node.js and the browser."

[Chai] (http://chaijs.com/) is an assertion library for node and the browser. It can be paired with other test frameworks besides Mocha.


### Sample setup/test file

What's shown below uses the BDD interface for mocha.

#### Step 0

In the directory you're working in, perform `npm` setup if needed:

```
npm init
```

#### Step 1

Install the packages, `mocha` and `chai`. Since we only use these packages during testing/development, we can save these as dev dependencies (definition [here] (http://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)). The `package.json` file will be updated to reflect this.

```
npm install mocha --save-dev
npm install chai --save-dev
```

#### Step 2

Create a directory called `test` - mocha will look for any `.js` and `.coffee` files under this directory.

#### Step 3

Create a Mocha test in a `.js` file. Require chai, as well as the code file(s) you plan on testing:

```
var assert = require('chai').assert;
var mycode = require('../mycode');

describe("My Code", function() {
    // where alpha is a function in mycode.js
	describe("alpha()", function() {
		it("function a should return 1", function() {
			var myoutput = mycode.alpha();
			assert.equals(myoutput, 1);

		});
	});
});
```

Note: `describe` and `it` are part of Mocha whereas `assert` is Chai-specific.

Structure the above so that individual test cases (or requirements) are under `it`.

#### Step 4
Run `mocha` in your terminal and see if your code passes the tests.
```
>> mocha
```

## Writing basic tests

To be written.

## Asynchronous code

To be written.

## Other things to mention
- more of the functions from the assert style besides equal...  [link] (http://chaijs.com/api/assert/)
- including and excluding tests using `.skip()` and `.only` respectively [link] (http://mochajs.org/#exclusive-tests)
- hooks - beforeEach()/before()/after()/afterEach() (?) [link] (http://mochajs.org/#hooks)
- BDD vs TDD, including the different should/expect styles of chai [link] (http://chaijs.com/guide/styles/) (?)
- asynchronous calls - done()/promise (?) [link] (http://mochajs.org/#asynchronous-code)

## References
[Test-driven development] (https://en.wikipedia.org/wiki/Test-driven_development)
[Test Driven Development] (http://www.tutorialspoint.com/software_testing_dictionary/test_driven_development.htm)
