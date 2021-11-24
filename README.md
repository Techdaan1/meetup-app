## Meetup-app 

I have build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Features, user stories and scenario’s

FEATURE 1: FILTER EVENTS BY CITY
As a user, I should be able to “filter events by city”, so that I can see the list of events that take place in that city

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. 
- Given: User hasn’t searched for any city
- When: The user opens the app 
- Then: The user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city. 
- Given: The main page is open
- When: User starts typing in the city textbox
- Then: The user should see a list of cities (suggestions) that match what they’ve typed

Sencario 3: User can select a city from the suggested list. 
- Given: The user was typing „Berlin“ in the city textbox and the list of suggested cities is showing 
- When: The user selects a city (e.g., „Berlin, Germany“) from the list 
- Then: Their city should be changed to that city (i.e., „Berlin, Germany“) and the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user, I should be able to toggle event details, so that I can read and hide the specifics of an event.

Scenario 1: An event element is collapsed by default

- Given: The user is on the home page
- When: An event is displayed
- Then: The user should be able to see event details

Scenario 2: User can expand an event to see its details

- Given: The list of events has been loaded 
- When: The user clicks on the ‘Show details’ button for event
- Then: The event element will be expanded to show the event details

Scenario 3: User can collapse an event to hide its details

- Given: The user has expanded an event
- When: The user has clicked on ‘Collapse’ button
- Then: The event details will be hidden
  	
FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I should be able to specify the number of events I want to see, so that I can decide myself how many I want to have displayed

Scenario 1: When user hasn’t specified a number, 32 is the default number

- Given: The user is on the home page
- When: The user does not specify the number of events they want to see
- Then: The default number of 32 will be 

Scenario 2: User can change the number of events they want to see

- Given: The user is on the home page
- When: The user has specified the number of events they want to see
- Then: That specified number will be shown
	
FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I should be able to use the app when I am offline, so that I can still view events even when I am not connected to the internet.

Scenario 1: Show cached data when there’s no internet connection

- Given: The user is offline
- When: The user wants to use the app
- Then: Previous viewed events should be visible because of cached data

Scenario 2: Show error when user changes the settings (city, time range)

- Given: The user is offline
- When: The user wants to change the settings
- Then: An error message will be displayed

FEATURE 5: DATA VISUALIZATION
As a user, I should be able to see a visualization of the events, so that I get a good idea of the events available per city. 

Scenario 1: Show a chart with the number of upcoming events in each city

- Given: The user is on the home page
- When: The user clicks on a city
- Then: The user should be able to see a chart with the number of upcoming events
