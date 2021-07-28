Feature: login feature 
  
  Scenario Outline: with correct username and wrong password 
  
  Given I visit the-internet.herokuapp.com/login
  When I enter correct user in "<name>" filed and I enter wrong Password as "<password>" filed and i press on login button 
  Then I should see the correct "<url>"  
  
  Examples: 
   
   
   | name   | password           | url                                     |
   |tomsmith|SuperSecretPassword!|https://the-internet.herokuapp.com/secure|
   
   
  
  
  
  
   Scenario Outline: with correct username and correct password 
  
  Given I visit the-internet.herokuapp.com/login
  When I enter correct user in "<name>" filed correct and I enter correct Password as "<password>" and i press on login button  
  Then I should see the not login "<urlok>" 
  
   Examples:
  
   |name    |password           |urlok                                   |
   |tomsmith|SuperSecretPassword|https://the-internet.herokuapp.com/login|
