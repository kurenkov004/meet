# MEET application
## App description
This is a serverless PWA built with React, using a test-driven development technique. The main purpose of the app is to display information about events happening in cities all over the US. It's an exercise to practice TDD workflow as well as learn several data visualization techniques. Important to note, this app uses the Google Calendar API to fetch upcoming events.

Serverless development will be done through AWS, using Lambda functions. These functions will help fascilitate Feature #4 - using the app while offline - by providing the user with the cached data. They will also communicate with the Google API in order to manage the authentication processes necessary to fetch event data from it. 

## Project Features & Scenarios
### Feature 1: Filter Events by City

__User Story: As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.__
  + *Scenario 1 - Given user hasn't searched for any city; When the user opens the app; Then the user should see a list of upcoming events.*
  + *Scenario 2 - Given the main page is open; When user starts typing in the city textbox; Then the user should receive a list of cities (suggestions) that match what they've typed.*
  + *Scenario 3 - Given user was typing "Berlin" in the city textbox AND the list of suggested cities is showing; When the user selects a city from the list; Then the city should be changed to that city AND the user should receive a list of upcoming events in that city.*

### Feature 2: Show/Hide Event Details

__User Story: As a user, I should be able to show/ hide event details. so that I can easily understand what event interests me.__
  + *Scenario 1 - Given events are being displayed; When no event is selected; Then the event elements are collapsed by default.*
  + *Scenario 2 - Given that events are being displayed but none are selected yet; When a user selects an event; Then the event element will expand wo show more details.*
  + *Scenario 3 - Given an event has been selected and expanded; When a user wants to see LESS information; Then the event element can be collapsed back to default display.*

### Feature 3: Specify Number of Events

__User Story: As a user, I should be able to specify the number of events being displayed so I can control how many events I see.__
  + *Scenario 1 - Given user hasn't specified a number of events; When user opens the app; Then 32 events are shown by default.*
  + *Scenario 2 - Given the app is opened; When a user chooses a number; Then that number of events is displayed.*

### Feature 4: Use the App When Offline

__User Story: As a user, I should be able to use the app offline, so that I'm not always relying on a steady internet connection for information about events.__
  + *Scenario 1 - Given the user opens the app; When there is no internet connection; Then cached data will be displayed.*
  + *Scenario 2 - Given the app is open with no internet connection; When the user changes a setting (city, number of events); Then an error will be shown.*

### Feature 5: Add an App Shortcut to the Home Screen

__User Story: As a user, I should be able to add a shortcut for this app to my device homescreen so that I can more easily access the app and find events.__
  + *Scenario 1 - Given the user wants quick access to the app; When they select the download/install option; Then they can install the Meet app as a shortcut on their device home screen.*

### Feature 6: Display Charts Visualizing Event Details

__User Story: As a user, I should be able to see charts visualizing event details so I can more easily understand and process the information being presented to me by the app.__
  + *Scenario 1 - Given the app is open; When events are displayed; Then show a chart with the number of upcoming events in each city.*


## Key dependencies:
- Jest and its testing library
- react
- react-dom 
- react-scripts
- web-vitals
- workbox

## API used:
- Google Calendar API




