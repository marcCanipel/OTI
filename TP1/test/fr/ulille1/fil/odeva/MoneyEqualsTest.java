package fr.ulille1.fil.odeva;

import org.junit.*;

import static org.junit.Assert.assertFalse;

public class MoneyEqualsTest {

    private Money f12EUR,  f14EUR;
    private MoneyFactory mf;

    @Before
    public void init() throws UnexistingCurrencyException
    {
        mf=MoneyFactory.getDefaultFactory();
        f12EUR=mf.createMoney(12, "EUR");
        f14EUR=mf.createMoney(14, "EUR");
    }

    @Test(expected = NullPointerException.class)
    public void TestMoneyVsMoneyNull() throws UnexistingCurrencyException{
        Money mymoney = mf.createMoney(26,"EUR");
        mymoney.equals(null);
    }

    @Test
    public void TestSameMoneySameDivise() throws UnexistingCurrencyException{
        Money m = mf.createMoney(12,"EUR");
        m.equals(f12EUR);
    }

    @Test
    public void TestSameMoneyNotSameDivise() throws UnexistingCurrencyException{
        Money m = mf.createMoney(12,"CHF");
        assertFalse(m.equals(f12EUR));
    }
}
