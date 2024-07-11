# Testes Automatizados para API Todo

## Descrição

Este projeto tem como objetivo automatizar os testes de uma API Todo desenvolvida em Go. A API utiliza PostgreSQL como banco de dados e Kafka para publicação de mensagens. Este repositório contém os testes automatizados para os endpoints REST da API, cobrindo os métodos GET, GET POR ID, POST, PUT e DELETE.

## Tecnologias Utilizadas

- Ferramentas de Teste: [Jest](https://jestjs.io/) e [Supertest](https://www.npmjs.com/package/supertest).

## Configuração do Projeto
Como o projeto de testes está separado do projeto principal da API, é necessário configurar o ambiente corretamente para que os testes possam ser executados.
Com isso você precisa acessar o repositório do autor do projeto principal (Gedalias):

[Repositório Gedalias](https://github.com/gsantosc18/todo)

E você deverá seguir todo passo a passo para subir a aplicação da API de forma local em sua máquina, para que assim você consiga executar os testes automatizados deste meu projeto.

## Pré-requisitos

- [Node.js](https://nodejs.org/pt)
- [Git](https://git-scm.com/downloads)

## Passos para Configuração

Para que você possa executar o projeto de teste automatizado, você deverá clonar ou baixar o projeto em sua máquina.
1. Clone o repositório: `git@github.com:taynaraluanacaetano/test-todo-jest-with-supertest.git`;
2. Após baixado o projeto: navegue até a pasta principal;
3. Instale as dependências: `npm install`;
4. Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto de testes com as seguintes variáveis:
 -- `URL_API_LOCAL=http://localhost:porta_da_api`

**Executando os Testes**

Para executar os testes automatizados, utilize o seguinte comando:

`npm test`

Os testes serão executados e o resultado será exibido no terminal.

## Estrutura do Projeto
Em desenvolvimento...
