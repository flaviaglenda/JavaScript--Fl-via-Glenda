//Flávia Glenda
function escolherNivel() {
    var nivel = prompt("Digite o nível de dificuldade (fácil, médio ou difícil):");

    if (nivel == "fácil") {
        document.write("Você escolheu o nível fácil!");

    } else if (nivel == "médio") {
        document.write("Você escolheu o nível médio!");

    } else if (nivel == "difícil") {
        document.write("Você escolheu o nível difícil!");

    } else {
        document.write("Nível inválido!");
    }
}
