Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the user is on the home page
When the user does not specify the number of events they want to see
Then the default number of 32 will be 

Scenario: User can change the number of events they want to see
Given the user is on the home page
When the user has specified the number of events they want to see
Then that specified number will be shown