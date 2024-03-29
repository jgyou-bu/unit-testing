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

To be written.


## Unit Testing Frameworks

A very comprehensive list of frameworks by language can be found [here] (https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks).


## Setting up Jasmine and Karma

[Jasmine] (http://jasmine.github.io/2.4/introduction.html) is a framework for testing Javascript. Jasmine can be installed as a standalone file - there are also packages for developing Jasmine projects for Python-, Ruby-, and Node.js - based web projects.

[Karma] (http://karma-runner.github.io/1.0/index.html) allows you to test code in multiple browsers. It launches an HTTP server and creates a test runner HTML file for a complementary testing framework (such as Jasmine or Mocha).

The following is the setup for Jasmine and Karma for a Node.js-based project.

#### Step 0

Create your project files and perform npm setup if not done already.

```
>> npm init
```

#### Step 1

Install Karma, Jasmine, and the Jasmine plugin:

```
>> npm install karma --save-dev
>> npm install jasmine-core --save-dev
>> npm install karma-jasmine --save-dev
```

Optional: To use karma in the command line directly, install `karma-cli` globally. This will allow you to run karma directly. Otherwise you will need to run karma each time using: `/node_modules/karma/bin/karma start`.

```
# can be long and unruly
>> /node_modules/karma/bin/karma start
# so install the cli
>> npm install -g karma-cli
# will run karma directly now
>> karma
```

#### Step 2
Set up karma. Note that if a file name is not passed in, karma will look for `karma.conf.js` by default.

```
>> karma init sample.conf.js
```

Create a configuration file for Karma


## Setting Up Mocha and Chai

[Mocha] (http://mochajs.org/) is described by its creators as "a simple, flexible, fun JavaScript test framework for node.js and the browser."

[Chai] (http://chaijs.com/) is an assertion library for node and the browser. It can be paired with other test frameworks besides Mocha.


### Sample Setup

What's shown below uses the BDD interface for mocha.

#### Step 0

Create your project files and perform npm setup if not done already.

```
>> npm init
```

#### Step 1

Install the packages, `mocha` and `chai`. Since we only use these packages during testing/development, we can save these as dev dependencies (definition [here] (http://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)). The `package.json` file will be updated to reflect this.

```
>> npm install mocha --save-dev
>> npm install chai --save-dev
```

#### Step 2

Create a directory called `test` - mocha will look for any `.js` and `.coffee` files under this directory.

```
>> mkdir test
>> cd test
```

#### Step 3

In the directory `test`, create a Mocha test in a `.js` file. Require chai, as well as the code file(s) you plan on testing:

```
var assert = require('chai').assert;
var mycode = require('../sample-code');

describe("Sample Test for Sample Code", function() {
    // where alpha is a function in sample-code.js
    describe("alpha() - equals example", function() {
        it("function a should return 1", function() {
            var myoutput = samplecode.alpha();
            assert.equal(myoutput, 1);
        });
    });
});
```

Note: `describe` and `it` are part of Mocha whereas `assert` is Chai-specific.

Structure the above so that individual test cases (or requirements) are under `it`.

#### Step 4
Change directory to the top level of your project. Run `mocha` in your terminal and see if your code passes the tests.
```
>> mocha
```

## Writing basic tests

Examples of Jasmine and Mocha are in accompanying directories.

### Jasmine

To be written.

### Mocha

The test file and sample code are `mocha-example/test/sample-test.js` and `sample-code.js` respectively. The [assert API] (http://chaijs.com/api/assert/) from Mocha is used for this example, but there are [expect and should] (http://chaijs.com/api/bdd/) styles available as well. Run Mocha from the `mocha-example` directory.


## Asynchronous code

To be written.

## Other things to mention
- including and excluding tests using `.skip()` and `.only` respectively [link] (http://mochajs.org/#exclusive-tests)
- hooks - beforeEach()/before()/after()/afterEach() (?) [link] (http://mochajs.org/#hooks)
- BDD vs TDD, including the different should/expect styles of chai [link] (http://chaijs.com/guide/styles/) (?)
- asynchronous calls - done()/promise (?) [link] (http://mochajs.org/#asynchronous-code)

## References
- [Test-driven development] (https://en.wikipedia.org/wiki/Test-driven_development)
- [Test Driven Development] (http://www.tutorialspoint.com/software_testing_dictionary/test_driven_development.htm)
