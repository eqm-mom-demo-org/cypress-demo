Feature: Login Feature
  As a admin
  I want to login to the application
  So that I can access the dashboard

  Scenario: Successful login
    Given Log in with valid credentials
    Then Should be redirected to the dashboard
