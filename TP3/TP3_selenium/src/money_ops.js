var MoneyOps=function (){
}

MoneyOps.add = function(m1,m2){
	if(m1.getCurrency() == m2.getCurrency()){
		return new money(m1.getValue()+m2.getValue(),m1.getCurrency());;
	} else {
		throw new DevisesIncompatibleExc(m1.getCurrency(),m2.getCurrency());
	}
}

MoneyOps.sub = function(m1,m2){
	if(m1.getCurrency() == m2.getCurrency()){
		if(m1.getValue() - m2.getValue() < 0){
			throw new ValueLessThan0(m1.getValue(),m2.getValue());
		}
		return new money(m1.getValue()-m2.getValue(),m1.getCurrency());
	} else {
		throw new DevisesIncompatibleExc(m1.getCurrency(),m2.getCurrency());
	}
}
