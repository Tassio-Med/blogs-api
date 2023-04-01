# Bem-vindo ao Blogs API!

 Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog! A aplicação foi desenvolvida em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

<br>

Criação, Leitura, Atualização e Exclusão (ou `CRUD` - _Create, Read, Update_ e _Delete_).
  
  <br>
  O desenvolvimento seguiu a seguinte ordem:

  1. Foram desenvolvidos endpoints que estão conectados ao banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto foi trabalhada a **relação entre** `user` e `post`; 

  3. Foram utilizadas categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.


<br>

### As principais habilidades colocadas prática nesse projeto foram:

* **Node.js**;
* **CRUD**;
* **Javascript**;
* **CRUD**;
* **MySQL**;

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) 

<br>

  ## Diagrama de Entidade-Relacionamento

  ---

  ### Formato das entidades

  >No projeto foi utilizado `ORM Sequelize` para criar e atualizar o banco de dados. 

  No início do projeto foram criadas migrations para gerar:

  - Uma tabela chamada **users**, contendo dados com a seguinte estrutura:

    | id  | display_name    | email           | password | image                                                                                   |
    | --- | --------------- | --------------- | -------- | --------------------------------------------------------------------------------------- |
    | 1   | Brett Wiltshire | brett@email.com // tem quer ser único | 123456   | http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png |

  - Uma tabela chamada **categories**, contendo dados com a seguinte estrutura:

    | id  | name |
    | --- | ---- |
    | 18  | News |

  - Uma tabela chamada **blog_posts**, contendo dados com a seguinte estrutura:

    | id  | title                      | content                                                | user_id | published                | updated                  |
    | --- | -------------------------- | ------------------------------------------------------ | ------- | ------------------------ | ------------------------ |
    | 21  | Latest updates, August 1st | The whole text for the blog post goes here in this key | 14  // Chave estrangeira, referenciando o id de `users`    | 2011-08-01T19:58:00.000Z | 2011-08-01T19:58:51.947Z |


  - Uma tabela chamada **PostCategories**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    | post_id | category_id |
    | ------- | ----------- |
    | 50 // Chave primária e estrangeira, referenciando o id de `BlogPosts`     | 20  // Chave primária e estrangeira, referenciando o id de `Categories`     |


    *Os dados acima são fictícios, e estão aqui apenas como exemplo.*


<br>

## Instalação

Para testar o projeto na sua máquina pessoal siga os seguintes passos:

1. Clone o repositório:

```sh
git@github.com:Tassio-Med/blogs-api.git
```

2. Instale os pacotes npm[**caso existam**]:

```sh
npm install
```

 **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

<br>

## EsLint

Neste projeto foi utilizado o [ESLint](https://eslint.org/) para fazer a análise estática do código para a garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento.

```sh
npm run lint
```

<br>

## Autor

- [@tassio medeiros](https://github.com/Tassio-Med)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tassiomed98) 

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/tassio.med?igshid=ZDdkNTZiNTM=) 





É importante dar destaque que o projeto foi desenvolvido no  módulo de Back-end na [@trybe](https://github.com/betrybe).

<br><hr>
[🔼 Voltar topo](#bem-vindo-ao-blogs-api)