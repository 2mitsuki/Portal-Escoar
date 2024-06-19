function redirectToMainPanel(score) {
    window.location.href = "game.html?score=" + score;
}

var userScore = 0;
var questions = [
    { question: " qual é a unidade internacional de massa ?", answer: "kg" },
    { question: " qual é a unidade da aceleração  ?", answer: "m/s²" },
    { question: " qual é a unidade da velocidade ?", answer: "m" }
   
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
