/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import ApiMethods from "../../pageobjects/apimethods/apimethods";

Cypress.config("baseUrl", "http://api.openweathermap.org/data/3.0");
var id;

Given(
  "the user attempt to register a weather station with a correct API key {string},{string},{string},{string}",
  (requestfile, url, apikey, alias) => {
    cy.fixture(requestfile).then((sresponse) => {
      ApiMethods.registerWeatherStation(sresponse, url, apikey, alias);
    });
  }
);
Then("response body should be saved in a {string} file", (responsefile) => {
  cy.get("@registerStationSuccess").then((response) => {
    cy.writeFile("cypress/fixtures/" + responsefile + ".json", response.body);
  });
});

Then("user should get the stationID from the {string}", (responsefile) => {
  cy.fixture(responsefile).then((response) => {
    id = response["ID"];
  });
});

Then(
  "response body should contain data from request body {string} and write response to {string}",
  (requestfile) => {
    cy.fixture(requestfile).then((sresponse) => {
      cy.get("@registerStationSuccess").should((response) => {
        expect(response.body).to.include(sresponse);
      });
    });
  }
);

And("verify that HTTP response code is 201", () => {
  cy.get("@registerStationSuccess").then((response) => {
    expect(response.status).to.eq(201);
  });
});
Then(
  "Verify that the stations are successfully and accurately stored in the DB using stationID using {string} and {string}",
  (requestfile, apikey) => {
    ApiMethods.getWeatherStation(id, apikey, "wsresponse");
    cy.fixture(requestfile).then((sresponse) => {
      cy.get("@wsresponse").then((response) => {
        expect(response.body).to.include.keys(sresponse);
        expect(response.body).to.include(sresponse);
      });
    });
  }
);
