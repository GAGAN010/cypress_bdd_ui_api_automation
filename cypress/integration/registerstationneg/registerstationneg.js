/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import ApiMethods from "../../pageobjects/apimethods/apimethods";
const fs = require("fs");
Cypress.config("baseUrl", "http://api.openweathermap.org/data/3.0");
Given(
  "the user attempt to register a weather station without an API key",
  (datatable) => {
    datatable.hashes().forEach((element) => {
      cy.fixture(element.requestfile).then((sresponse) => {
        ApiMethods.registerWeatherStation(
          sresponse,
          element.url,
          element.apikey,
          element.alias
        );
      });
    });
  }
);

Then("response body should match error response body", () => {
  cy.fixture("/invalidAPIkeyresponse").then((eresponse) => {
    cy.get("@registerStationFailure").should((response) => {
      expect(response.body).to.deep.equals(eresponse);
    });
  });
});
