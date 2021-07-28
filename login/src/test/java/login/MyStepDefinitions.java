package login;



import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefinitions {

	WebDriver driver;

	

	@Given("^I visit the-internet\\.herokuapp\\.com/login$")
	public void i_visit_the_internet_herokuapp_com_login() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");

		driver = new ChromeDriver();

		String url = "https://the-internet.herokuapp.com/login";

		driver.get(url);

		driver.manage().window().maximize();
		
		
		
	}

	@When("^I enter correct user in \"([^\"]*)\" filed and I enter wrong Password as \"([^\"]*)\" filed and i press on login button$")
	public void i_enter_correct_user_in_filed_and_I_enter_wrong_Password_as_filed_and_i_press_on_login_button(
			String arg1, String arg2) {
		Helper.i_visit_httptheinternetherokuappcomlogin(arg1, arg2, driver);
		try {
			Thread.sleep(10000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Then("^I should see the correct \"([^\"]*)\"$")
	public void i_should_see_the_correct(String arg1) {
		Helper.AssertCorrect(arg1, driver);


	}

	@When("^I enter correct user in \"([^\"]*)\" filed correct and I enter correct Password as \"([^\"]*)\" and i press on login button$")
	public void i_enter_correct_user_in_filed_correct_and_I_enter_correct_Password_as_and_i_press_on_login_button(
			String arg1, String arg2) {

		Helper.i_visit_httptheinternetherokuappcomlogin(arg1, arg2, driver);
		
	}

	@Then("^I should see the not login \"([^\"]*)\"$")
	public void i_should_see_the_not_login(String arg1) {

		Helper.AssertCorrect(arg1, driver);
	}

}