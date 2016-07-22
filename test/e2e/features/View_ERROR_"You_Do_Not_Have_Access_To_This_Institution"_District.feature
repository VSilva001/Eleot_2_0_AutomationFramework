Feature:  As a logged user,
  I would like to select an institution,
  so that I may view its observations,
  but user does not have access to Alma Public Schools-District.
  As a result, user gets Error message "You do not have access to this Institution"


  Scenario: Log In as QA User
    Given I am on ELEOT website
      And I enter my user name
      And I enter my password
    When I log in
    Then I should see Eleot Choose Institution
      And I click on District "Michigan Department of Education (MDE)"
    #since the user does not have access to District will throw Error.
    Then I should see ERROR: You do not have access to this Institution
