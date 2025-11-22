const container = document.getElementsByClassName('container')[0];
const btn = document.getElementsByClassName('toggle-button')[0];
const icon = document.querySelector('img');

// Função para atualizar o ícone do botão
function updateIconButton(path) {
  icon.setAttribute('src', path);
}

// Função para mudar o tema
function toggleTheme() {
  if (icon.classList.contains('moon')) {
    updateIconButton('./assets/sun-medium.svg');
    container.classList.add('dark');
    btn.classList.add('right');
    icon.classList.add('sun');
    icon.classList.remove('moon');
  } else {
    updateIconButton('./assets/moon.svg');
    container.classList.remove('dark');
    btn.classList.remove('right');
    icon.classList.add('moon');
    icon.classList.remove('sun');
  }
}

btn.onclick = toggleTheme;
