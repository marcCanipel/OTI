import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.ExpectedCondition.*;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import static org.junit.Assert.*;

import org.junit.*;

public class WebDriverMoneyJsTest {
    WebDriver driver;
    @Before
    public void createDriver() {
    	System.setProperty("webdriver.chrome.driver", "/home/marc/Documents/Master2/OTI/TP3/TP3_selenium/SeleniumWebDriver/SeleniumWebDriverJUnitTests/chromedriver");
    	driver = new ChromeDriver();
    }

    @After
    public void freeDriver() {
       driver.quit();
    }


    @Test
    public void test_add_valid() throws java.io.IOException{
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("10");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("12");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        element = driver.findElement(By.cssSelector("input[type=\"button\"]"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>(){
            public Boolean apply(WebDriver d) {
                return d.findElement(By.id("res")).getText().trim().length()>0;
            }
        });

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_add_ok.jpg"));

        assertEquals(driver.findElement(By.id("res")).getText(),"Result : 22 (EUR)");
        new File("/tmp/screenshot_add_ok.jpg").delete();

    }

    @Test
    public void test_add_not_same_devise() throws java.io.IOException{
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("6");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("18");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("CHF");

        element = driver.findElement(By.cssSelector("input[type=\"button\"]"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>(){
            public Boolean apply(WebDriver d) {
                return d.findElement(By.id("res")).getText().trim().length()>0;
            }
        });

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_not_same_devise.jpg"));

        assertEquals(driver.findElement(By.id("res")).getText(),"Devises incompatibles : EUR vs CHF");
        new File("/tmp/screenshot_not_same_devise.jpg").delete();

    }

    @Test
    public void test_sub_valid() throws java.io.IOException{
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("6");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("4");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        new Select(driver.findElement(By.name("ops"))).selectByVisibleText("-");
        driver.findElement(By.name("ops")).click();

        element = driver.findElement(By.cssSelector("input[type=\"button\"]"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>(){
            public Boolean apply(WebDriver d) {
                return d.findElement(By.id("res")).getText().trim().length()>0;
            }
        });

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_sub_ok.jpg"));

        assertEquals(driver.findElement(By.id("res")).getText(),"Result : 2 (EUR)");
        new File("/tmp/screenshot_sub_ok.jpg").delete();
    }

    @Test
    public void test_sub_not_same_devise() throws java.io.IOException{
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("10");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("CHF");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("6");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        new Select(driver.findElement(By.name("ops"))).selectByVisibleText("-");
        driver.findElement(By.name("ops")).click();

        element = driver.findElement(By.cssSelector("input[type=\"button\"]"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>(){
            public Boolean apply(WebDriver d) {
                return d.findElement(By.id("res")).getText().trim().length()>0;
            }
        });

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_sub_not_same_devise.jpg"));

        assertEquals(driver.findElement(By.id("res")).getText(),"Devises incompatibles : CHF vs EUR");
        new File("/tmp/screenshot_sub_not_same_devise.jpg").delete();
    }

    @Test
    public void test_sub_err_value_neg() throws java.io.IOException{
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("6");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");

        element = driver.findElement(By.name("v2"));
        element.sendKeys("8");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        new Select(driver.findElement(By.name("ops"))).selectByVisibleText("-");
        driver.findElement(By.name("ops")).click();

        element = driver.findElement(By.cssSelector("input[type=\"button\"]"));
        element.click();

        // Wait for the page to load, timeout after 10 seconds, stop when results present
        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>(){
            public Boolean apply(WebDriver d) {
                return d.findElement(By.id("res")).getText().trim().length()>0;
            }
        });

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_sub_neg_value.jpg"));

        assertEquals(driver.findElement(By.id("res")).getText(),"Valeur négative : 6 vs 8");
        new File("/tmp/screenshot_sub_neg_value.jpg").delete();
    }

    @Test
    public void test_add_same_curr() throws java.io.IOException{
        driver.get("http://127.0.0.1:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("10");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");
	
        element = driver.findElement(By.name("v2"));
        element.sendKeys("22");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("EUR");

        element = driver.findElement(By.xpath("//input[@type='button']"));
        element.click();

        new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>(){
			public Boolean apply(WebDriver d) {
			   return d.findElement(By.id("res")).isDisplayed();
			}
        });

		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("/tmp/screenshot_add_same_curr.png"));

		// J'ai laissé l'erreur de suppression du nom de l'image pour bien vérifier que le screen
        // se trouve dans le tmp...
		assertEquals(driver.findElement(By.id("res")).getText(),"Result : 32 (EUR)");
		new File("/tmp/test_add_same_curr.png").delete();
    }
    
    @Test
    public void test_add_equiv_curr() throws java.io.IOException{
        driver.get("http://localhost:8080/src/index.html");

        WebElement element = driver.findElement(By.name("v1"));
        element.sendKeys("12");

        element = driver.findElement(By.name("c1"));
        element.sendKeys("EUR");
	
        element = driver.findElement(By.name("v2"));
        element.sendKeys("22");

        element = driver.findElement(By.name("c2"));
        element.sendKeys("eUR");

        element.submit();

        new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.id("res")));
       
        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/tmp/screenshot_add_equiv_curr.png"));

		assertNotEquals(driver.findElement(By.id("res")).getText(),"Result : 34 (EUR)");
		new File("/tmp/screenshot_add_equiv_curr.png").delete();
    }
    
}
