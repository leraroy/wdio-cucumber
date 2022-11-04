Feature: Main Page

    Background:
        Given A user opens Magento website on the main page

        Scenario: Subscribe to the newsletter on the main page
        When Enter email and click subscribe
        Then The message should be given to user "Thank you for your subscription"

    Scenario Outline: Check correct icons on promo banners
        When Click on "<icon>" icon
        Then Page contains title "<title>"

        Examples:
            | icon        | title               |
            | Pants       | Pants               |
            | Tees        | Tees                |
            | Erin        | Erin Recommends     |
            | Performance | Performance Fabrics |
            | Eco         | Eco Friendly        |