#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

#@Author: Amine
#@tag
Feature: FizzBuzz gameplay

  Scenario: Play FizzBuzz to get Fizz
    Given Create a FizzBuzz gameplay
    When I play with number 3
    Then The result is "Fizz"
    
   Scenario: Play FizzBuzz to get Buzz
    Given Create a FizzBuzz gameplay
    When I play with number 5
    Then The result is "Buzz"
    
    Scenario: Play FizzBuzz to get FizzBuzz
    Given Create a FizzBuzz gameplay
    When I play with number 15
    Then The result is "FizzBuzz"
    
    Scenario: Play FizzBuzz to get NoBuzz
    Given Create a FizzBuzz gameplay
    When I play with number 4
    Then The result is "NoFizzBuzz"
