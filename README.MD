# Sistema de Consumo de API

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  

## 📖 Visão Geral

Este projeto é uma aplicação web simples que consome a **Rick and Morty API** para buscar e exibir informações de personagens. O usuário pode:
- Buscar um personagem pelo **ID**.
- Visualizar dados básicos (ID, nome, espécie e tipo) na página principal.
- Navegar para uma página de **detalhes**, onde são exibidos atributos adicionais (imagem, gênero etc.).
- Ver mensagens de erro amigáveis caso algo dê errado.

## 🚀 Tecnologias

- **HTML5** — marcação semântica e acessível  
- **CSS3** — layout responsivo e estilização simples  
- **JavaScript (ES6+)** — lógica de consumo de API e manipulação do DOM  
- **Fetch API** — para requisições HTTP  

## ✨ Funcionalidades

1. **Busca por ID**  
   - O usuário insere um número de ID (1–826) e clica em “Buscar”.  
   - Os dados do personagem são exibidos em uma tabela na mesma página.

2. **Detalhes do Personagem**  
   - Após a busca, o ID é armazenado em `localStorage`.  
   - Ao clicar em “Ir para Detalhes”, o app carrega outra página que mostra imagem, gênero e outros campos.

3. **Tratamento de Erros**  
   - Validações de input (campo vazio, ID inválido).  
   - Mensagens de erro na interface se a API não responder ou o ID não existir.
