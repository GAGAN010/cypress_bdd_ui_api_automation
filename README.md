# Automation UI and API testing framework with Cypress

Gagan Chikkegowda

This repo contains an example with the tests written in Cypress using Cucumber and POM

This was done on MacOS.

I have used Visual Studio code for coding purposes.

I have Github Desktop installed.

I have Node installed.

### Dependencies:

Node Modules.

cypress.

cypress-cucumber-preprocessor.

mochawesome-report-generator.

mochawesome.

mochawesome-merge.

### How to:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username/cypress_bdd_ui_api_automation.git

## cd into the cloned repo
cd cypress_bdd_ui_api_automation

## install the node_modules
npm install

## run below command to run the test headless
npm run test

## run below command to run the test using cypress test runner
npm run open-test-runner

## run below command to combine reports
npm run combine-reports

## run below command to generate reports
npm run generate-reports

## run below command to run the test headless, combine reports and generate reports
npm run test-report

```

## Additions/improvements:

Continuous Integration

Random Data Geneartion

## Reference:

(https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices)
