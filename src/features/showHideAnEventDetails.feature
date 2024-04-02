Feature: Show and Hide Event Details
  Scenario: An event element is collapsed by default.
    Given the event list is displayed
    When no event is selected
    Then event details are hidden by default.
  
  Scenario: User can expand an event to see details.
    Given the event list is displayed
    When a user selects an event component
    Then event component is expanded to show details

  Scenario: User can collapse an event to hide details.
    Given an event component is selected and expanded to show details
    When a user clicks on "hide details" button
    Then the event component collapses and event details are hidden