Feature:  As a logged user,
          I would like to select an institution,
          so that I may view its observations.


  Scenario: Log In as QA User
    Given I am on ELEOT website
      And I enter my user name
      And I enter my password
    When I log in
    Then I should see Eleot Choose Institution
      And I click on Down Arrow for "Accomack County Public Schools"
      And I click on "Arcadia High School"
    Then I should see school Observation



