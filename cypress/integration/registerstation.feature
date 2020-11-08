Feature: Register Station Positive

    Scenario Outline: Validate an attempt to register a weather station with a correct API key
        Given the user attempt to register a weather station with a correct API key "<requestfile>","<url>","<apikey>","<alias>"
        Then response body should contain data from request body "<requestfile>" and write response to "<responsefile>"
        And verify that HTTP response code is 201
        And response body should be saved in a "<responsefile>" file

        Examples:
            | requestfile    | url       | apikey                           | alias                  | responsefile   |
            | /samplerequest | /stations | 21af2e8cd45ce60ed8d5be73de452089 | registerStationSuccess | sampleresponse |




    Scenario Outline: Verify that the stations were successfully stored in the DB and values are the same as specified in the registration request.
        Given the user attempt to register a weather station with a correct API key "<requestfile>","<url>","<apikey>","<alias>"
        Then response body should contain data from request body "<requestfile>" and write response to "<responsefile>"
        And response body should be saved in a "<responsefile>" file
        Then user should get the stationID from the "<responsefile>"
        Then Verify that the stations are successfully and accurately stored in the DB using stationID using "<requestfile>" and "<apikey>"

        Examples:
            | requestfile     | url       | apikey                           | alias                  | responsefile    |
            | /samplerequest1 | /stations | 21af2e8cd45ce60ed8d5be73de452089 | registerStationSuccess | sampleresponse1 |



