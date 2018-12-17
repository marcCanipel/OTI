function nombreAuHasard(max) {
    if (max === 0){
        return 0;
    }
    return Math.floor((Math.random() * max) + 1)
}

function Tableau(parameters) {
    if(!(parameters.conteneurHTML instanceof HTMLElement)){
      throw new ParametreInvalideExc(parameters.conteneurHTML);
    } else {
      this.conteneurHTML = parameters.conteneurHTML;
    }

    if(isNaN(parameters.nbColonnes)){
      throw new ParametreInvalideExc(parameters.nbColonnes);
    } else {
      this.nbColonnes = parameters.nbColonnes;
    }

    if(isNaN(parameters.nbLignes)){
      throw new ParametreInvalideExc(parameters.nbLignes);
    } else {
      this.nbLignes = parameters.nbLignes;
    }

    if(!(parameters.styleTable instanceof Object)){
      throw new ParametreInvalideExc(parameters.styleTable);
    } else {
      this.styleTable = parameters.styleTable;
    }

    if(!(parameters.styleCellule instanceof Object)){
      throw new ParametreInvalideExc(parameters.styleCellule);
    } else {
      this.styleCellule = parameters.styleCellule;
    }

    this.construireLeTableau();

}

Tableau.prototype.construireLeTableau = function () {
    this.table = document.createElement("table");
    this.lignes = [];
    for (var indexLigne = 0; indexLigne < this.nbLignes; indexLigne++) {
        this.lignes[indexLigne] =
        {
            tr: document.createElement("tr"),
            cellules: []
        };
        this.table.appendChild(this.lignes[indexLigne].tr);
        for (var indexColonne = 0; indexColonne < this.nbColonnes; indexColonne++) {
            var choixCellule = nombreAuHasard(3);
            var cellule;

            if (choixCellule === 1)
                cellule = new CelluleAvecEntier(
                    {
                        style: this.styleCellule,
                        baliseMere: this.lignes[indexLigne].tr
                    }
                );

            if (choixCellule === 2)
                cellule = new CelluleAvecPrompt(
                    {
                        style: this.styleCellule,
                        baliseMere: this.lignes[indexLigne].tr
                    }
                );

            if (choixCellule === 3)
                cellule = new CelluleColoree(
                    {
                        style: this.styleCellule,
                        baliseMere: this.lignes[indexLigne].tr
                    }
                );

            this.lignes[indexLigne].cellules[indexColonne] = cellule;
        }
    }
    this.conteneurHTML.appendChild(this.table);
    for (var cle in this.styleTable)
        this.table.style[cle] = this.styleTable[cle];
};

Tableau.prototype.avoirCellule = function (x, y) {
    return this.lignes[y].cellules[x];
};

Tableau.prototype.fixerTexteCellule = function (x, y, texte) {
    this.lignes[y].cellules[x].fistChild.data = texte;
};

// ******************************
//
// CELLULE DE BASE
//
// ******************************

function Cellule(parameters) {
    if (!parameters)
      return;

    this.style = parameters.style;
    this.baliseMere = parameters.baliseMere;
    this.__defineGetter__("texte", function () {
        return this.baliseTexte.data;
    });
    this.__defineSetter__("texte", function (value) {
        this.baliseTexte.data = value;
    });
    this.construireLaCellule();

}

Cellule.prototype.construireLaCellule = function () {
    this.balise = document.createElement("td");
    this.baliseMere.appendChild(this.balise);
    this.baliseTexte = document.createTextNode(" ");
    this.balise.appendChild(this.baliseTexte);
    for (var cle in this.style)
        this.balise.style[cle] = this.style[cle];
    this.balise.addEventListener("click", this);
};

Cellule.prototype.handleEvent = function () {
  // Subclasses of Celulle have to implement a handleEvent function
};

// ******************************
//
// CELLULE AVEC ENTIER
//
// ******************************

function CelluleAvecEntier(parameters) {
    Cellule.call(this, parameters);
}

CelluleAvecEntier.prototype = new Cellule();

CelluleAvecEntier.prototype.construireLaCellule = function () {
    Cellule.prototype.construireLaCellule.call(this);
    this.texte = "1";
    this.balise.className = "cell1";
}

CelluleAvecEntier.prototype.handleEvent = function () {
    this.texte = "" + (parseInt(this.texte) + 1);
};

// ******************************
//
// CELLULE AVEC PROMPT
//
// ******************************

function CelluleAvecPrompt(parameters) {
    Cellule.call(this, parameters);
}

CelluleAvecPrompt.prototype = new Cellule();

CelluleAvecPrompt.prototype.construireLaCellule = function () {
    Cellule.prototype.construireLaCellule.call(this);
    this.balise.className = "cell2";
}

CelluleAvecPrompt.prototype.handleEvent = function () {
    var nouveauContenu = prompt("contenu de la cellule", this.texte);
    if (nouveauContenu)
        this.texte = nouveauContenu;
};

// ******************************
//
// CELLULE COLORÉE
//
// ******************************

function CelluleColoree(parameters) {
    Cellule.call(this, parameters);
    this.couleur=230;
}

CelluleColoree.prototype = new Cellule();

CelluleColoree.prototype.construireLaCellule = function () {
    Cellule.prototype.construireLaCellule.call(this);
    this.fixerCouleur();
    this.balise.className = "cell3";
}

CelluleColoree.prototype.handleEvent = function () {
    if (this.couleur>20) {
        this.couleur-=20;
        this.fixerCouleur();
    }
};

CelluleColoree.prototype.fixerCouleur = function () {
    this.balise.style.background="rgb("+this.couleur+","+this.couleur+","+this.couleur+")";
}

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
