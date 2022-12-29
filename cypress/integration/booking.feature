# # This is a cucumber feature files that explain each senerios functionality on step definition file

Feature:  Redacre booking

    Feature user should be able to select best day on calendar with lower price
   Background: On booking module
        Given  I launch airmalta website

    Scenario: User should be able to book lowest price
        When I click on "One way travel"
        And I input departure and arrival locations
        And I insert a date
        And I click on "find flight"
        And I click on "flexible date"
        Then I should see the price of the first available flight