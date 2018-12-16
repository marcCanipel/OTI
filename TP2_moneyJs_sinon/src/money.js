var money= (function(){
	function money(v,curr) {
		if(v < 0){
			throw new ValueNegativeException(v);
		}
		if(curr){
			if(curr.length > 3){
				throw new DeviseCaracSupException(curr);
			} else {
				curr = curr.toUpperCase();
			}
		}
		this.v=v;
		this.curr=curr;
	}

	money.prototype.getCurrency=function () {
		return this.curr;
	}
	money.prototype.getValue=function () {
		return this.v;
	}
	money.prototype.equals=function (otherM) {
		return (otherM.getValue()==this.getValue() && otherM.getCurrency().toUpperCase()==this.getCurrency().toUpperCase()) ;
	}
	money.prototype.toString=function toString() {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	}


return money;
})();
