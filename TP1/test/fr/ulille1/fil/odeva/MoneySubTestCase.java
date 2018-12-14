package fr.ulille1.fil.odeva;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class MoneySubTestCase {

    private Money f12EUR,  f14EUR;
    private MoneyFactory mf;

    @Before
    public void init() throws UnexistingCurrencyException
    {
        mf=MoneyFactory.getDefaultFactory();
        f12EUR=mf.createMoney(12, "EUR");
        f14EUR=mf.createMoney(14, "EUR");
    }

    /**
     * simpleSub
     */
    @Test
    public void simpleSub() throws UnexistingCurrencyException, IncompatibleSubException {
        Money expected = mf.createMoney(2, "EUR");
        Money result = MoneyOps.simpleSub(f14EUR,f12EUR);
        assertEquals(expected.getValue(),result.getValue());
    }

    @Test(expected = IncompatibleSubException.class)
    public void TestSubMoneyValueNegatif() throws UnexistingCurrencyException, IncompatibleSubException {
        MoneyOps.simpleSub(f12EUR,f14EUR);
    }

    @Test(expected = IncompatibleCurrencyException.class)
    public void TestSubMoneyNotSameDivise() throws UnexistingCurrencyException, IncompatibleSubException {
        Money expected = mf.createMoney(6, "CHF");
        MoneyOps.simpleSub(f12EUR,expected);
    }

}
