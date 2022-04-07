@testing
Feature: Test the Search Vivono feature

  Scenario: As a user I am able to search and validate functionality
    Given I successfully browse to the application
    Then I should see the title of the page is 'Vivino - Buy the Right Wine'
    And Get all the list with search keyword "wine"
    And I click on first Item
    Then Validate item detail
    Then Validate detail with another wine 
