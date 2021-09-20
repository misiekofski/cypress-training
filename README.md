# Cypress training
Tests are located in `cypress/integration` folder.
First two folders `0a-getting-started` and `0b-advanced-examples` are test suites created automatically by cypress.

Running scripts in `package.json`:
- `npm test` will run cypress in GUI mode
- `npm run cy:run` will run cypress in CLI mode
- `npm run cy:zero` will run only <code>todo.spec.js</code> in CLI mode
- `npm run cy:one` will run <code>todo.spec.js</code> and <code>actions.spec.js</code> in CLI mode

## Day 1, Module 0 - Getting Started
### Task 0a: Cypress in GUI mode
<ol>
<li>Read the code in <code>todo.spec.js</code>.</li>
<li>Run <code>npm test</code> script.</li>
<li>Play with GUI by resizing it or rerunning tests.</li>
<li>Break some tests in <code>todo.spec.js</code> file.</li>
<li>Open <strong>Selector Playground</strong> and select some of the elements.</li>
<li>Check <strong>Settings > Configuration</strong> tab.</li>
<li>Open <strong>DevTools > Console</strong> (<code>Ctrl + Shift + I</code>).</li>
<li>Stop the Cypress in GUI mode.</li>
</ol>

### Task 0b: Cypress in CLI mode
<ol>
<li>Read the code in <code>todo.spec.js</code>.</li>
<li>Run <code>npm run cy:zero</code> script.</li>
<li>Read the code in <code>actions.spec.js</code>.</li>
<li>Break some tests in <code>actions.spec.js</code> file.</li>
<li>Play with <code>xit</code> as well as <code>it.only</code> in spec files.</li>
<li>Add <code>cy.pause()</code> in the chosen test.</li>
<li>Break <code>beforeEach()</code> <strong>hook</strong> in <code>todo.spec.js</code> file.</li>
<li>Run <code>npm run cy:one</code> script.</li>
<li>Stop the Cypress in CLI mode (<code>Ctrl + C</code>).</li>
</ol>


## Day 1, Module 1 - Cypress in a nutshell
### Task 1: Hello Cypress World
<ol>
<li>Open <code>1-cypress-in-a-nutshell/hello.spec.js</code> file.</li>
<li>Write your 1<sup>st</sup> suite with the name <strong>Hello</strong>.</li>
<li>Write your 1<sup>st</sup> test with the name <strong>Cypress</strong>.</li>
<li>Write your 1<sup>st</sup> assertion using <strong>World</strong> string.</li>
<li>Open Cypress Test Runner in GUI mode using <code>npm test</code> script.</li>
<li>Run <code>1-cypress-in-a-nutshell/hello.spec.js</code> suite.</li>
<li>Break the assertion to make it <strong>fail</strong>.</li>
<li>Check the results in GUI mode.</li>
<li>Stop the Cypress in GUI mode.</li>
</ol>

### Task 2: Check multiple Assertions
<ol>
<li>Open <code>1-cypress-in-a-nutshell/assertions.spec.js</code> file.</li>
<li>Open Cypress Test Runner in GUI mode using <code>npm test</code> script.</li>
<li>Run <code>1-cypress-in-a-nutshell/assertions.spec.js</code> suite.</li>
<li>Uncomment lines in <code>1-cypress-in-a-nutshell/assertions.spec.js</code> file.</li>
<li>Fix the suite with adjusted assertions.</li>
<li>Check the results in GUI mode.</li>
<li>Stop the Cypress in GUI mode.</li>
</ol>

### Task 3: Assertions with DB
<ol>
<li>Open <code>1-cypress-in-a-nutshell/db-assertions.spec.js</code> file.</li>
<li>. . . .</li>
<li>Open Cypress Test Runner in GUI mode using <code>npm test</code> script.</li>
<li>Run <code>1-cypress-in-a-nutshell/db-assertions.spec.js</code> suite.</li>
<li>Break the assertion to make it <strong>fail</strong>.</li>
<li>Check the results in GUI mode.</li>
<li>Stop the Cypress in GUI mode.</li>
</ol>

### Task 4: Check re-tries
<ol>
<li>Open <code>1-cypress-in-a-nutshell/re-tries.spec.js</code> file.</li>
<li>Open Cypress Test Runner in GUI mode using <code>npm test</code> script.</li>
<li>Run <code>1-cypress-in-a-nutshell/re-tries.spec.js</code> suite.</li>
<li>Stop the Cypress in GUI mode.</li>
<li>Open Cypress in CLI mode using<br />
<code>npm run cy:run -- --spec ./cypress/integration/day1/1-cypress-in-a-nutshell/re-tries.spec.js</code> command.</li>
<li>Uncomment line in <code>1-cypress-in-a-nutshell/re-tries.spec.js</code> file.</li>
<li>Run <code>1-cypress-in-a-nutshell/re-tries.spec.js</code> suite in both CLI and GUI mode.</li>
<li>Compare the results from both runs in CLI as well as GUI mode.</li>
<li>Stop the Cypress in GUI mode.</li>
</ol>

