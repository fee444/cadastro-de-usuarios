Cadastro de Usuários
Este projeto é uma aplicação web para cadastro de usuários, implementando as operações CRUD (Create, Read, Update, Delete) para gerenciamento dos dados. A aplicação foi desenvolvida utilizando React, JavaScript, HTML e CSS no front-end, com integração ao banco de dados MongoDB através do Prisma. Os hooks do React useState e useEffect foram utilizados para gerenciamento de estado e efeitos colaterais.

Funcionalidades
Cadastro de novos usuários
Listagem de usuários cadastrados
Edição de informações dos usuários
Exclusão de usuários
Tecnologias Utilizadas
Front-end:
React com Vite
JavaScript
HTML
CSS
Back-end:
MongoDB
Prisma
Instalação e Execução
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/fee444/cadastro-de-usuarios.git
cd cadastro-de-usuarios
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o banco de dados:

Certifique-se de que o MongoDB está instalado e em execução.
Configure a conexão com o banco de dados no arquivo .env (caso exista) ou diretamente no código de configuração do Prisma.
Execute a aplicação:

bash
Copiar
Editar
npm run dev
A aplicação estará disponível em http://localhost:3000.

Estrutura do Projeto
bash
Copiar
Editar
cadastro-de-usuarios/
├── public/
├── src/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── vite.config.js
└── ...
public/: Arquivos públicos da aplicação.
src/: Código-fonte da aplicação.
pages/: Páginas da aplicação.
services/: Serviços e utilitários, como a configuração do Prisma.
App.jsx: Componente principal da aplicação.
main.jsx: Ponto de entrada da aplicação.
