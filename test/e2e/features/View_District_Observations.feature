Feature: as logged user,
  I would like to select District institutions,
  so that I may view all schools observations within District.

  Scenario: Log In as QA User
    Given I am on ELEOT website
      And I enter my user name
      And I enter my password
    When I log in
    Then I should see Eleot Choose Institution
      And I click on District "Accomack County Public Schools"
    Then I should see school Observation