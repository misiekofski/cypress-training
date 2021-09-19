# Cypress training
Tests are located in `cypress/integration` folder.
First two folders `1-getting-started` and `2-advanced-examples` are test suites created automatically by cypress.

Running tests:
`npm test` will run cypress (we've added this custom command to `package.json`)

## Module 0a - Getting Started
Let's get familiar with first basic test. Read the code and run your first test `todo.spec.js`.

## Module 0b - Advanced Examples
More commands. Read the code and run your second test `actions.spec.js`

## Day 1, Module 1 - Cypress in a nutshell
Now the fun part. Cypress in a nutshell. We're going to write our own tests.

## Day 1, Module 2 - Debugging


## Day 1, Module 3 - Spies, Stubs, Clocks


## Day 1, Module 4 - Code Coverage
<ol>
<li>Check <code>./src/calc.js</code> code.</li>
<li>Check <code>./cypress/integration/day1/4-code-coverage/1-task/calc.spec.js</code> code.</li>
<li>Open Cypress Test Runner in GUI mode using <code>npm test</code> script.</li>
<li>Run <code>4-code-coverage/1-task/calc.spec.js</code> unit tests.</li>
<li>Make sure all unit tests <strong>passed</strong>.</li>
<li>Run <code>npx nyc report --reporter=text-summary</code> to get overview.</li>
<li>Open <code>./coverage/lcov-report/index.html</code> in the web browser.</li>
<li>Remove one of the unit tests.</li>
<li>Repeate the checks.</li>
</ol>


## Day 2, Module 1 - Page Object Pattern


## Day 2, Module 2 - Interceptors


## Day 2, Module 3 - Static Code Analysis


## Day 2, Module 4 - Good Practices
