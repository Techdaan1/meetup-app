Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default
Given this user is on the main page
When the user recieves a list of upcoming events
Then the event element is collapsed by default

Scenario: User can expand an event to see its details
Given the user is on the main page and has a list of the events
When the user clicks on the Show details button of an event element
Then the user can expand the event to see its details

Scenario: User can collapse an event to hide its details
Given the user has expanded to see the event's details
When the user clicks on the Hide details button of the event element
Then the event's details will be hidden
