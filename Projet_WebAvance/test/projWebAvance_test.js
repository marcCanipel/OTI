QUnit.module("projWebAvance", {
	//setup:function(assert){alert("setup projetjs individual QUnit.test");},
	//teardown:function(assert){alert("teardown projetjs individual QUnit.test");}
});

QUnit.test("test nombre random different zero",function(assert)
{
	assert.expect(1);
	var randomNumber = true;
	for(var i = 0; i <= 99; i++){
		if(!(1 <= nombreAuHasard(3) <= 3)){
			randomNumber = false;
		}
	}
	assert.equal(randomNumber, true);
}
);

QUnit.test("test nombre random value zero",function(assert)
{
	assert.expect(2);
	assert.equal(nombreAuHasard(0), 0);
	assert.deepEqual(nombreAuHasard(0), 0);
}
);

QUnit.test("test creation tableau",function(assert)
{
	assert.expect(7);
	var myTab = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 10,
	        nbLignes: 5,
	        styleCellule : {
	            width : "30px",
	            height : "15px",
	            border : "solid 1px #000"
	        },
	        styleTable : {
	            border : "solid 1px #000"
	        }
	    }
	);
	assert.equal(myTab.conteneurHTML, document.body);
	assert.equal(myTab.nbColonnes, 10);
	assert.equal(myTab.nbLignes, 5);
	assert.equal(myTab.styleCellule.width, "30px");
	assert.equal(myTab.styleCellule.height, "15px");
	assert.equal(myTab.styleCellule.border, "solid 1px #000");
	assert.equal(myTab.styleTable.border, "solid 1px #000");
}
);

QUnit.test("test erreur type parametre invalide conteneurHTML",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var myTab = new Tableau(
		    {
		        conteneurHTML: "document.body",
		        nbColonnes: 10,
		        nbLignes: 5,
		        styleCellule : {
		            width : "30px",
		            height : "15px",
		            border : "solid 1px #000"
		        },
		        styleTable : {
		            border : "solid 1px #000"
		        }
		    }
		);
	}, ParametreInvalideExc, "Erreur du champ");
}
);

QUnit.test("test erreur type parametre invalide nbColonnes",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var myTab = new Tableau(
		    {
		        conteneurHTML: document.body,
		        nbColonnes: "azerty",
		        nbLignes: 5,
		        styleCellule : {
		            width : "30px",
		            height : "15px",
		            border : "solid 1px #000"
		        },
		        styleTable : {
		            border : "solid 1px #000"
		        }
		    }
		);
	}, ParametreInvalideExc, "Erreur du champ");
}
);

QUnit.test("test erreur type parametre invalide nbLignes",function(assert)
{
	assert.throws(function(assert) {
		var myTab = new Tableau(
		    {
		        conteneurHTML: document.body,
		        nbColonnes: 10,
		        nbLignes: "cinq",
		        styleCellule : {
		            width : "30px",
		            height : "15px",
		            border : "solid 1px #000"
		        },
		        styleTable : {
		            border : "solid 1px #000"
		        }
		    }
		);
	}, ParametreInvalideExc, "Erreur du champ");
}
);

QUnit.test("test erreur styleCellule invalide",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var myTab = new Tableau(
		    {
		        conteneurHTML: document.body,
		        nbColonnes: 10,
		        nbLignes: 5,
		        styleCellule : "yes",
		        styleTable : {
		            border : "solid 1px #000"
		        }
		    }
		);
	}, ParametreInvalideExc, "Erreur du champ");

}
);

QUnit.test("test erreur styleTable invalide",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var myTab = new Tableau(
		    {
		        conteneurHTML: document.body,
		        nbColonnes: 10,
		        nbLignes: 5,
		        styleCellule : {
		            width : "30px",
		            height : "15px",
		            border : "solid 1px #000"
		        },
		        styleTable : "solid 1px #000"
		    }
		);
	}, ParametreInvalideExc, "Erreur du champ");

}
);

QUnit.test("test erreur styleTable boolean invalide",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var myTab = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 10,
	        nbLignes: 5,
	        styleCellule : {
	            width : "30px",
	            height : "15px",
	            border : "solid 1px #000"
	        },
	        styleTable : true
	    }
		);
	}, ParametreInvalideExc, "Erreur du champ");

}
);
