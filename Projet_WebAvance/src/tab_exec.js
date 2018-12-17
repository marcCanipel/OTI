function ParametreInvalideExc(_p1) {
	this.p1=_p1;
}

ParametreInvalideExc.prototype.toString=function (){
		return "Erreur du champ : "+this.p1;
};
