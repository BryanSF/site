// Função para manipular o envio do formulário
function handleSubmit(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Obter valores do formulário
  const cidade = document.querySelector('input[placeholder="Cidade ou Localização"]').value;
  const precoMaximo = document.querySelector('input[placeholder="Preço Máximo"]').value;
  const numQuartos = document.querySelector('input[placeholder="Número de Quartos"]').value;
  const numColegas = document.querySelector(
    'input[placeholder="Número de Colegas de Quarto"]',
  ).value;

  // Você pode usar os valores acima para fazer uma solicitação AJAX para buscar listagens de propriedades
  // e exibi-las na seção "listings".
  // Por exemplo, você pode usar a função fetch() para buscar dados de um servidor.

  // Aqui, apenas exibimos os valores do formulário como um exemplo.
  console.log(
    `Cidade: ${cidade}, Preço Máximo: ${precoMaximo}, Número de Quartos: ${numQuartos}, Número de Colegas: ${numColegas}`,
  );
}

// Adicione um ouvinte de evento ao formulário
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('openChatButton').addEventListener('click', function () {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.width = '300px'; /* Ajuste para a largura desejada */
    chatContainer.style.height = '400px'; /* Ajuste para a altura desejada */
    this.style.display = 'none'; /* Esconde o botão "Abrir Chat" */
  });

  document.getElementById('sendButton').addEventListener('click', function () {
    const message = document.getElementById('messageInput').value;
    const messageArea = document.getElementById('messageArea');
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    messageArea.appendChild(newMessage);
    document.getElementById('messageInput').value = ''; // Limpa o campo de entrada
  });

  document.getElementById('messageInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const message = this.value;
      const messageArea = document.getElementById('messageArea');
      const newMessage = document.createElement('p');
      newMessage.textContent = message;
      messageArea.appendChild(newMessage);
      this.value = ''; // Limpa o campo de entrada
    }
  });

  document.getElementById('closeChatButton').addEventListener('click', function () {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.width = '1px';
    chatContainer.style.height = '1px';
    /* Adiciona um delay para que o chatContainer tenha tempo de encolher antes de ser ocultado */
    setTimeout(function () {
      document.getElementById('openChatButton').style.display =
        'block'; /* Mostra o botão "Abrir Chat" */
    }, 500);
  });
});
