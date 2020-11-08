const reporter = require("cucumber-html-reporter");

const options = {
  theme: "foundation",
  jsonDir: "cypress/cucumber-json",
  output: "cypress/report/html_simple/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Platform: "Mac OS",
    Parallel: "Scenarios",
    Executed: "Local",
  },
};

reporter.generate(options);
