# Data Lovers

## Índice

* [1. Apresentação](#1-apresentação)
* [2. Detalhes do projeto](#2-detalhes-do-projeto)
* [3. Aprendizagem](#3-aprendizagem)
* [4. Checklist](#4-checklist)

***

## 1. Apresentação

## Rick and Morty Data Lovers

É com muito prazer que finalizamos o segundo projeto da Laboratoria: Rick and Morty Data Lovers!
Essa aplicação web traz detalhes sobre os personagens da série de forma interativa.

![Gravação de Tela 2020-12-04 às 22 27 17](https://user-images.githubusercontent.com/71895567/101230862-cb582080-3686-11eb-9909-12b1c7becf7f.gif)


#### Characters

No menu "Characters" você encontrará as informações mais importantes sobre todos os personagens da série. 
A página conta uma barra de busca em tempo real, além de uma série de filtros:
* [X] All Characters
* [X] Status (Alive/ Dead / Unknown)
* [X] Gender (Male/ Female / Genderless / Unknown)
* [X] Sort By (A-Z / Z-A)

Tinhamos como prioridade proporcionar um boa experiência ao usuário, pensando em trazer um site com um conteúdo
interativo e de fácil acesso, optamos por entregar as informações em cards giratórios que são ativados com o passar do mouse, 
dispensando o "click".


#### Who Would You Be?

A versão desktop conta com o menu "Who would you be?" que vai te contar quem você seria na série, através de um teste.

![Gravação de Tela 2020-12-04 às 22 13 51](https://user-images.githubusercontent.com/71895567/101231113-d1023600-3687-11eb-8c3c-98d5ff7faea8.gif)

 
Uma opção divertida para saber mais sobre os personagens mais relevantes, as 9 perguntaa levam a 10 resultados diferentes.
São os 10 personagens mais relevantes, complementando informações mais detalhadas sobre cada um deles ao fim do teste.

![test-result](https://user-images.githubusercontent.com/71895567/101259003-0b5de880-3705-11eb-9fda-65de03e98522.png)

#### Mobile Version

O menu principal é totalmente responsivo e em sua versão Mobile  com botões maiores, temos um layout que facilita não apenas a visualização
mas também o acesso através do Touch.


![mobile-menu](https://user-images.githubusercontent.com/71895567/101231652-7965c980-368b-11eb-9904-21678db18a6e.png)


Optamos por desenvolvê-lo todo em inglês, afinal os arquivos com os dados dos personagens estão nessa língua.
Mas pode ser revertido com o uso de tradutores automáticos no seu navegador.


Então se você é fã, simplesmente gosta de assistir em seu tempo livre ou quer saber um pouco mais
sobre os personagens da série, nós te convidamos a acessar nossa aplicação neste link.


## 2. Detalhes do projeto

#### Planejamento

O projeto foi desenvolvido usando Metodologia Ágil, dividido em 3 sprints e ao fim de cada uma delas era necessário possuir um produto
pronto para o uso. 
Foi necessário preparar uma história do usuário para cada sprint, para que desenvolvessemos uma aplicação adaptada as suas necessidades. 
A ferramenta usada para organização do grupo foi o Trello, criamos quadros de tarefas baseadas no Kanban:


![trello](https://user-images.githubusercontent.com/71895567/101232349-00b53c00-3690-11eb-81c0-f90b1a4bd028.png)


#### Execução

Fizemos nossa história de usuário baseada em pesquisas com fãs da série com o intuito de saber quais as necessidades deste público
e o que ele gostaria de ver em uma aplicação do desenho. 
Realizamos 3 diferentes histórias de usuário ao longo do processo:
- Sprint 1 : "Eu, novo fã da série, gostaria de ter informações sobre os personagens mais relevante da série, para me ambientar."
- Sprint 2 : "Eu, fã de longa data, gostaria de ter informações sobre todos os personagens da série, para estar a par dos detalhes."
- Sprint 3 : "Eu, fã de longa data, gostaria de poder organizar as informações que são relevantes para mim e escolher o personagem que
eu desejar, para ter saber mais de forma prática."


#### Protótipo

Nosso protótipo foi desenhado para ser limpo e simples.
A ideia inicial era conter apenas o Logotipo da série em um fundo que remete ao tema da série, mas não utilizar imagens, visto que 
seriam introduzidos os cards com foto dos personagem e suas informações e nós optamos por não poluir a visão do usuário.
Também optamos por colocar um botão ao invés de carregar as imagens automaticamente, evitando assim o delay do carregamento, pois o documento 
conta com aproximadamente 500 personagens e seus dados. 
Apenas clicando em "Characters" os cards são gerados
![prototipoSprint1](https://user-images.githubusercontent.com/71895567/101232692-d6647e00-3691-11eb-8d44-806950104b34.png)

As cores foram escolhidas com base na paleta da série e a idéia era que o visual remetesse a tecnologia e  ao universo.

![paleta](https://user-images.githubusercontent.com/71895567/101232955-c352ad80-3693-11eb-955f-09caa398e73c.jpg)

#### Testes de Usabilidade

Realizamos com um pequeno grupo de pessoas o teste de usabilidade, com o intuito de encontrar possiveís erros, ou algum detalhe que 
dificulte ou incomode o usuário. Estes foram extremamente úteis, pois resolvemos problemas importantes como:
- A movimentação dos cards que ficavam próximos a borda tela;
- Acessibilidade na versão mobile (selects pequenos de difícil visualização);
- Resultado do teste não aparecia devido a um empate de pontuação.


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

* [ ] Usar VanillaJS.
* [ ] Não utilizar `this`.
* [ ] Passa pelo linter (`npm run pretest`)
* [ ] Passa pelos testes (`npm test`)
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui histórias de usuário no `README.md`.
* [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [ ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [ ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [ ] UI: Permite filtrar dados com base em uma condição.
* [ ] UI: É _responsivo_.
