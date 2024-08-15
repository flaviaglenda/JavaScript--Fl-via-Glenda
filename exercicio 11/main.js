//Flávia Glenda
const corSemaforo = "amarelo"; 

switch (corSemaforo) {
    case "vermelho":
        alert("Pare!");
        break;

    case "amarelo":
        alert("Atenção!");
        break;

    case "verde":
        alert("Siga!");
        break;

    default:
        alert("Cor inválida. Por favor, insira 'vermelho', 'amarelo', ou 'verde'.");
        break;
}