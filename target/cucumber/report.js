$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/FizzBuzz.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 20,
      "value": "#@Author: Amine"
    },
    {
      "line": 21,
      "value": "#@tag"
    }
  ],
  "line": 22,
  "name": "FizzBuzz gameplay",
  "description": "",
  "id": "fizzbuzz-gameplay",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 24,
  "name": "Play FizzBuzz to get Fizz",
  "description": "",
  "id": "fizzbuzz-gameplay;play-fizzbuzz-to-get-fizz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Create a FizzBuzz gameplay",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I play with number 3",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The result is \"Fizz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FizzBuzzCucumber.createAFizzBuzzGamePlay()"
});
formatter.result({
  "duration": 262351600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "FizzBuzzCucumber.iPlayWithNumber(int)"
});
formatter.result({
  "duration": 2274300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fizz",
      "offset": 15
    }
  ],
  "location": "FizzBuzzCucumber.theResultIs(String)"
});
formatter.result({
  "duration": 3922900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Play FizzBuzz to get Buzz",
  "description": "",
  "id": "fizzbuzz-gameplay;play-fizzbuzz-to-get-buzz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Create a FizzBuzz gameplay",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I play with number 5",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "The result is \"Buzz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FizzBuzzCucumber.createAFizzBuzzGamePlay()"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "FizzBuzzCucumber.iPlayWithNumber(int)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Buzz",
      "offset": 15
    }
  ],
  "location": "FizzBuzzCucumber.theResultIs(String)"
});
formatter.result({
  "duration": 77900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Play FizzBuzz to get FizzBuzz",
  "description": "",
  "id": "fizzbuzz-gameplay;play-fizzbuzz-to-get-fizzbuzz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Create a FizzBuzz gameplay",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I play with number 15",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "The result is \"FizzBuzz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FizzBuzzCucumber.createAFizzBuzzGamePlay()"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 19
    }
  ],
  "location": "FizzBuzzCucumber.iPlayWithNumber(int)"
});
formatter.result({
  "duration": 109900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FizzBuzz",
      "offset": 15
    }
  ],
  "location": "FizzBuzzCucumber.theResultIs(String)"
});
formatter.result({
  "duration": 150900,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Play FizzBuzz to get NoBuzz",
  "description": "",
  "id": "fizzbuzz-gameplay;play-fizzbuzz-to-get-nobuzz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "Create a FizzBuzz gameplay",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "I play with number 4",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "The result is \"NoFizzBuzz\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FizzBuzzCucumber.createAFizzBuzzGamePlay()"
});
formatter.result({
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 19
    }
  ],
  "location": "FizzBuzzCucumber.iPlayWithNumber(int)"
});
formatter.result({
  "duration": 144800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NoFizzBuzz",
      "offset": 15
    }
  ],
  "location": "FizzBuzzCucumber.theResultIs(String)"
});
formatter.result({
  "duration": 79800,
  "status": "passed"
});
});