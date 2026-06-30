document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio real

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  // Validação de formato de e-mail simples
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === '' || email === '' || document.getElementById('mensagem').value === '') {
    alert('Por favor, preencha todos os campos.');
  } else if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
  } else {
    alert('Mensagem enviada com sucesso!');
    document.getElementById('contactForm').reset();
  }
});
// --- LÓGICA DO MENU RESPONSIVO DINÂMICO ---

// Aguarda o carregamento do HTML
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // Abre ou fecha o menu ao clicar no botão hambúrguer
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  // Fecha o menu automaticamente ao clicar em qualquer link (âncora)
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
    });
  });
});


// --- LÓGICA DE VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio real da página

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Expressão regular para validação de formato de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === '' || email === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos.');
  } else if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
  } else {
    alert('Mensagem enviada com sucesso!');
    document.getElementById('contactForm').reset();
  }
});