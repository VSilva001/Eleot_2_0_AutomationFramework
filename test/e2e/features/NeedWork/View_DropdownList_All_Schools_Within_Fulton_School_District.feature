Feature: Feature:  As a logged user,
  I would like to see drop down list all schools
  for Fulton Schools District.

  Scenario: Log In as QA User
    Given I am on ELEOT website
      And I enter my user name
      And I enter my password
    When I log in
    Then I should see Eleot Choose Institution
      And I click on Down Arrow for Fulton Schools-District
    Then I should see on dropdown list Fulton Alternative Education - school