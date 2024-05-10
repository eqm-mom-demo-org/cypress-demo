Feature: Add User
    As an admin
    I want to add a new user
    So that I can manage the user

    Scenario: Adding a New User Successfully
        Given Log in with valid credentials
        And Navigate to the user addition page
        And Set the user role as "Admin"
        And Set the status to "Enabled"
        And Enter an employee name "john" and select any name from the search results
        And Generate a random username
        And Enter the password and confirm password
        And Click on the Save button
        Then Should see a success message confirming the user was added successfully

