const fs = require("fs");

class ApiMethods {
  static registerWeatherStation(req, url, apikey, rresponse) {
    cy.request({
      method: "POST",
      url: url,
      body: req,
      failOnStatusCode: false,
      headers: {
        "Content-Type": "application/json",
      },
      qs: {
        appid: apikey,
      },
    }).as(rresponse);
  }

  static getWeatherStation(id, apikey, rresponse) {
    cy.request({
      method: "GET",
      url: "/stations/" + id,
      failOnStatusCode: false,
      qs: {
        appid: apikey,
      },
    }).as(rresponse);
  }
}

export default ApiMethods;
