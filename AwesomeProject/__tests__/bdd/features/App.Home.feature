Feature: Home feature
    In order to use the Home page
    As an end-user
    I want to view the Home page

    Scenario Outline: Open Home page
        Given I am an end-user on <device>
        When I open the Home page
        Then I should see <element>

        Examples:
            | device  | element        |
            | chrome  | imgLogo        |
            | android | textGetStarted |
