document.addEventListener("DOMContentLoaded", function () {
    // Lista de palavras
    var palavras = ["javascript", "html", "css", "forca", "programacao"];

    // Seleciona uma palavra aleatória
    var palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];

    // Inicializa a lista de letras corretas e incorretas
    var letrasCorretas = [];
    var letrasIncorretas = [];

    // Inicializa o número de erros
    var erros = 0;

    // Função para atualizar a interface gráfica
    function atualizarInterface() {
        // Atualiza a palavra com traços
        var palavraAtualizada = "";
        for (var i = 0; i < palavraEscolhida.length; i++) {
            if (letrasCorretas.includes(palavraEscolhida[i])) {
                palavraAtualizada += palavraEscolhida[i];
            } else {
                palavraAtualizada += "_";
            }
            palavraAtualizada += " ";
        }
        document.querySelector("#palavra span").textContent = palavraAtualizada;

        // Desabilita os botões já clicados e muda de cor
        var botoes = document.querySelectorAll("#teclado button");
        for (var i = 0; i < botoes.length; i++) {
            var letra = botoes[i].textContent.toLowerCase();
            if (letrasCorretas.includes(letra) || letrasIncorretas.includes(letra)) {
                botoes[i].disabled = true;
                if (letrasCorretas.includes(letra)) {
                    botoes[i].classList.add("correta");
                    botoes[i].classList.remove("errada"); // Remover a classe errada, se existir
                } else {
                    botoes[i].classList.add("errada");
                    botoes[i].classList.remove("correta"); // Remover a classe correta, se existir
                }
            } else {
                botoes[i].disabled = false;
                botoes[i].classList.remove("correta", "errada");
            }
        }

        // Atualiza a imagem da forca
        document.querySelector("#imagens img").src = "/Imagens/forca" + erros + ".png";

        if (!palavraAtualizada.includes("_")) {
            alert("Parabéns! Você venceu! A palavra era: " + palavraEscolhida);
            reiniciarJogo();
        }

        // Verifica se o jogador perdeu
        if (erros === 6) {
            alert("Você perdeu. A palavra era: " + palavraEscolhida);
            reiniciarJogo();
        }
    }

    // Função para lidar com o clique em um botão
    function letraClicada(letra) {
        letra = letra.toLowerCase(); // Convertendo para minúsculas para comparar corretamente com a palavra
        if (palavraEscolhida.includes(letra)) {
            letrasCorretas.push(letra);
        } else {
            letrasIncorretas.push(letra);
            erros++;
        }
        atualizarInterface();
    }

    // Função para reiniciar o jogo
    function reiniciarJogo() {
        palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
        letrasCorretas = [];
        letrasIncorretas = [];
        erros = 0;
        atualizarInterface();
    }

    // Adiciona eventos de clique aos botões
    var botoes = document.querySelectorAll("#teclado button");
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener("click", function () {
            var letra = this.textContent;
            letraClicada(letra);
        });
    }

    // Adiciona evento de clique ao botão de reiniciar
    document.querySelector("#reiniciar").addEventListener("click", reiniciarJogo);

    // Inicializa a interface gráfica
    atualizarInterface();
});