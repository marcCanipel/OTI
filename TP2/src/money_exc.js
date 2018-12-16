function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.d1+" vs "+this.d2;
}

function SubValueNegException(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

SubValueNegException.prototype.toString=function (){
		return "Valeur négative : " + this.d1 + " vs " + this.d2;
}

function DeviseCaracSupException(_d1){
	this.d1 = _d1;
}

DeviseCaracSupException.prototype.toString=function (){
		return "Devise supérieure à 3 caractères : " + this.d1;
};

function ValueNegativeException(_v1){
	this.v1=_v1;
}

ValueNegativeException.prototype.toString=function (){
		return "Valeur inférieure à 0 : " + this.v1;
};
