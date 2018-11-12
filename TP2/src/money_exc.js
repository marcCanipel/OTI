function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;

}

function ValueLessThan0(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;

}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.d1+" vs "+this.d2;
}

ValueLessThan0.prototype.toString=function (){
		return "Value negatif : "+this.d1+" vs "+this.d2;
}
