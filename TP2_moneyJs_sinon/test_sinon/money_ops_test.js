QUnit.module("moneyOps", {
	setup:function(assert){alert("setup moneyOps individual test");},
	teardown:function(assert){alert("teardown moneyOps individual test");}
});

QUnit.test("test simple add", function(assert)
{
	assert.expect(2);

	var m1=sinon.createStubInstance(money);
	var m2=sinon.createStubInstance(money);
	m1.getValue.returns(1);m1.getCurrency.returns("EUR");
	m2.getValue.returns(2);m2.getCurrency.returns("EUR");

	var m3=new money(3,"EUR");
	sinon.stub(m3,"getValue").returns(3);
	sinon.stub(m3,"getCurrency").returns("EUR");

	assert.ok(m3.equals(MoneyOps.add(m1,m2)),"3e = 1e+2e");
	assert.deepEqual(m3,MoneyOps.add(m1,m2),"3e = 1e+2e deepEqual");
}
);


QUnit.test("test multi devise add", function(assert)
{
	var m1EUR=new money(1,"EUR");
	sinon.stub(m1EUR,"getValue").returns(1);
	sinon.stub(m1EUR,"getCurrency").returns("EUR");

	var m2CHF=sinon.createStubInstance(money);
	m2CHF.getValue.returns(2);m2CHF.getCurrency.returns("CHF");

	assert.throws(	function() {var m3=MoneyOps.add(m1EUR,m2CHF)},
									DevisesIncompatibleExc,
									"Devises Incompatibles");
}
);


QUnit.test("test soustraction inferieure à 0", function(assert)
{
	var m1=new money(2,"EUR");
	sinon.stub(m1,"getValue").returns(2);
	sinon.stub(m1,"getCurrency").returns("EUR");

	var m2=new money(6,"EUR");
	sinon.stub(m2,"getValue").returns(6);
	sinon.stub(m2,"getCurrency").returns("EUR");
	assert.throws(function(assert) {var m3=MoneyOps.sub(m1, m2);}, SubValueNegException, "Valeur négative");
}
);


QUnit.test("test soustraction devise différente", function(assert)
{
	var m1=new money(8,"EUR");
	sinon.stub(m1,"getValue").returns(8);
	sinon.stub(m1,"getCurrency").returns("EUR");

	var m2=new money(4,"CHF");
	sinon.stub(m2,"getValue").returns(4);
	sinon.stub(m2,"getCurrency").returns("CHF");
	assert.throws(function(assert) {var m3=MoneyOps.sub(m1, m2);}, DevisesIncompatibleExc, "Devises Incompatibles");
}
);


QUnit.test("test simple sub", function(assert)
{
	var m1=new money(8,"EUR");
	sinon.stub(m1,"getValue").returns(8);
	sinon.stub(m1,"getCurrency").returns("EUR");

	var m2=new money(3,"EUR");
	sinon.stub(m2,"getValue").returns(3);
	sinon.stub(m2,"getCurrency").returns("EUR");

	var m3=new money(5,"EUR");
	sinon.stub(m3,"getValue").returns(5);
	sinon.stub(m3,"getCurrency").returns("EUR");

	assert.ok(m3.equals(MoneyOps.sub(m1,m2)),"5e = 8e-3e");
	assert.deepEqual(m3,MoneyOps.sub(m1,m2),"5e = 8e-3e deepEqual");
}
);
