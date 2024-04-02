Feature: Specify Number of Events
  Scenario: When user hasn't specified a number, 32 events are shown by default.
    Given user hasn't specified a number
    When the main page is open
    Then 32 events are shown by default
  
  Scenario: User can change the number of events displayed.
    Given the main page is open
    When the user specifies a number of events
    Then the app displays as many events as the user has specified