### Task 5: Aliases with DB
<ol>
<li>Open <code>1-cypress-in-a-nutshell/db-aliases.spec.js</code> file.</li>
<li>Read the <strong>failing</strong> code in <code>db-aliases.spec.js</code> suite.</li>
<li>Open Cypress Test Runner in GUI mode using <code>npm test</code> script.</li>
<li>Run <code>1-cypress-in-a-nutshell/db-aliases.spec.js</code> suite.</li>
<li>Uncomment line in <code>beforeEach</code> hook of <code>1-cypress-in-a-nutshell/db-aliases.spec.js</code> file.</li>
<li>Comment line responsible for geting data in <code>1-cypress-in-a-nutshell/db-aliases.spec.js</code> suite.</li>
<li>Check the results in GUI mode.</li>
<li>Make sure that code is <strong>fixed</strong> in <code>db-aliases.spec.js</code> file.</li>
<li>Stop the Cypress in GUI mode.</li>
</ol>


## Day 1, Module 2 - Debugging


## Day 1, Module 3 - Spies, Stubs, Clocks


## Day 1, Module 4 - Code Coverage
### Task 1
<ol>
<li>Check <code>./src/calc.js</code> code.</li>
<li>Read <code>./cypress/integration/day1/4-code-coverage/calc.spec.js</code> code.</li>
<li>In 1<sup>st</sup> <code>cmd</code> open Cypress Test Runner in GUI mode using <code>npm test</code> script.</li>
<li>Run <code>4-code-coverage/calc.spec.js</code> unit tests.</li>
<li>Make sure all unit tests <strong>passed</strong>.</li>
<li>In 2<sup>nd</sup> <code>cmd</code> run <code>npx nyc report --reporter=text-summary</code> to get overview.</li>
<li>Open <code>./coverage/lcov-report/index.html</code> in the web browser.</li>
<li>Remove or comment one of the unit tests in <code>4-code-coverage/calc.spec.js</code> suite.</li>
<li>Repeat the checks.</li>
</ol>


## Day 2, Module 1 - Page Object Pattern


## Day 2, Module 2 - Interceptors


## Day 2, Module 3 - Static Code Analysis
### Task 1
<ol>
<li>Run <code>sonarqube</code> image in your Docker.</li>
<li>Open <code>http://localhost:9000/</code> in the web browser.</li>
<li>Log-in as an admin to the <strong>sonarqube dashboard</strong>.</li>
<li>In <code>sonar-project.properties</code> file define unique <code>sonar.projectKey</code> for chosen project, i.e.: <code>cypress-training</code>.</li>
<li>In <strong>sonarqube dashboard</strong> choose <strong>Create Project <> Manually</strong> option.</li>
<li>Choose preferable <strong>Project display name</strong>, i.e.: <code>cypress-training</code> (same as <code>sonar.projectKey</code>).
<li>Confirm by clicking <strong>[ Setup ]</strong> button.</li>
<li>Choose source of the project files as <strong>locally</strong>.</li>
<li>Generate a token, by typing i.e.: <strong>cypress</strong> and clicking <strong>generate</strong>.</li>
<li>Bear in mind this generated token is <strong>secret</strong> and unique.</li>
<li>Click continue in order to choose project and language specific command for <strong>sonarqube scanner</strong>.</li> 
<li>After selecting project and language specific option copy generated command to the clipboard.</li>
<li>In <code>cmd</code> go to the main folder of the chosen project, i.e.: <code>cypress-training</code> one.</li>
<li>Paste the command from the clipboard and press <strong>[ Enter ]</strong> key.</li>
<li>Make sure that static analysis is running and logging in your <code>cmd</code> window.</li>
<li>When static analysis is completed ( <strong>EXECUTION SUCCESS</strong> ) go to <strong>sonarqube dashboard</strong>.</li>
<li>Review the results of chosen project, i.e.: <code>http://localhost:9000/dashboard?id=cypress-training</code> in <strong>sonarqube dashboard</strong>.</li>
<li>Stop <code>sonarqube</code> image in your Docker and close all related windows.</li>
</ol>


## Day 2, Module 4 - Good Practices
