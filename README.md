# Cineflex

## Introdução

O Cineflex é o nono projeto do meu portfólio de desenvolvimento Front-End, focado em React. O objetivo foi criar uma Single-Page Application (SPA) para um cinema, utilizando React Router para navegação dinâmica entre páginas sem recarregar o site. Este projeto fortaleceu meus conhecimentos em React, rotas, consumo de APIs REST e manipulação de estados.

## Finalidade do Projeto

O Cineflex permite que usuários:
- Visualizem a lista de filmes em cartaz, obtida via requisição à API.
- Vejam os horários disponíveis para cada filme, organizados por dia da semana.
- Escolham sessões e reservem assentos em tempo real.

Tudo isso é feito consumindo dados de uma API pública, simulando um ambiente real de reservas de cinema.

## Funcionalidades

- **Listagem de Filmes:** Consome a API para exibir pôsteres e títulos dos filmes disponíveis.
- **Horários e Sessões:** Após escolher um filme, o usuário vê os horários por dia da semana.
- **Reserva de Assentos:** Seleção de assentos disponíveis e reserva, enviando nome e CPF.
- **SPA com React Router:** Navegação fluida entre páginas (filmes, sessões, assentos, confirmação).

## Consumo de API

Principais endpoints utilizados:

- **Lista de filmes:**  
  `GET https://mock-api.driven.com.br/api/v7/cineflex/movies`

- **Sessões de um filme:**  
  `GET https://mock-api.driven.com.br/api/v7/cineflex/movies/ID_DO_FILME/showtimes`

- **Assentos de uma sessão:**  
  `GET https://mock-api.driven.com.br/api/v7/cineflex/showtimes/ID_DA_SESSAO/seats`

- **Reserva de assentos:**  
  `POST https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`  
  Corpo da requisição:
  ```json
  {
    "ids": [1, 2, 3],
    "name": "Fulano",
    "cpf": "12345678900"
  }
  ```

## Instalação

Para rodar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/DanBellini/projeto9-cineflex.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd projeto9-cineflex
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

5. **Acesse no navegador:**  
   ```
   http://localhost:3000
   ```

## Tecnologias Utilizadas

- React
- React Router
- JavaScript (ES6+)
- HTML
- CSS

## Autor

- [DanBellini](https://github.com/DanBellini)

---

Contribuições são bem-vindas! Fique à vontade para abrir issues ou pull requests para melhorias e correções.
