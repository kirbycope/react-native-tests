Feature: Home feature
    In order to use the Home page
    As an end-user
    I want to view the Home page

    Scenario Outline: Open Home page
        Given I am an end-user on <device>
        When I open the <pageName> page
        Then I should see <element>

        Examples:
            | device  | pageName | element        |
            | chrome  | home     | imgLogo        |
            | android | home     | textGetStarted |
