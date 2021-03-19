
// Détermine la question en cours
let nombreDeQuestion = 0;
let questionEnCours = Questions[nombreDeQuestion];

// Détermine le profil final
let finalProfil = 0;
let profilFinal = Profils[finalProfil];


// Récupération des éléments

let profil = document.getElementById("Reponses");
let ennonce1 = document.getElementById("ennonce");
let reponse1 = document.getElementById("answer1");
let reponse2 = document.getElementById("answer2");
let reponse3 = document.getElementById("answer3");
let reponse4 = document.getElementById("answer4");
let section1 = document.getElementById("section1");

// Affiche la première question

function start(value){

    if (value == 1){
        startAccueil();
        clickMenu();
    } else if (value == 2) {
        startQuizz();
        depart();
        clickMenu();
    } else if (value == 3) {
        startAboutUs();
        clickMenu();
    }
};

function depart(){        
    questionEnCours = Questions[nombreDeQuestion];
    ennonce1.innerText = questionEnCours.enonce;
    section1.value= questionEnCours.valueanswer1;
    section2.value= questionEnCours.valueanswer2;
    section3.value= questionEnCours.valueanswer3;
    section4.value= questionEnCours.valueanswer4;

    reponse1.innerText= questionEnCours.answer1;
    reponse2.innerText= questionEnCours.answer2;
    reponse3.innerText= questionEnCours.answer3;
    reponse4.innerText= questionEnCours.answer4;
};

function retour0(){ 
    console.log("ok");
    nombreDeQuestion = 0;
    resultat = 0;
    console.log(nombreDeQuestion);    
    questionEnCours = Questions[nombreDeQuestion];
    console.log(questionEnCours);
    ennonce1.innerText = questionEnCours.enonce;
    section1.value= questionEnCours.valueanswer1;
    section2.value= questionEnCours.valueanswer2;
    section3.value= questionEnCours.valueanswer3;
    section4.value= questionEnCours.valueanswer4;

    reponse1.innerText= questionEnCours.answer1;
    reponse2.innerText= questionEnCours.answer2;
    reponse3.innerText= questionEnCours.answer3;
    reponse4.innerText= questionEnCours.answer4;
};



// Calcul du résultat du questionnaire

let resultat = 0;
function calculResult(value){
    resultat += value;
};
// Changement de profil

function profilChange(){
    finalProfil = Math.floor(resultat/10)-1;
    profilFinal = Profils[finalProfil];
    ennonce1.innerText = profilFinal.titreProfil;
    reponse1.innerHTML= profilFinal.textProfil;
    
}

// Passe d'une question à une autre

function next(){
    if (nombreDeQuestion <9){
        nombreDeQuestion++;
        depart();
        console.log(resultat);
    } else {        
        profilChange();
    }
}

// Bouton retour
function back(){
    resultat = 50;
    profilChange(); 
    let buttonBack = document.getElementById("back");
    let divQuestion = document.getElementById("Question");
    divQuestion.removeChild(buttonBack);
}



















