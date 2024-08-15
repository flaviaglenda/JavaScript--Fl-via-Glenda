//Flávia Glenda
const escolhaCardapio = prompt("Escolha uma opção do menu:\n1. Pizza\n2. Hambúrguer\n3. Sushi");

switch (escolhaCardapio) {
    case "1":
        alert("Você escolheu pizza! Confira nosso cardápio.");
        break;

    case "2":
        alert("Você escolheu hambúrguer! Delícia!");
        break;

    case "3":
        alert("Você escolheu sushi! Que tal um combinado?");
        break;

    default:
        alert("Opção inválida, escolha outro.");
        break;
}