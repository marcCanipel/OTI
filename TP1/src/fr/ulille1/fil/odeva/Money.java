package  fr.ulille1.fil.odeva;

import java.util.HashMap;
import java.util.Map;

public class Money {
	private int value;
	private String currency;
	

	Money(int value, String currency)
	{
		this.value=value;
		this.currency=currency;
	}

	public int getValue()
	{
		return this.value;
	}

	public String getCurrency()
	{
		return this.currency;
	}

    public String toString() {
     	return this.getValue()+" ("+this.getCurrency()+")";
    }

    public boolean equals(Object o){
		if(o == null){
			throw new NullPointerException();
		}
		if(this == o){
			return true;
		}
		Money f = (Money) o;
		if(this.getValue() == f.getValue() && this.getCurrency() != f.getCurrency()){
			return false;
		}
		return true;
	}

	public boolean equals_2(Object o){
		return getCurrency().equals(((Money) o).getCurrency());
	}

}
