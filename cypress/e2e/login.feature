Feature: Login Feature

  Scenario: User can log in with valid credentials
    Given I open the login page
    When I enter valid username "Admin" and password "admin123"
    And I click the login button
    Then I should be redirected to the dashboard


 