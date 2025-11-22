const container = document.getElementsByClassName('container')[0];
const btn = document.querySelector('button');
const textButton = document.querySelector('span');

// Função para atualizar o texto do botão
function updateTextButton(text) {
  textButton.innerHTML = text;
}

// Função para mudar o tema
function toggleTheme() {
  if (textButton.textContent === 'Claro') {
    updateTextButton('Escuro');
    container.classList.add('dark');
    btn.classList.add('btn-dark');
  } else {
    updateTextButton('Claro');
    container.classList.remove('dark');
    btn.classList.remove('btn-dark');
  }
}

btn.onclick = toggleTheme;
