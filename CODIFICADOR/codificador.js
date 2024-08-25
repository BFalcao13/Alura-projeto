function encrypt() {
    const textarea = document.getElementById('text__area');
    const text = textarea.value;
    const encryptedText = text
        replace(/e/g, 'enter')
        replace(/i/g, 'imes')
        replace(/a/g, 'ai')
        replace(/o/g, 'ober')
        replace(/u/g, 'ufat');
    showResult(encryptedText);
}
function decrypt() {
    const textarea = document.getElementById('text__area');
    const text = textarea.value;
    const decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    showResult(decryptedText);
}
function showResult(message) {
    const resultContainer = document.getElementById('mensagem__conteudo');
    resultContainer.innerHTML = `
        <img src="assets/ET.gif" alt="Et">
        <h1>${message || 'Nenhuma mensagem encontrada'}</h1>
        <h3>${message ? 'Texto convertido com sucesso!' : 'Escreva uma palavra para decodificar'}</h3>
    `;
}

// Limpar o texto do campo quando ele for focado
document.getElementById('text__area').addEventListener('focus', function() {
    this.placeholder = '';
});