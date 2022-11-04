Feature: Create Account Page

    Create New Customer Account

    Background:
        Given A user opens Magento website on the create account page

    Scenario: Create account with invalid password
        When Enter "First Name" is "<firstname>"
        And Enter "Last Name" is "<lastname>"
        And Enter "Email" is "<email>"
        And Enter "Password" is "<password>"
        And Enter "Confirm Password" is "<password>"
        And Click Create Account button
        Then The message should be given to user as "<message>"

        Examples:
            | firstname | lastname | email                   | password    | message                                                                                                                               |
            | Kate      | Smith    | kate.smith22@gmail.com  |             | This is a required field                                                                                                              |
            | John      | Smith    | john.smith22@gmail.com  | qwerty      | Minimum length of this field must be equal or greater than 8 symbols                                                                  |
            | James     | Brown    | james.brown22@gmail.com | qwertyqwert | Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Character |

    Scenario Outline: Create account with valid credentials
        When Enter "First Name" equals "<firstname>"
        And Enter "Last Name" equals "<lastname>"
        And Enter "Email" equals "<email>"
        And Enter "Password" equals "<password>"
        And Enter "Confirm Password" equals "<password>"
        And Click Create Account button
        Then The message should be given to user

        Examples:
            | firstname  | lastname   | email       | password       |
            | randomName | randomName | randomEmail | randomPassword |
