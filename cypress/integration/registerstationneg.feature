Feature: Register Station Negetive

    Scenario: Validate an attempt to register a weather station without an API key
        Given the user attempt to register a weather station without an API key
            | requestfile   | url       | apikey | alias                  |
            | samplerequest | /stations |        | registerStationFailure |
        Then response body should match error response body