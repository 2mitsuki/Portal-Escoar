function redirectToMainPanel(score) {
            window.location.href = "game.html?score=" + score;
        }

        var userScore = 0;
        var questions = [
            { question: "nome comum para o modelo referencial ?", answer: "OSI" },
            { question: "primeira camada do modelo OSI ?", answer: "fisica" },
            { question: "em que camada está o protocolo HTTP ?", answer: "7" }
           
        ];

        var currentQuestionIndex = 0;

        function checkAnswer() {
            var answer = document.getElementById("answer-input").value;

            // Verifica se a resposta está correta
            if (answer.trim().toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
                userScore += 10; // Aumenta o score em 10 pontos se a resposta estiver correta
                document.getElementById("user-score").textContent = userScore; // Atualiza o score exibido
                alert("Resposta correta! Você ganhou 10 pontos!");

                // Passa para a próxima pergunta
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    document.getElementById("question").textContent = questions[currentQuestionIndex].question;
                    document.getElementById("answer-input").value = "";
                } else {
                    alert("Parabéns! Você respondeu todas as perguntas.");
                    redirectToMainPanel(userScore); // Redireciona de volta ao painel principal com o score atualizado
                }
            } else {
                alert("Resposta incorreta. Tente novamente!");
            }
        }
