$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "line": 1,
  "name": "login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "with correct username and wrong password",
  "description": "",
  "id": "login-feature;with-correct-username-and-wrong-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I visit the-internet.herokuapp.com/login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter correct user in \"\u003cname\u003e\" filed and I enter wrong Password as \"\u003cpassword\u003e\" filed and i press on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the correct \"\u003curl\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-feature;with-correct-username-and-wrong-password;",
  "rows": [
    {
      "cells": [
        "name",
        "password",
        "url"
      ],
      "line": 12,
      "id": "login-feature;with-correct-username-and-wrong-password;;1"
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword!",
        "https://the-internet.herokuapp.com/secure"
      ],
      "line": 13,
      "id": "login-feature;with-correct-username-and-wrong-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "with correct username and wrong password",
  "description": "",
  "id": "login-feature;with-correct-username-and-wrong-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I visit the-internet.herokuapp.com/login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter correct user in \"tomsmith\" filed and I enter wrong Password as \"SuperSecretPassword!\" filed and i press on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the correct \"https://the-internet.herokuapp.com/secure\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.i_visit_the_internet_herokuapp_com_login()"
});
formatter.result({
  "duration": 11658534200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 25
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 72
    }
  ],
  "location": "MyStepDefinitions.i_enter_correct_user_in_filed_and_I_enter_wrong_Password_as_filed_and_i_press_on_login_button(String,String)"
});
formatter.result({
  "duration": 10789816200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://the-internet.herokuapp.com/secure",
      "offset": 26
    }
  ],
  "location": "MyStepDefinitions.i_should_see_the_correct(String)"
});
formatter.result({
  "duration": 42679500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ernet.herokuapp.com/[login]\u003e but was:\u003c...ernet.herokuapp.com/[secure]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat login.Helper.AssertCorrect(Helper.java:27)\r\n\tat login.MyStepDefinitions.i_should_see_the_correct(MyStepDefinitions.java:50)\r\n\tat ✽.Then I should see the correct \"https://the-internet.herokuapp.com/secure\"(src/test/resources/login.feature:7)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "with correct username and correct password",
  "description": "",
  "id": "login-feature;with-correct-username-and-correct-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I visit the-internet.herokuapp.com/login",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter correct user in \"\u003cname\u003e\" filed correct and I enter correct Password as \"\u003cpassword\u003e\" and i press on login button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see the not login \"\u003curlok\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-feature;with-correct-username-and-correct-password;",
  "rows": [
    {
      "cells": [
        "name",
        "password",
        "urlok"
      ],
      "line": 28,
      "id": "login-feature;with-correct-username-and-correct-password;;1"
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword",
        "https://the-internet.herokuapp.com/login"
      ],
      "line": 29,
      "id": "login-feature;with-correct-username-and-correct-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "with correct username and correct password",
  "description": "",
  "id": "login-feature;with-correct-username-and-correct-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I visit the-internet.herokuapp.com/login",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I enter correct user in \"tomsmith\" filed correct and I enter correct Password as \"SuperSecretPassword\" and i press on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see the not login \"https://the-internet.herokuapp.com/login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.i_visit_the_internet_herokuapp_com_login()"
});
formatter.result({
  "duration": 11389079400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 25
    },
    {
      "val": "SuperSecretPassword",
      "offset": 82
    }
  ],
  "location": "MyStepDefinitions.i_enter_correct_user_in_filed_correct_and_I_enter_correct_Password_as_and_i_press_on_login_button(String,String)"
});
formatter.result({
  "duration": 866700700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://the-internet.herokuapp.com/login",
      "offset": 28
    }
  ],
  "location": "MyStepDefinitions.i_should_see_the_not_login(String)"
});
formatter.result({
  "duration": 8979800,
  "status": "passed"
});
});