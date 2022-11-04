Feature: Login Page

      Background:
            Given A user opens Magento website on the login page

      Scenario: Login with valid credentials
            When Login with email: "kate.smith@gmail.com" and password: "Qwerty!23456"
            Then Page contain title "My Account"

      Scenario: Click on Create Account button
            When Click on create button
            Then Page contain title "Create New Customer Account"

      Scenario Outline: Login with invalid credentials

            When Login with "<email>" and "<password>"
            Then See a message saying "<message>"

            Examples:
                  | email                | password     | message                                                                    |
                  | kelfmlmty@uaua.kv    | qwerty123    | The account sign-in was incorrect or your account is disabled temporarily. |
                  | kate.smith@gmail.com | hdbhb        | The account sign-in was incorrect or your account is disabled temporarily. |
                  | sdmlml@uaua.kv       | Qwerty!23456 | The account sign-in was incorrect or your account is disabled temporarily. |
