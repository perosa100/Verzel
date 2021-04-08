# Proposta de solução:

## Desenvolver um sistema para cadastro de tarefas.

## Tecnologias obrigatórias:

-   React
-   Redux
-   Redux persist

## Requisitos:

-   [x] Home page igual a página do github
-   [x] navbar com botão de entrar ou nome do usuário se estiver logado;
-   [x] form de cadastro por cima do banner;
-   [x] form de cadastro deve possuir os campos (nome, email, data de nascimento, cpf, cep, endereço, numero senha;
-   [x] os campos nome, email, data de nascimento e senha são obrigatórios os outros são opcionais;
-   [x]apenas usuários maiores de 12 anos podem se cadastrar;
-   [x] o campo de CPF deve possuir mascara e validação de CPF;
-   [x] o CEP deve ser validado e possuir autocomplete de endereço;
-   [x] Após logar no sistema:
-   [x] deve exibir uma listagem de tarefas cadastradas;
-   [x] deve possuir um botão para cadastro de novas tarefas;
-   [x] cada registro da listagem deve possuir as ações (editar, excluir, visualizar, concluir)
-   [x] a ação de concluir deve ser apenas para tarefas em aberto (não finalizadas), deve solicitar confirmação para concluir uma tarefa;
-   [x] deve solicitar confirmação do usuário para excluir uma tarefa;
-   [x]o cadastro de tarefa deve possuir os campos (nome, data de entrega, data de conclusão);
-   [x] os campos nome e data de entrega são obrigatórios os outros são opcionais;
-   [x] cada usuário logado deve visualizar apenas as suas tarefas;
-   [x] Todos os dados devem ser persistidos no storage do browser;

## Como executar:

-   clonar o código através do comando git clone https://github.com/perosa100/Verzel.git

-   rodar o comando yarn e aguardar instalar as dependencias

-   rodar yarn start e aguardar inicar em localhost
