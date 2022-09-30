
let score = 0;

const selectionBouton = document.querySelector("#send-button")

selectionBouton.addEventListener('click', answer);

function answer() {
    for (let i = 1; i <= 10; i++) { //boucle sur les 10 questions
        const selectQuestion = document.getElementsByName('answer' + i); //selectionne la question

        for (let y = 0; y <= 3; y++) { //boucle sur les 4 réponses

            if (selectQuestion[y].checked) { //compte les points que pour les réponses sélectionnées
                score = score + parseInt(selectQuestion[y].value);
            }
        };
    }
    return console.log(score);
}



//fonction qui vérifie si il y a une réponse à chaque question (elle se lance au click du bouton)
function checkSelection() {
    for (let i = 1; i <= 10; i++) { //boucle sur les 10 questions
        const selectQuestion = document.getElementsByName('answer' + i); //selectionne la question
        let checkValue = 0;

        for (let y = 0; y <= 3; y++) { //boucle sur les 4 réponses

            if (selectQuestion[y].checked) {
                checkValue++;//ajoute +1 à la variable checkValue si une réponse est cochée
            }
        };

        if (checkValue === 0) {
            let emoji = String.fromCodePoint(0x1F621)
            alert("Attention ! Tu n'as pas répondu à toutes les questions..." + emoji);
            break;
        }

    }

}



