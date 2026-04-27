# 🎮 Projetos Web com HTML, CSS e JavaScript

Este repositório reúne três projetos desenvolvidos com **HTML, CSS e JavaScript**, com foco em lógica de programação, manipulação do DOM, validação de dados, interação com o usuário e criação de interfaces visuais simples e funcionais.

Os projetos foram criados com o objetivo de praticar conceitos fundamentais do desenvolvimento web front-end, como estruturação de páginas, estilização com CSS, eventos de clique, validação de formulários e lógica de jogos.

---

## 📌 Projetos Desenvolvidos

### 🃏 1. Jogo da Memória

O projeto **Jogo da Memória** é um jogo interativo em que o jogador precisa encontrar os pares de cartas iguais. As cartas são duplicadas, embaralhadas aleatoriamente e exibidas no tabuleiro. No início do jogo, todas as cartas aparecem por alguns segundos para que o jogador possa memorizá-las.

O jogador possui um número limitado de chances. Ao acertar um par, ganha pontos. Ao errar, perde pontos e uma chance. O jogo termina quando todas as cartas são encontradas ou quando as chances acabam.

#### Funcionalidades

- Cartas duplicadas e embaralhadas automaticamente;
- Exibição inicial das cartas por alguns segundos;
- Sistema de pontuação;
- Sistema de chances;
- Animação de virar cartas;
- Verificação automática de pares;
- Reinício automático ao vencer ou perder;
- Estilização personalizada com fundo em degradê.

#### Regras do jogo

- Cada par encontrado adiciona pontos;
- Cada erro reduz a pontuação;
- O jogador começa com 3 chances;
- O jogo termina quando todos os pares são encontrados ou quando as chances chegam a zero.

#### Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

---

### 🔐 2. Tela de Login com Validação

O projeto **Tela de Login** simula uma página de autenticação simples. O usuário informa email e senha, e o JavaScript verifica se os dados correspondem a algum usuário cadastrado previamente em uma lista interna.

Caso o login esteja correto, o usuário é redirecionado para um site específico. Caso os dados estejam incorretos, o sistema exibe mensagens de erro indicando se o email não foi encontrado ou se a senha está incorreta.

#### Funcionalidades

- Campo de email;
- Campo de senha;
- Validação de usuário com JavaScript;
- Exibição de mensagens de erro;
- Redirecionamento após login válido;
- Interface limpa e responsiva.

#### Usuários cadastrados no projeto

```javascript
email: "ale@cesupa.br"
senha: "123123"

email: "pedro@giroto.com"
senha: "223344"

email: "isaac@java.com"
senha: "asdasd"
