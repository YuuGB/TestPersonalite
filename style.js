let menuOuvert = 0;
let accueil = document.getElementById("textAcceuil");
let quizz = document.getElementById("Question");
let retour = document.getElementById("back");
let back0 = document.getElementById("back0");
let about = document.getElementById("aboutUs")

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 0,
    speed: 400,
    glare : true,
    "max-glare" : 1,
    reverse: true,
    scale: 1.1
});



let musics = document.getElementById("menu");
let menuOpened = false;

function clickMenu() {
    let bar1 = document.getElementById("bar--1");
    bar1.classList.toggle("active1");

    let bar2 = document.getElementById("bar--2");
    bar2.classList.toggle("active2");

    let menu = document.getElementById("menu");
    menu.classList.toggle("hidden");

    if (menuOpened == true){
        musics.classList.add("hidden");
        menuOpened = false;
    } else{
        menuOpened = true;
    }
}

function startQuizz(){
    

    accueil.style.opacity = "0%" ;
    accueil.style.zIndex = "0";

    quizz.style.opacity = "100%";
    quizz.style.zIndex = "1";

    about.style.opacity = "0%";
    about.style.zIndex = "0";

    retour.style.bottom = "50px";
    back0.style.bottom = "50px";


}

function startAboutUs(){
    accueil.style.opacity = "0%" ;
    accueil.style.zIndex = "0";

    quizz.style.opacity = "0%";
    quizz.style.zIndex = "0";

    about.style.opacity = "100%";
    about.style.zIndex = "1"

}

function startAccueil(){
    accueil.style.opacity = "100%" ;
    accueil.style.zIndex = "1";

    quizz.style.opacity = "0%";
    quizz.style.zIndex = "0";

    about.style.opacity = "0%";
    about.style.zIndex = "0"

}