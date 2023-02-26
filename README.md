
# To do List 🗂

Este repositório contém uma página de "to do list" desenvolvida com HTML, CSS e JavaScript, com um servidor back-end implementado em Node.js usando uma API RESTful para manipulação de dados. É um projeto completo para aprendizado de desenvolvimento full-stack.

#### Server: Node JS
#### Database: Mysql

| Tarefa           | Tempo exigido | | Finished | 
|----------------|---------------|----------------|-----------|
| Back-end  | > 3 hours  |  | Ok | 
| Front-end   | ?  |  | in progress |





## API

O back-end desenvolvido em Node.js é uma API que permite a adição, listagem, exclusão e alteração de tarefas. A API é acessada por solicitações HTTP e retorna respostas em formato JSON.

Para adicionar uma tarefa, o usuário deve enviar uma solicitação POST contendo as informações da tarefa, como o título da tarefa, O servidor irá validar as informações e adicioná-las ao banco de dados.


Para listar todas as tarefas, o usuário deve enviar uma solicitação GET para o endpoint correspondente. O servidor consulta o banco de dados e retorna todas as tarefas em um formato JSON.

#### Retorna todas as tarefas

```http
  GET /tasks
```
![All Tasks](https://user-images.githubusercontent.com/24917622/221364931-a3e939fc-ac78-49ac-90ba-07664ff7c9a6.png)

#### Adicionar tarefa
Para Adicionar uma tarefa, o usuário deve enviar uma solicitação POST para o endpoint correspondente, contendo o titulo da tarefa a ser adicionado. O servidor irá validar a solicitação e adicionar a tarefa correspondente do banco de dados.

```http
  POST /tasks/insert
```
![Delete Tasks](https://user-images.githubusercontent.com/24917622/221364928-8850762c-a15b-4798-9c3b-d9bae9ab7d13.png)

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O titulo da tarefa|


#### Excluir tarefa
Para excluir uma tarefa, o usuário deve enviar uma solicitação DELETE para o endpoint correspondente, contendo o ID da tarefa a ser excluída. O servidor irá validar a solicitação e excluir a tarefa correspondente do banco de dados.

```http
  DELETE /tasks/delete/${id}
```
![Delete Tasks](https://user-images.githubusercontent.com/24917622/221364934-c0b7cbed-0e53-4248-81b1-09d4df19a89f.png)

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da tarefa que você quer |





#### Alterar tarefa
Para alterar uma tarefa, o usuário deve enviar uma solicitação PUT para o endpoint correspondente no formato json, contendo o ID da tarefa a ser alterada e as novas informações da tarefa. O servidor irá validar as informações e atualizar a tarefa correspondente no banco de dados.

```http
  PUT /tasks/update/${id}
```
![Update Tasks](https://user-images.githubusercontent.com/24917622/221364930-2c6db78c-dd54-41dd-a42f-5a174141fcf8.png)

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da tarefa que você quer |


A aplicação back-end é desenvolvida usando o framework Express.js e armazena as tarefas em um banco de dados Mysql, A aplicação é escalável e pode ser facilmente expandida para adicionar mais funcionalidades.




## Instalação


Estas instruções vão permitir que você tenha uma cópia do projeto em sua máquina local para fins de desenvolvimento e teste.

Pré-requisitos
O projeto pode ser construído com npm ou yarn, portanto, escolha um dos métodos abaixo caso você não tenha nenhum instalado em seu sistema.

O npm é distribuído com o Node.js, o que significa que quando você baixa o Node.js, o npm é automaticamente instalado em seu computador. [Baixe o Node.js](https://nodejs.org/en/download/)
ou

O Yarn é um gerenciador de pacotes criado pela equipe do Facebook e parece ser mais rápido que o npm em geral. [Baixe o Yarn.](https://classic.yarnpkg.com/en/docs/install#windows-stable)




Para baixar o projeto, siga as instruções abaixo.
```bash
  git clone https://github.com/JoaoFernandesXD/To-do-list/
  cd backend
```

Instale dependencies com npm
```bash
  npm install
  npm run dev
```
![Iniciar Projeto](https://user-images.githubusercontent.com/24917622/221365670-4da3c992-e257-457f-8bd2-b6616464df7b.png)

or yarn

```bash
 yarn install
 yarn run dev
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

PORT é aonde a nossa aplicação ira rodar caso você não coloque nenhuma por padrão ela ira rodar na 3000

`PORT=`
`MYSQL_HOST= `
`MYSQL_USER= `
`MYSQL_PASSWORD= `
`MYSQL_DATABASE= `





## Front-end (Desenvolvimento)

Front-end que está sendo desenvolvido para se integrar com a API. O objetivo é criar uma interface de usuário que permita aos usuários visualizar todas as tarefas e seus status de conclusão. Além disso, a interface deve permitir que os usuários excluam tarefas. O front-end será desenvolvido usando HTML, CSS e JavaScript. Contribuições são sempre bem-vindas!

| Tarefas front-end         | Tempo exigido | | Finished | 
|----------------|---------------|----------------|-----------|
| Container | 0 min  |  | done | 
| Lista tarefas | 0 min  |  | done | 
| Checkbox funcionando | 0 min  |  | done | 
| efeito line-through ao clicar na tarefa | 0 min  |  | done | 
| Incluir button Editar | 0 min  |  | done | 
| Incluir button Exlcuir | 0 min |  | done | 
| Incluir button status (Concluido, em progresso, em espera) | ?  |  | Em espera | 
| Criar um modal ao clicar em editar | ? |  | Em espera | 
| Efeito ocultar tarefas já concluidas | ? |  | Em espera | 
| Realizar integração com API  | ?  |  | Em espera | 


![Front-end](https://user-images.githubusercontent.com/24917622/221362457-62bda23e-6c57-434d-9598-03ad06ace2ff.png)







## Contribuição


Se você está interessado em contribuir para este projeto, ficarei muito feliz em receber suas contribuições. Este projeto é uma iniciativa aberta e colaborativa, e todas as contribuições são bem-vindas, desde pequenas correções de bugs até novos recursos e funcionalidades.

Para contribuir, basta seguir os seguintes passos:






#### Faça um Fork desse repositório para sua própria conta.

#### Crie uma nova branch para suas modificações:
```bash
 git checkout -b minha-modificacao
```

#### Faça as alterações necessárias e commit:
```bash
 git commit -m "Minha modificação"
```

#### Envie as modificações para seu repositório no GitHub:
```bash
 git push origin minha-modificacao
```

Abra um Pull Request neste repositório, descrevendo as alterações que foram feitas e o motivo pelo qual elas são necessárias.

Assim que receber sua contribuição, avaliarei as mudanças e, se estiverem de acordo com as diretrizes do projeto, farei o merge da sua modificação com a branch principal.

Agradeço antecipadamente pela sua contribuição e espero poder contar com sua colaboração para tornar este projeto ainda melhor!

