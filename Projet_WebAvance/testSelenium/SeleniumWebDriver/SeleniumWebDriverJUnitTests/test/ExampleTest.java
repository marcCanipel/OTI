import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.ExpectedCondition.*;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import static org.junit.Assert.*;

import org.junit.*;

public class ExampleTest {
    WebDriver driver;
    @Before
    public void createDriver() {
    	System.setProperty("webdriver.chrome.driver", "/home/marc/Documents/Master2/OTI/Projet_WebAvance/testSelenium/SeleniumWebDriver/SeleniumWebDriverJUnitTests/chromedriver");
    	driver = new ChromeDriver();
    }

    @After
    public void freeDriver() {
       driver.quit();
    }
    
    @Test
    public void test_clic_cell3() throws java.io.IOException{
        driver.get("http://127.0.0.1:8080/src/index.html");

        WebElement element = driver.findElement(By.className("cell3"));
        element.click();
        element.click();
        element.click();

		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("/tmp/screenshot_click_cell3.png"));
	
		assertEquals(element.getCssValue("background"),"rgb(170, 170, 170) none repeat scroll 0% 0% / auto padding-box border-box");
		new File("/tmp/screenshot_click_cell3.png").delete();
    }

    @Test
    public void test_clic_cell1() throws java.io.IOException{
        driver.get("http://127.0.0.1:8080/src/index.html");

        WebElement element = driver.findElement(By.className("cell1"));
        element.click();

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_click_cell1.png"));

        assertEquals(element.getText(),"2");
        new File("/tmp/screenshot_click_cell1.png").delete();
    }


}
