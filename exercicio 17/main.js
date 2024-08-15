//Flávia Glenda
function updateParagraph() {
    var inputField = document.getElementById("inputTexto");
    var inputValue = inputField.value;

    var paragraph = document.getElementById("paragrafoTexto");
    paragraph.textContent = inputValue;
}