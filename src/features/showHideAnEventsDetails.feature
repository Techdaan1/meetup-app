Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default
Given the user is on the home page
When An eventlist is displayed
Then the event element is collapsed by default

Scenario: User can expand an event to see its details
Given the user is on the main page and list of events has been loaded
When the user clicks on the show-details-button of an event
Then the event element will be expanded to show the event details

Scenario: User can collapse an event to hide its details
Given the user has expanded an event to see its details
When the user has clicked on hide-details-button
Then the event details will be hidden
