// Função que escolhe uma opção aleatória para o computador
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

// Função que define o que acontece quando o jogador faz uma escolha
function playerChoice(playerChoice) {
  // Obtenha a escolha do computador
  const computerChoice = getComputerChoice();

  // Atualize a imagem da escolha do computador
  updateComputerChoiceImage(computerChoice);

  // Determinar o vencedor
  const result = determineWinner(playerChoice, computerChoice);

  // Mostrar a mensagem de resultado
  const messageElement = document.getElementById("message");
  if (result === "win") {
    messageElement.textContent = "Você venceu!";
    messageElement.className = "win";
  } else if (result === "lose") {
    messageElement.textContent = "Você perdeu!";
    messageElement.className = "lose";
  } else {
    messageElement.textContent = "Empate!";
    messageElement.className = "tie";
  }
}

// Função para atualizar a imagem da escolha do computador
function updateComputerChoiceImage(choice) {
  // Esconde todas as escolhas do computador
  document.getElementById("computerRock").style.display = "none";
  document.getElementById("computerPaper").style.display = "none";
  document.getElementById("computerScissors").style.display = "none";

  // Mostra a imagem correspondente à escolha do computador
  if (choice === "rock") {
    document.getElementById("computerRock").style.display = "block";
  } else if (choice === "paper") {
    document.getElementById("computerPaper").style.display = "block";
  } else {
    document.getElementById("computerScissors").style.display = "block";
  }
}

// Função para comparar a escolha do jogador com a escolha do computador
function determineWinner(player, computer) {
  if (player === computer) {
    return "tie";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
