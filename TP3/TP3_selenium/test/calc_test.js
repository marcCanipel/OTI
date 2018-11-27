QUnit.module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_computeresults", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 4 (EU)");
}
);


QUnit.test("test_computeresults_other", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 0 (EU)");
}
);

QUnit.test("test_displayResult", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.message="Result : 4 (EU)";
        c.displayResult(document.getElementById('res'));
        assert.equal(document.getElementById('res').innerHTML,"Result : 4 (EU)");
}
);


QUnit.test("test_computeresult_notSameDevise", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='3'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='CHF'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Devises incompatibles : EUR vs CHF");
}
);

QUnit.test("test_computeresults_negativeSub", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='3'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Value negatif : 2 vs 3");
}
);

QUnit.test("test_computeresults_negativeSub_DifferentDevise", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='3'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='1'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='CHF'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Devises incompatibles : EUR vs CHF");
}
);

QUnit.test("test_displayResult_error", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='3'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EYR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='1'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        c.displayResult(document.getElementById('res'));
        assert.equal(document.getElementById('res').innerHTML,"<span style=\"color:red\">Devises incompatibles : EYR vs EUR</span>");
}
);
