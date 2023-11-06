# Jogo da Forca com Spring Boot, HTML, CSS e JavaScript

Este é um projeto de Jogo da Forca desenvolvido com Spring Boot para o backend e HTML, CSS e JavaScript para o frontend. O jogo permite que os jogadores adivinhem palavras e visualizem seu progresso na tela.

## Como Jogar

1. Inicie o aplicativo Spring Boot.
2. Abra o navegador e vá para `http://localhost:8080`.
3. Uma palavra será escolhida aleatoriamente a cada novo jogo.
4. Clique nas letras disponíveis no teclado para tentar adivinhar a palavra.
5. As letras corretas aparecerão na parte superior da tela, substituindo os traços.
6. Cada letra incorreta adiciona uma parte à imagem da forca (máximo de 6 partes).
7. Continue até adivinhar todas as letras corretamente ou atingir o limite de erros.

## Como Executar com o Spring Boot

1. Abra o projeto em seu IDE favorito.
2. Execute a classe `App.java` como um aplicativo Spring Boot.
3. Abra o navegador e vá para `http://localhost:8080`.

## Como Personalizar Palavras

1. Abra o arquivo `main.js` no seu editor de código.
2. Na variável `palavras`, adicione ou remova palavras conforme necessário.

```javascript
var palavras = ["javascript", "html", "css", "forca", "programacao"];
