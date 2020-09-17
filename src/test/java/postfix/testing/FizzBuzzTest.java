package postfix.testing;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 
@CucumberOptions(format = {"pretty", "html:target/cucumber"}, features = "src/main/resources/FizzBuzz.feature",
monochrome = true)
public class FizzBuzzTest {
// https://www.youtube.com/watch?v=Wc3UDbYO_b4&t=425s

}
