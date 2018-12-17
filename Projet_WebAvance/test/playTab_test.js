QUnit.module("playTab", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test clic case vide affiche prompt", function(assert)
{
  	    assert.expect(1);
        var fixture="";
        fixture+=("<table>");
        fixture+=("<tr id=\"marco\">");
        fixture+=("</tr>");
        fixture+=("</table>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c = new CelluleAvecPrompt({style : {width: "30px", height: "15px", border: "solid 1px #000"}, baliseMere: document.getElementById("marco")});
        c.handleEvent("click");
        assert.ok(window.alert);
}
);

QUnit.test("test clic case avec increment nombre entier", function(assert)
{
  	    assert.expect(3);
        var fixture="";
        fixture+=("<table>");
        fixture+=("<tr id=\"marco\">");
        fixture+=("</tr>");
        fixture+=("</table>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c = new CelluleAvecEntier({style : {width: "30px", height: "15px", border: "solid 1px #000"}, baliseMere: document.getElementById("marco")});
        c.handleEvent("click");
        assert.equal(c.texte,"2");

        c.handleEvent("click");
        assert.equal(c.texte,"3");

        c.handleEvent("click");
        assert.equal(c.texte,"4");
}
);

QUnit.test("test clic case vide devient coloree", function(assert)
{
  	    assert.expect(6);
        var fixture="";
        fixture+=("<table>");
        fixture+=("<tr id=\"marco\">");
        fixture+=("</tr>");
        fixture+=("</table>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c = new CelluleColoree({style : {width: "30px", height: "15px", border: "solid 1px #000"}, baliseMere: document.getElementById("marco")});
        c.handleEvent("click");
        assert.equal(c.couleur,210);

        c.handleEvent("click");
        assert.equal(c.couleur,190);

        c.handleEvent("click");
        assert.equal(c.couleur,170);

        c.handleEvent("click");
        assert.equal(c.couleur,150);

        c.handleEvent("click");
        assert.equal(c.couleur,130);

        c.handleEvent("click");
        assert.equal(c.couleur,110);
}
);
