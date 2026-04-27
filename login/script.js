// Dados de usuários válidos
const users = [
  {
    email: "ale@cesupa.br",
    password: "123123",
    redirect: "https://www.cesupa.br",
  },
  {
    email: "pedro@giroto.com",
    password: "223344",
    redirect: "https://www.detran.pa.gov.br",
  },
  {
    email: "isaac@java.com",
    password: "asdasd",
    redirect: "https://www.idopterlabs.com.br",
  },
];

// Função para validar o login
function validateLogin(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Limpa as mensagens de erro
  document.getElementById("emailError").style.display = "none";
  document.getElementById("passwordError").style.display = "none";

  // Obtém os valores dos campos
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verifica se o usuário existe
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Redireciona para o site do usuário válido
    window.location.href = user.redirect;
  } else {
    // Exibe mensagem de erro
    if (!users.some((u) => u.email === email)) {
      document.getElementById("emailError").textContent =
        "Email não encontrado";
      document.getElementById("emailError").style.display = "block";
    }
    if (!users.some((u) => u.password === password)) {
      document.getElementById("passwordError").textContent = "Senha incorreta";
      document.getElementById("passwordError").style.display = "block";
    }
  }
}

// Adiciona o evento de submit ao formulário
document.getElementById("loginForm").addEventListener("submit", validateLogin);
