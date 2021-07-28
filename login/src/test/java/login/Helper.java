package login;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Helper {

	static public void i_visit_httptheinternetherokuappcomlogin(String name, String password, WebDriver d) {

		d.findElement(By.xpath("//input[@id='username']")).sendKeys();

		d.findElement(By.xpath("//input[@id='password']")).sendKeys();

		d.findElement(By.xpath("//button[@type='submit']")).click();
		;

	}

	static public void AssertCorrect(String ExpectedResult, WebDriver d) {

		// String ActualResult =
		// d.findElement(By.xpath("//div[@id='flash']")).getText();

		String ActualResult = d.getCurrentUrl();

		Assert.assertEquals(ActualResult, ExpectedResult);

	}
}
