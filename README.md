# Data Lovers

## Índice

* [1. Apresentação](#1-apresentação)
* [2. Detalhes do projeto](#2-detalhes-do-projeto)
* [3. Aprendizagem](#3-aprendizagem)
* [4. Checklist](#4-checklist)

***

## 1. Apresentação

## Rick and Morty Data Lovers

É com muito prazer que finalizamos o segundo projeto da Laboratoria: **Rick and Morty Data Lovers**!
Essa aplicação _web_ traz detalhes sobre os personagens da série de forma interativa.

![Gravação de Tela 2020-12-04 às 22 27 17](https://user-images.githubusercontent.com/71895567/101230862-cb582080-3686-11eb-9909-12b1c7becf7f.gif)


#### Characters

No menu "Characters" você encontrará as informações mais importantes sobre todos os personagens da série. 
A página conta com uma barra de busca em tempo real, além de uma série de filtros:
* All characters
* Status (Alive / Dead / Unknown)
* Gender (Male / Female / Genderless / Unknown)
* Sort by (A-Z / Z-A)

Os filtros "Status" e "Gender"  fornecem também o percentual de personagens que possuem a característica selecionada.

Tínhamos como prioridade proporcionar um boa experiência ao usuário, pensando em trazer um site com um conteúdo
interativo e de fácil acesso. Sendo assim, optamos por entregar as informações em cards giratórios que são ativados com o passar do mouse, dispensando o "click".


#### Who Would You Be?

A versão desktop conta com o menu "Who would you be?" (em breve uma versão _mobile_) que vai te contar quem você seria na série, através de um teste.

![Gravação de Tela 2020-12-04 às 22 13 51](https://user-images.githubusercontent.com/71895567/101231113-d1023600-3687-11eb-8c3c-98d5ff7faea8.gif)

 
Uma opção divertida para saber mais sobre os personagens mais relevantes, as 9 perguntas levam a 10 resultados diferentes.
São os 10 personagens mais relevantes, complementando informações mais detalhadas sobre cada um deles.


![test-result](https://user-images.githubusercontent.com/71895567/101259003-0b5de880-3705-11eb-9fda-65de03e98522.png)


#### Mobile Version

O menu principal é totalmente responsivo e em sua versão _Mobile_, com botões maiores, temos um layout que facilita não apenas a visualização mas também o acesso através do _Touch_.


![mobile-menu](https://user-images.githubusercontent.com/71895567/101231652-7965c980-368b-11eb-9904-21678db18a6e.png)


Optamos por desenvolver o projeto todo em inglês, afinal os arquivos com os dados dos personagens estão nesse idioma.
Isso pode ser revertido com o uso de tradutores automáticos no seu navegador.


Então se você é fã, simplesmente gosta de assistir **Rick and Morty** em seu tempo livre ou quer saber um pouco mais
sobre os personagens da série, nós te convidamos a acessar nossa aplicação neste [link](https://talita-8.github.io/SAP005-data-lovers/src/).


## 2. Detalhes do projeto

#### Planejamento

O projeto foi desenvolvido usando Metodologia Ágil, dividido em 3 sprints e ao fim de cada uma delas era necessário possuir um produto
pronto para o uso. 
Foi necessário preparar uma história do usuário para cada sprint, para que desenvolvêssemos uma aplicação adaptada às suas necessidades. 
A ferramenta usada para organização do grupo foi o Trello, no qual criamos quadros de tarefas baseadas no Kanban:


![trello](https://user-images.githubusercontent.com/71895567/101232349-00b53c00-3690-11eb-81c0-f90b1a4bd028.png)


#### Execução

Fizemos nossas histórias de usuário baseadas em pesquisas com fãs da série com o intuito de saber quais as necessidades deste público
e o que ele gostaria de ver em uma aplicação do desenho. 
Realizamos 3 diferentes histórias de usuário ao longo do processo:
- Sprint 1 : "Eu, novo fã da série, gostaria de ter informações sobre os personagens mais relevantes da série, para me ambientar."
- Sprint 2 : "Eu, fã de longa data, gostaria de ter informações sobre todos os personagens da série, para estar a par dos detalhes."
- Sprint 3 : "Eu, fã de longa data, gostaria de poder organizar as informações que são relevantes para mim e escolher o personagem que
eu desejar, para saber mais a seu respeito de forma prática."


#### Protótipo

Nosso protótipo foi desenhado para ser limpo e simples.
A ideia inicial era conter apenas o logotipo da série em um fundo que remetesse ao tema do desenho, mas não utilizar imagens, visto que 
seriam introduzidos os cards com foto dos personagem e suas informações, e nós optamos por não poluir a visão do usuário.
Também optamos por colocar um botão ao invés de carregar as imagens automaticamente, evitando assim o _delay_ do carregamento, pois o documento 
conta com aproximadamente 500 personagens e seus respectivos dados. 
Os cards são gerados apenas clicando em "All characters" (ou selecionando algum filtro) no menu "Characters".

![prototipoSprint1](https://user-images.githubusercontent.com/71895567/101232692-d6647e00-3691-11eb-8d44-806950104b34.png)

As cores foram escolhidas com base na paleta da série e a idéia era que o visual remetesse à tecnologia e ao universo.

![paleta](https://user-images.githubusercontent.com/71895567/101232955-c352ad80-3693-11eb-955f-09caa398e73c.jpg)

#### Testes de Usabilidade

Realizamos testes de usabilidade com um pequeno grupo de pessoas, com o intuito de encontrar possiveís erros, ou algum detalhe que 
dificulte ou incomode o usuário. Estes foram extremamente úteis, pois resolvemos problemas importantes como:
- A movimentação dos cards que ficavam próximos a borda da tela;
- Acessibilidade na versão _mobile_ (selects pequenos de difícil visualização);
- Resultado do teste poderia não aparecer devido a um empate de pontuação.


## 3. Aprendizagem

Durante o projeto nós conseguimos aprender:

### HTML e CSS

* [X] Uso de HTML semântico.
* [X] Uso de seletores de CSS.
* [X] Construir sua aplicação respeitando o desenho realizado (protótipo).
* [X] Uso de flexbox em CSS.

### DOM e Web APIs

* [X] Uso de seletores de DOM.
* [X] Gerenciamento de eventos de DOM.
* [X] Manipulação dinâmica de DOM. (appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [X] Uso de condicionais (if-else | switch | operador ternário)
* [X] Uso de laços (for | for..in | for..of | while)
* [X] Uso de funções (parâmetros | argumentos | valor de retorno)
* [X] Manipular arrays (filter | map | sort | reduce)
* [X] Manipular objects (key | value)
* [X] Uso ES modules.
* [X] Diferenciar entre expression e statements.
* [X] Diferenciar entre tipos de dados atômicos e estruturados.

### Testing

* [X] Teste unitário.

### Estrutura do código e guia de estilo

* [X] Organizar e dividir o código em módulos (Modularização)
* [X] Uso de identificadores descritivos (Nomenclatura | Semântica)
* [X] Uso de linter (ESLINT)

### Git e GitHub

* [X] Uso de comandos de git (add | commit | pull | status | push)
* [X] Gerenciar repositórios de GitHub (clone | fork | gh-pages)
* [X] Colaboração no Github (branches | pull requests | |tags)

## 4. Checklist

* [X] Usar VanillaJS.
* [X] Não utilizar `this`.
* [X] Passa pelo linter (`npm run pretest`)
* [X] Passa pelos testes (`npm test`)
* [X] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [X] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [X] Inclui histórias de usuário no `README.md`.
* [X] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [X] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [X] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [X] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [X] UI: Permite filtrar dados com base em uma condição.
* [X] UI: É _responsivo_.
