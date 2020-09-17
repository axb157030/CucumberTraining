package postfix.testing;

import org.junit.gen5.api.Assertions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import postfix.FizzBuzz;


public class FizzBuzzCucumber {
	
	private FizzBuzz fizzBuzz;
	private String result;

	@Given("Create a FizzBuzz gameplay")
	public void createAFizzBuzzGamePlay() throws Throwable {
		fizzBuzz = new FizzBuzz();
	}
	
	@When("I play with number (\\d+)$")
	public void iPlayWithNumber(int num) throws Throwable {
		result = fizzBuzz.play(num);
	}
	
	
	@Then("The result is \"([^\"]*)\"$")
	public void theResultIs(String resultString) throws Throwable {
		Assertions.assertEquals(result, resultString );
	}
	


}
