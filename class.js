// Création de la class servant pour la création de question

class Question{
    constructor(enonce, answer1,valueanswer1, answer2,valueanswer2, answer3,valueanswer3, answer4, valueanswer4){
    this.enonce= enonce;
    this.answer1= answer1;
    this.valueanswer1 = valueanswer1;
    this.answer2= answer2;
    this.valueanswer2 = valueanswer2;
    this.answer3= answer3;
    this.valueanswer3 = valueanswer3;
    this.answer4= answer4;
    this.valueanswer4 = valueanswer4;
    }
}

// Tableau des question
var Questions = [

new Question(
    "Vous participez à une soirée chez un ami mais ne connaissez que lui:",
    "Vous êtes Batman, tapis dans l'ombre, vous surveillez chaque mouvement et chaque bouteille!",
    1,
    "Vous remplacez le DJ! 'Bouge de là David, je vais mettre le feu!'",
    2,
    "Vous n'y allez tout simplement pas!",
    3,
    "Vous participez au conversation sans forcément toujours les initialiser, vous vous fondez dans la masse.",
    4 
),

new Question(
    "2", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "3", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "4", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "5", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "6", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "7", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "8", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "9", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
),

new Question(
    "10", 
    "France",
    1, 
    "Italie",
    2, 
    "Maroc",
    3, 
    "Belgique",
    4 
)
]


////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// Création de la class des profils

class Profil{
    constructor(titreProfil,textProfil){
        this.titreProfil = titreProfil;
        this.textProfil = textProfil;
    }
}

// Création du tableau des profils

let Profils = [
    new Profil(
        "Profil 1 ", 
        "Vous êtes profil 1, ce qui signifie, blabla"
        ),

    new Profil(
        "Profil 2 ", 
        "Vous êtes profil 2, ce qui signifie, blabla"
        ),

    new Profil(
        "Profil 3 ", 
        "Vous êtes profil 3, ce qui signifie, blabla"
        ),

    new Profil(
        "42 ", 
        "<p> Vous êtes 42, LA réponse à toutes question sur ce monde et cet univers.</p><p> Vous êtes un être d'exception, l'élu, the one.</p><p> Si l'on vous demande de choisir entre deux pillules, n'en prennez aucune, on est pas dans un film c'est sûrement de la drogue!</p>"
        ),

    new Profil(
        "Point de non retour", 
        "<p> Dans la vie certains choix sont irrémédiable. </p> <p> Je ne crois pas qu'il y ai de bonne ou de mauvaise situation, mais aucun retour n'est possible </p>"
        )
]