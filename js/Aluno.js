 
        
        document.addEventListener("DOMContentLoaded", function() {
            var usernameField = document.getElementById("username");
            var usuarioArmazenado = JSON.parse(localStorage.getItem('usuario'));

            if (usuarioArmazenado) {
                var nomeDeUsuario = usuarioArmazenado.nome;
                usernameField.value = nomeDeUsuario;
            }
        });
    


    document.addEventListener("DOMContentLoaded", function() {
        var listaTarefas = document.getElementById("listaTarefas");
        var listaTarefasDisplay = document.getElementById("listaTarefasDisplay");

        
        listaTarefas.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); 
                adicionarTarefa(listaTarefas.value.trim()); 
                listaTarefas.value = ""; 
            }
        });

        
        function adicionarTarefa(tarefa) {
            if (tarefa !== "") {
                var listItem = document.createElement("li");
                listItem.textContent = tarefa;
                listaTarefasDisplay.appendChild(listItem);
            }
        }
    });


    document.addEventListener("DOMContentLoaded", function() {
    var horarioEscolarTable = document.getElementById("horarioEscolarTable");

    // Adiciona evento de clique para as células editáveis
    horarioEscolarTable.addEventListener("click", function(event) {
        var cell = event.target; // Célula clicada
        var row = cell.parentNode.rowIndex; // Índice da linha da célula
        var col = cell.cellIndex; // Índice da coluna da célula
        var day = horarioEscolarTable.rows[0].cells[col].textContent; // Dia da semana

        // Verifica se a célula clicada não é o cabeçalho e não está vazia
        if (row > 0 && cell.contentEditable === "true" && cell.textContent.trim() !== "") {
            // Aqui você pode armazenar o texto da célula em algum lugar, como localStorage ou enviar para o servidor
            console.log("Texto armazenado para " + day + " às " + cell.parentNode.cells[0].textContent + ": " + cell.textContent);
        }
    });
});



