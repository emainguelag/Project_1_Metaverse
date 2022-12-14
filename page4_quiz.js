
const selectionBouton = document.querySelector("#send-button");
const spanScore = document.getElementById("quiz-score-nbr");
const pSentence = document.getElementById("score-sentence");
const divZoneScore = document.getElementById("quiz-result");
const bodyPage = document.getElementById("quiz-body");

//////////// (Fonction qui appelles toutes les fonctions au click du bouton)///////////////

selectionBouton.addEventListener('click', checkAndComplete);

function checkAndComplete() {
    checkSelection(); //vérifie si toutes les questions ont une réponse
    if (checkAnswers === true) {
        scoreZoneIsOn(); //affiche la zone de score
        ScrollTopPage();
        scoreAndSentenceInHTML(); //affiche les points et la phrase d'encouragement 
        colorAnswer(); //met en couleur les réponses
        score = 0; // remise à 0 du compteur 
    }
}


////////////fonction qui vérifie si il y a une réponse à chaque question////////////
let checkAnswers = "";
let countCheckValue = 0;

function checkSelection() {
    for (let i = 1; i <= 10; i++) { //boucle sur les 10 questions
        const selectQuestion = document.getElementsByName('answer' + i); //selectionne les réponses de la question i
        let checkValue = 0;
        for (let y = 0; y <= 3; y++) { //boucle sur les 4 réponses

            if (selectQuestion[y].checked) {
                checkValue++;//ajoute +1 à la variable checkValue si une réponse est cochée
                countCheckValue = countCheckValue + 1;//crée un compteur pour vérifier si réponse à chaque question
            }
            if (countCheckValue === 10) { // si totalité réponses cochées, renvoi true
                checkAnswers = true;
                return checkAnswers;
            }
        };

        if (checkValue === 0) {
            let emoji = String.fromCodePoint(0x1f605)
            alert("Attention ! Tu n'as pas répondu à toutes les questions..." + emoji);
            countCheckValue = 0; //remet le compteur à 0
            checkAnswers = false;
            return checkAnswers;
        }
    }
}


/////////////Fonction écrit les points  + phrase encouragement dans la zone score/////////////


function scoreAndSentenceInHTML() {
    spanScore.innerHTML = countScore() + "/10";
    if (score <= 5) return pSentence.innerHTML = "Oula il va falloir que tu t'informes un peu plus sur le sujet :)";
    if (score > 5 && score <= 7) return pSentence.innerHTML = "Pas mal... mais reste un peu sur notre site pour en savoir plus :)";
    if (score > 7) return pSentence.innerHTML = "Bravo ! tu es un expert ! Reviens sur notre site de temps en temps pour rester informé :)";
}




/////////////////// fonction comptage du score /////////////////////////

let score = 0;

function countScore() {
    for (let i = 1; i <= 10; i++) { //boucle sur les 10 questions
        const selectQuestion = document.getElementsByName('answer' + i); //selectionne les réponses de la question i

        for (let y = 0; y <= 3; y++) { //boucle sur les 4 réponses

            if (selectQuestion[y].checked) { //compte les points que pour les réponses sélectionnées
                score = score + parseInt(selectQuestion[y].value);
            }
        };
    }
    return score;
}


////////////////fonction mise en couleur des réponses//////////////

function colorAnswer() {
    for (let i = 1; i <= 10; i++) { //boucle sur les 10 questions
        const selectQuestion = document.getElementsByName('answer' + i); //selectionne les réponses de la question i

        for (let y = 0; y <= 3; y++) { //boucle sur les 4 réponses

            if (parseInt(selectQuestion[y].value) === 1) { //compte les points que pour les réponses sélectionnées
                selectQuestion[y].parentNode.style.color = 'green';
                selectQuestion[y].parentNode.style.fontWeight = 'bold';
            } else {
                selectQuestion[y].parentNode.style.color = 'red';
            }
        };
    }
}


////////////fonction affiche la zone de score///////////////

function scoreZoneIsOn() {
    divZoneScore.style.display = 'block';
}


////////////fonction qui remonte en haut de la page///////////////

function ScrollTopPage() {
    window.scrollTo(0, 0);
}