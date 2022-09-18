# <p align = "center"> Projeto 20 - RepoProvas </p>

<p align="center">
   <img src="https://cdn-icons-png.flaticon.com/512/825/825590.png" width=280px />
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/Author-Gadiel_Azevedo-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/gadi29/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>


## Descrição

RepoProvas é uma API para armazenamento de provas, essas organizadas por disciplinas, professores e categorias.

***

## Tecnologias e Conceitos

- JWTs & refresh tokens
- Node.js
- TypeScript
- Postgres SQL & Prisma ORM
- Jest e Supertest

***

## Rotas

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "confirmPassword": "loremipsum"
      }
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
      }
```
    
```yml 
POST /test (autenticada)
    - Rota para postar uma prova
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {
        "name": "lorem ipsum",
        "pdfUrl": "http://loremipsum.com",
        "categoryId": 1,
        "teacherDisciplineId": 1
    }
```

```yml
GET /tests/disciplines (autenticada)
    - Rota para listar os testes por disciplinas
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
``` 

```yml
GET /tests/teachers (autenticada)
    - Rota para listar os testes por instrutores
    - headers: { "Authorization": "Bearer ${token}" }
    - body: {}
```

***

## 🏁 Rodando a aplicação

Primeiro, certifique-se que você tem a última versão estável do [Node.js](https://nodejs.org/en/download/), [npm](https://www.npmjs.com/), [Prisma](https://www.prisma.io/) e [TypeScript](https://www.typescriptlang.org/) rodando localmente.

Logo após, faça o clone desse repositório na sua máquina:

```
git clone https://github.com/gadi29/projeto20-repoprovas
```

Agora, dentro do diretório, rode o seguinte comando para instalar as dependencias:

```
npm install
```

Depois, rode o seguinte código:

```
npm run build
```

Para finalizar o processo, é só inicializar o servidor:

```
npm run start
```