
        document.addEventListener("DOMContentLoaded", function() {
            var idadeDiv = document.getElementById("idade");
            var tipoSelect = document.getElementById("tipo");
            var classeDiv = document.getElementById("classe");

            tipoSelect.addEventListener("change", function() {
                if (this.value === "aluno") {
                    idadeDiv.style.display = "block";
                    classeDiv.style.display = "block";
                } else {
                    idadeDiv.style.display = "none";
                    classeDiv.style.display = "none";
                }
            });

            var cadastrarBtn = document.getElementById("cadastrarBtn");
            cadastrarBtn.addEventListener("click", function() {
                var nome = document.getElementById("nome").value;
                var email = document.getElementById("email").value;
                var tipo = tipoSelect.value;
                var classe = document.getElementById("classeInput").value;
                var idade = document.getElementById("idadeInput").value;
                var senha = document.getElementById("senha").value;

                if (nome && email && senha && (tipo === "professor" || (tipo === "aluno" && classe && idade))) {
                    var usuario = {
                        nome: nome,
                        email: email,
                        tipo: tipo,
                        classe: classe,
                        idade: idade,
                        senha: senha
                    };
                    if (tipo === "aluno") {
                        localStorage.setItem('usuario', JSON.stringify(usuario));
                        alert("Cadastro realizado com sucesso!");
                        window.location.href = "login-aluno.html";
                    } else if (tipo === "professor") {
                        localStorage.setItem('professor', JSON.stringify(usuario));
                        alert("Cadastro realizado com sucesso!");
                        window.location.href = "login-prof.html";
                    }
                } else {
                    alert("Preencha todos os campos obrigatórios.");
                }
            });

            var outroBtn = document.getElementById("outroBtn");
            outroBtn.addEventListener("click", function() {
                
                window.location.href = "login-aluno.html";
            });
        });
    
