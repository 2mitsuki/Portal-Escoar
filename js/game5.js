function redirectToMainPanel(score) {
    window.location.href = "game.html?score=" + score;
}

var userScore = 0;
var questions = [
    { question: "em portugol qual função permite ler a valor de um input ?", answer: "leia" },
    { question: "em C qual é o nome da função (ou condição ) que permite criar um menu de opções ?", answer: "switchcase" },
    { question: "desafio de JS, diz qual será a saida dessa string console var = [{helder}, {marlene}, {marta}] | print(f'1') ?", answer: "marlene" }
   
];

var currentQuestionIndex = 0;

function checkAnswer() {
    var answer = document.getElementById("answer-input").value;

    
    if (answer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        userScore += 10; 
        document.getElementById("user-score").textContent = userScore; 
        alert("Resposta correta! Você ganhou 10 pontos!");

        
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            document.getElementById("question").textContent = questions[currentQuestionIndex].question;
            document.getElementById("answer-input").value = "";
        } else {
            alert("Parabéns! Você respondeu todas as perguntas.");
            redirectToMainPanel(userScore); 
        }
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
}
