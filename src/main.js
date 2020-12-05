import { filterStatus, filterGender, filterText, filterOrder } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


/* -------------MENU E BOTÕES DESKTOP VERSION------------ */ 

// Habilitando menu de filtros

const test = document.getElementById("questions-area")
const menu1 = document.getElementById("menu1")
const charactersButton = document.getElementById("characters-button")
charactersButton.addEventListener("click" , showFilters)
const allFilters = document.getElementById("select-filter")

function showFilters(){
  allFilters.style.display = "flex"
  menu1.style.display = "flex"
  test.style.display = "none"
}


// Mostrar todos os personagens

const allButton = document.getElementById("all-button")
allButton.addEventListener("click", showCharacters)

function showCharacters(){
  test.style.display = "none"
  divText.innerHTML = ""
  let cards = ""
  
	for (let character of data.results){
    cards += `
      <div class="all-cards">
        <div class="card-info">
          <div class="card-front">
            <img class="front-pic" src="${character.image}" alt="">
            <h1>${character.name}</h1>
          </div>
          <div class="card-back">
            <img class="back-pic" src="${character.image}" alt="">
            <ul>
              <li>Name: ${character.name}</li>
              <li>Status: ${character.status}</li>
              <li>Species: ${character.species}</li> 
              <li>Type: ${character.type}</li>
              <li>Gender: ${character.gender}</li> 
              <li>Origin: ${character.origin.name}</li>
              <li>Location: ${character.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards")
  cardsSection.innerHTML = cards
}


/* ---------- Filtrando ------------- */

// Filtro Status

const divText = document.getElementById("percentage-text")

let chooseStatus = document.getElementById("status-filter")
chooseStatus.addEventListener("change", cardStatus)
const jsDocs = data.results

function cardStatus(){ 
  let cards = ""
  const statusQuant = filterStatus(jsDocs, chooseStatus.value).length       
  const calcStatus = Math.round(((statusQuant/493)*100));
  divText.innerHTML = `${calcStatus}% of the characters are ${chooseStatus.value}`

  for(let finder of filterStatus(jsDocs, chooseStatus.value)){
    cards += `
      <div class="all-cards">
        <div class="card-info">
          <div class="card-front">
            <img class="front-pic" src="${finder.image}" alt="">
            <h1>${finder.name}</h1>
          </div>
          <div class="card-back">
            <img class="back-pic" src="${finder.image}" alt="">
            <ul>
              <li>Name: ${finder.name}</li>
              <li>Status: ${finder.status}</li>
              <li>Species: ${finder.species}</li> 
              <li>Type: ${finder.type}</li>
              <li>Gender: ${finder.gender}</li> 
              <li>Origin: ${finder.origin.name}</li>
              <li>Location: ${finder.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards")
  cardsSection.innerHTML = cards
}


// Filtro Gênero

let chooseGender = document.getElementById("gender-filter")
chooseGender.addEventListener("change", cardGender)

function cardGender(){
  let cards = ""
  const genderQuant = filterGender(jsDocs, chooseGender.value).length       
  const calcGender = Math.round(((genderQuant/493)*100));
  divText.innerHTML = `${calcGender}% of the characters are ${chooseGender.value}`

  for(let finder of filterGender(jsDocs, chooseGender.value)){
    cards += `
      <div class="all-cards">
        <div class="card-info">
          <div class="card-front">
            <img class="front-pic" src="${finder.image}" alt="">
            <h1>${finder.name}</h1>
          </div>
          <div class="card-back">
            <img class="back-pic" src="${finder.image}" alt="">
            <ul>
              <li>Name: ${finder.name}</li>
              <li>Status: ${finder.status}</li>
              <li>Species: ${finder.species}</li> 
              <li>Type: ${finder.type}</li>
              <li>Gender: ${finder.gender}</li> 
              <li>Origin: ${finder.origin.name}</li>
              <li>Location: ${finder.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards")
  cardsSection.innerHTML = cards
}


// Filtro de ordenação

divText.innerHTML = ""
const orderFilter = document.getElementById("order-filter")
orderFilter.addEventListener("change", cardOrder)

function cardOrder(){
  let cards = ""

  for(let finder of filterOrder(jsDocs, orderFilter.value)){
    cards += `
      <div class="all-cards">
        <div class="card-info">
          <div class="card-front">
            <img class="front-pic" src="${finder.image}" alt="">
            <h1>${finder.name}</h1>
          </div>
          <div class="card-back">
            <img class="back-pic" src="${finder.image}" alt="">
            <ul>
              <li>Name: ${finder.name}</li>
              <li>Status: ${finder.status}</li>
              <li>Species: ${finder.species}</li> 
              <li>Type: ${finder.type}</li>
              <li>Gender: ${finder.gender}</li> 
              <li>Origin: ${finder.origin.name}</li>
              <li>Location: ${finder.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards")
  cardsSection.innerHTML = cards
}
    

// Filtro com campo de texto
   
const textIn = document.getElementById("data-in")
textIn.addEventListener("keyup", showOptions)

function showOptions(){
  divText.innerHTML = ""
  let cards = ""
  let filterSearch = filterText(jsDocs, textIn.value)

  for(let finder of filterSearch){
  cards += `
    <div class="all-cards">
      <div class="card-info">
        <div class="card-front">
          <img class="front-pic" src="${finder.image}" alt="">
          <h1>${finder.name}</h1>
        </div>
        <div class="card-back">
          <img class="back-pic" src="${finder.image}" alt="">
          <ul>
            <li>Name: ${finder.name}</li>
            <li>Status: ${finder.status}</li>
            <li>Species: ${finder.species}</li> 
            <li>Type: ${finder.type}</li>
            <li>Gender: ${finder.gender}</li> 
            <li>Origin: ${finder.origin.name}</li>
            <li>Location: ${finder.location.name}</li>
          </ul>
        </div>
      </div>  
    </div>`;
  }
  const cardsSection = document.getElementById("get-cards")
  cardsSection.innerHTML = cards
}


/* -----------TESTE------------ */

let characList = { 
  "allList" : [{
      "rickSanchez": 0 ,  "evilMorty" : 0 , "zeepXanflorp": 0 ,
      "spaceBeth" : 0 , "mrPoopyButthole" : 0 , "mrMeeseeks" : 0 ,
      "mortySmith" : 0 , "summerSmith" : 0 , "jerrySmith" : 0 ,
      "tinyRick" : 0
  }]
}

const resultButton = document.getElementById("result-button")
resultButton.addEventListener("click", score)

const testButton = document.getElementById("test-button")
const confirmButton = document.getElementById("next-button")

confirmButton.addEventListener("click", nextQuestion)
testButton.addEventListener("click", showTest)

function showTest() {
/* Paginação do teste */  
  menu1.style.display = "none"
  test.style.display = "block"
  hiding();
  document.getElementById("question1").style.display = "block";
  document.getElementById("current-question").value = 1
}

function hiding(){
  for(let i = 1; i <= 10; i++){
    document.getElementById("question" + i).style.display = "none";
  }
}

function nextQuestion(){
  const questions = 10
  let current = document.getElementById("current-question").value
  if (current >= 1 && current < questions){
    hiding()
    document.getElementById("current-question").value++
    document.getElementById("question" +  document.getElementById("current-question").value).style.display = "block"
  }
}

/* Acumulando pontos */

function score() {
  for(let indice of characList.allList){
    if(document.querySelector("input[name = 'choose-box1']:checked")){
      if (document.querySelector("input[name = 'choose-box1']:checked").value == "1"){
        indice.rickSanchez += 1
        indice.zeepXanflorp += 1
        indice.evilMorty += 1
        indice.spaceBeth += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box1']:checked")){
      if (document.querySelector("input[name = 'choose-box1']:checked").value == "2"){
        indice.mrPoopyButthole += 2
        indice.mrMeeseeks += 1
        indice.tinyRick += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box1']:checked")){
      if (document.querySelector("input[name = 'choose-box1']:checked").value == "3"){
        indice.mortySmith += 1
        indice.summerSmith += 1
        indice.jerrySmith += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box2']:checked")){
      if (document.querySelector("input[name = 'choose-box2']:checked").value == "4"){
        indice.rickSanchez += 2
        indice.zeepXanflorp  += 1
        indice.evilMorty += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box2']:checked")){
      if (document.querySelector("input[name = 'choose-box2']:checked").value == "5"){
        indice.spaceBeth += 1
        indice.mrPoopyButthole += 2
        indice.mrMeeseeks += 1
        indice.tinyRick += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box2']:checked")){
      if (document.querySelector("input[name = 'choose-box2']:checked").value == "6"){
        indice.mortySmith += 1
        indice.summerSmith += 1
        indice.jerrySmith += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box3']:checked")){
      if (document.querySelector("input[name = 'choose-box3']:checked").value == "7"){
        indice.rickSanchez += 1
        indice.evilMorty += 1
        indice.zeepXanflorp+= 1
        indice.spaceBeth += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box3']:checked")){
      if (document.querySelector("input[name = 'choose-box3']:checked").value == "8"){
        indice.summerSmith += 2
      }
    }       

    if(document.querySelector("input[name = 'choose-box3']:checked")){
      if (document.querySelector("input[name = 'choose-box3']:checked").value == "9"){
        indice.mrMeeseeks += 1
        indice.mrPoopyButthole += 1
        indice.mortySmith += 1
        indice.jerrySmith += 1
        indice.tinyRick += 1
      }
    }  

    if(document.querySelector("input[name = 'choose-box4']:checked")){
      if (document.querySelector("input[name = 'choose-box4']:checked").value == "10"){
        indice.evilMorty += 2
        indice.zeepXanflorp += 1
      }
    } 
       
    if(document.querySelector("input[name = 'choose-box4']:checked")){
      if (document.querySelector("input[name = 'choose-box4']:checked").value == "11"){
        indice.rickSanchez += 1
        indice.spaceBeth += 1
        indice.mrPoopyButthole += 1
        indice.mortySmith += 1
        indice.tinyRick += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box4']:checked")){
      if (document.querySelector("input[name = 'choose-box4']:checked").value == "12"){
        indice.summerSmith += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box5']:checked")){
      if (document.querySelector("input[name = 'choose-box5']:checked").value == "13"){
        indice.evilMorty += 2
        indice.zeepXanflorp += 2
      }
    }  
       
    if(document.querySelector("input[name = 'choose-box5']:checked")){
      if (document.querySelector("input[name = 'choose-box5']:checked").value == "14"){
        indice.spaceBeth += 1
        indice.mrPoopyButthole += 1
        indice.tinyRick += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box5']:checked")){
      if (document.querySelector("input[name = 'choose-box5']:checked").value == "15"){
        indice.rickSanchez += 1
        indice.mortySmith += 1
        indice.jerrySmith += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box6']:checked")){
      if (document.querySelector("input[name = 'choose-box6']:checked").value == "16"){
        indice.rickSanchez += 1
        indice.evilMorty += 1
        indice.spaceBeth += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box6']:checked")){
      if (document.querySelector("input[name = 'choose-box6']:checked").value == "17"){
        indice.mrMeeseeks += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box6']:checked")){
      if (document.querySelector("input[name = 'choose-box6']:checked").value == "18"){
        indice.mortySmith += 1
        indice.summerSmith += 1
        indice.jerrySmith += 1
        indice.zeepXanflorp  += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box7']:checked")){
      if (document.querySelector("input[name = 'choose-box7']:checked").value == "19"){
        indice.rickSanchez += 1
        indice.spaceBeth += 1
        indice.mrPoopyButthole += 1   
      }
    }

    if(document.querySelector("input[name = 'choose-box7']:checked")){
      if (document.querySelector("input[name = 'choose-box7']:checked").value == "20"){
        indice.mrMeeseeks += 3
        indice.tinyRick += 1
      } 
    }

    if(document.querySelector("input[name = 'choose-box7']:checked")){
      if (document.querySelector("input[name = 'choose-box7']:checked").value == "21"){
        indice.mortySmith += 1
        indice.summerSmith += 1
        indice.jerrySmith += 1
      }
    }

    if(document.querySelector("input[name = 'choose-box8']:checked")){
      if (document.querySelector("input[name = 'choose-box8']:checked").value == "22"){
        indice.spaceBeth += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box8']:checked")){
      if (document.querySelector("input[name = 'choose-box8']:checked").value == "23"){
        indice.jerrySmith += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box8']:checked")){
      if (document.querySelector("input[name = 'choose-box8']:checked").value == "24"){
        indice.mortySmith += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box9']:checked")){
      if (document.querySelector("input[name = 'choose-box9']:checked").value == "25"){
        indice.mrMeeseeks += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box9']:checked")){
      if (document.querySelector("input[name = 'choose-box9']:checked").value == "26"){
        indice.rickSanchez += 2
      }
    }

    if(document.querySelector("input[name = 'choose-box9']:checked")){
      if (document.querySelector("input[name = 'choose-box9']:checked").value == "27"){
        indice.evilMorty += 2
        indice.zeepXanflorp += 2 
      }
    }
    // console.log("Rick: " + indice.rickSanchez, "Evil Morty: " + indice.evilMorty, "Zeep: " + indice.zeepXanflorp, "Space Beth: " + indice.spaceBeth,"Sr. Meeseeks: " + indice.mrMeeseeks, "Sr.Bunda Cagada: " + indice.mrPoopyButthole, "Tiny Rick: " + indice.tinyRick, "Morty: " + indice.mortySmith, "Jerry: " + indice.jerrySmith, "summer: " + indice.summerSmith)
  }
}


/* Mostrando o resultado */

const testResult = document.getElementById("result-button")
testResult.addEventListener("click", showResult)

function showResult(){
  const picResult = document.getElementById("pics-result")
  const menuResult = document.getElementById("result-test")
  menuResult.style.display = "inline-block"
  confirmButton.style.display = "none"
  testResult.style.display = "none"

  for(let i of characList.allList){
    if(i.rickSanchez > i.evilMorty && i.rickSanchez > i.zeepXanflorp && i.rickSanchez > i.spaceBeth && i.rickSanchez > i.mrPoopyButthole && i.rickSanchez > i.mrMeeseeks && i.rickSanchez > i.mortySmith && i.rickSanchez > i.jerrySmith && i.rickSanchez > i.summerSmith){
      menuResult.innerHTML = "Rick Sanchez <br><br> Main charateristics: Intelligence and selfishness <br><br> Rick is extremely intelligent. In his youth he was an adventurer of the galaxies, but currently he just wants to live in peace and to use his intelligence to create things for his own benefit. Although he likes high-risk adventures, he thinks it is foolishness to risk his own life to help someone or some planet that is not of his interest."
      picResult.src = "./teste-personalidadeRM/img-test/rick.jpg"         
    }
    
    else if (i.zeepXanflorp > i.evilMorty && i.zeepXanflorp > i.rickSanchez && i.zeepXanflorp > i.spaceBeth && i.zeepXanflorp > i.mrPoopyButthole && i.zeepXanflorp > i.mrMeeseeks && i.zeepXanflorp > i.mortySmith && i.zeepXanflorp > i.jerrySmith && i.zeepXanflorp > i.summerSmith && i.zeepXanflorp > i.tinyRick){
      menuResult.innerHTML = "Zeep Xanflorp <br><br> Main charateristics: Intelligence and selfishness <br><br> Zeep has exactly the same profile as Rick Sanchez, the difference is that the scientist of the microverse (universe created by Rick to generate energy for his ship's battery) does not know about the existence of the outside world. This fact limits him to using his intelligence to create things that make himself important."
      picResult.src = "./teste-personalidadeRM/img-test/zeep.jpg"
    }

    else if (i.evilMorty > i.rickSanchez && i.evilMorty > i.zeepXanflorp && i.evilMorty > i.spaceBeth && i.evilMorty > i.mrPoopyButthole && i.evilMorty > i.mrMeeseeks && i.evilMorty > i.mortySmith && i.evilMorty > i.jerrySmith && i.evilMorty > i.summerSmith && i.evilMorty > i.tinyRick){
      menuResult.innerHTML = "Evil Morty <br><br> Main charateristics: Disruptive and bloodthirsty <br><br> Evil Morty is a Morty version that won the presidency at the Citadel for proposing equality between Ricks and Mortys. Although he is totally ahead of the curve for a standard Morty, he uses his speech for evil and tries to achieve his goals using violence."
      picResult.src = "./teste-personalidadeRM/img-test/evil-morty.png"
    }

    else if (i.spaceBeth > i.evilMorty && i.spaceBeth > i.zeepXanflorp && i.spaceBeth > i.rickSanchez && i.spaceBeth > i.mrPoopyButthole && i.spaceBeth > i.mrMeeseeks && i.spaceBeth > i.mortySmith && i.spaceBeth > i.jerrySmith && i.spaceBeth > i.summerSmith && i.spaceBeth > i.tinyRick){
      menuResult.innerHTML = "Space Beth <br><br> Main charateristics: Courage and indifference <br><br> Space Beth is Rick's real daughter (or not). She abandoned everything to live adventures in the dimensions, she thinks life on Earth boring and has that 'Young Rick' vibe, engaged in missions and fighting against evil."
      picResult.src = "./teste-personalidadeRM/img-test/beth.png"
    }

    else if (i.mrMeeseeks > i.evilMorty && i.mrMeeseeks > i.zeepXanflorp && i.mrMeeseeks > i.spaceBeth && i.mrMeeseeks > i.mrPoopyButthole && i.mrMeeseeks > i.rickSanchez && i.mrMeeseeks > i.mortySmith && i.mrMeeseeks > i.jerrySmith && i.mrMeeseeks > i.summerSmith && i.mrMeeseeks > i.tinyRick){
      menuResult.innerHTML = "Mr. Meeseeks <br><br> Main charateristics: Determination and self-destruction <br><br> Mr. Meeseeks is a rare creature that lives inside a wish box. His only purpose is to fulfill the wish of that one who activated the box, so he can finally die. Death is part of his natural cycle and he not only sees it in a positive way, but seeks it ceaselessly. Living for a long time bothers him and what he wants the most is to accomplish his goal as soon as possible."
      picResult.src = "./teste-personalidadeRM/img-test/mr-meeseeks.jpg"
    }
    
    else if (i.mrPoopyButthole > i.evilMorty && i.mrPoopyButthole > i.zeepXanflorp && i.mrPoopyButthole > i.spaceBeth && i.mrPoopyButthole > i.rickSanchez && i.mrPoopyButthole > i.mrMeeseeks && i.mrPoopyButthole > i.mortySmith && i.mrPoopyButthole > i.jerrySmith && i.mrPoopyButthole > i.summerSmith && i.mrPoopyButthole > i.tinyRick){
      menuResult.innerHTML = "Mr. Poopybutthole <br><br> Main charateristics: Determination e loyalty <br><br> Mr. Poopybutthole is a superstar in his original dimension, he took refuge with the Smiths to try to live a normal life. He likes to make people around him happy. He is a character that deceives by appearance, although he is cute and friendly, this little guy has incredible strength. He loves adventures and he is always willing to help his friends."
      picResult.src = "./teste-personalidadeRM/img-test/poopybuthole.jpg"
    }

    else if (i.mortySmith > i.evilMorty && i.mortySmith > i.zeepXanflorp && i.mortySmith > i.spaceBeth && i.mortySmith > i.mrPoopyButthole && i.mortySmith > i.mrMeeseeks && i.mortySmith > i.rickSanchez && i.mortySmith > i.jerrySmith && i.mortySmith > i.summerSmith && i.mortySmith > i.tinyRick){
      menuResult.innerHTML = "Morty Smith <br><br> Main charateristics: Generosity and insecurity <br><br> Morty Smith is Rick's grandson. Although he is not so smart as his grandfather, Morty collaborates devotedly in tasks that were given to him. Unlike his grandfather, he is very generous and he is always willing to help. Falls in love easily and tends to follow his heart more than reason."
      picResult.src = "./teste-personalidadeRM/img-test/morty.jpeg"
    }

    else if (i.jerrySmith > i.evilMorty && i.jerrySmith > i.zeepXanflorp && i.jerrySmith > i.spaceBeth && i.jerrySmith > i.mrPoopyButthole && i.jerrySmith > i.mrMeeseeks && i.jerrySmith > i.rickSanchez && i.jerrySmith > i.mortySmith && i.jerrySmith > i.summerSmith && i.jerrySmith > i.tinyRick){
      menuResult.innerHTML = "Jerry Smith <br><br> Main charateristics: Narcissism and insecurity <br><br> Jerry Smith is Rick's son-in-law. He makes a point of taking care of his family and always takes a position when Rick threatens his position as a patriarch. He wants to have a good job and be successful. He tries to neutralize his insecurity with an excess of confidence, but he gives up easily when his goals stress him out too much. Although the series emphasizes that his intelligence is not that great, it makes him see the world with more positivity and, consequently, be happier."
      picResult.src = "./teste-personalidadeRM/img-test/jerry.jpg"
    }

    else if (i.summerSmith > i.evilMorty && i.summerSmith > i.zeepXanflorp && i.summerSmith > i.spaceBeth && i.summerSmith > i.mrPoopyButthole && i.summerSmith > i.mrMeeseeks && i.summerSmith > i.rickSanchez && i.summerSmith > i.jerrySmith && i.summerSmith > i.mortySmith && i.summerSmith > i.tinyRick){
      menuResult.innerHTML = "Summer Smith <br><br> Main charateristics: Vanity and narcissism <br><br> Summer Smith is Rick's oldest granddaughter. She is the typical American teenager, who seeks popularity and loves social networks. Despite the stereotype, Summer is more courageous than Morty and manages to be more rational in situations of stress if compared to her younger brother."
      picResult.src = "./teste-personalidadeRM/img-test/summer.jpg"
    }

    else if (i.tinyRick > i.evilMorty && i.tinyRick > i.zeepXanflorp && i.tinyRick > i.spaceBeth && i.tinyRick > i.mrPoopyButthole && i.tinyRick > i.mrMeeseeks && i.tinyRick > i.rickSanchez && i.tinyRick > i.jerrySmith && i.tinyRick > i.mortySmith && i.tinyRick > i.summerSmith){
      menuResult.innerHTML = "Tiny Rick <br><br> Main charateristics: Determination and self-destruction <br><br> Tiny Rick is a young clone of Rick, used to get to join his grandchildren's school and help them with a mission. Tiny Rick has the same characteristics as Rick, and because he is still young he is more positive and altruistic than his older version. However, his conscience still has traces of old-Rick, which makes him have self-destructive thoughts eventually."
      picResult.src = "./teste-personalidadeRM/img-test/tiny-rick.jpg"
    }

    else {  menuResult.innerHTML = "Tiny Rick <br><br> Main charateristics: Determination and self-destruction <br><br> Tiny Rick is a young clone of Rick, used to get to join his grandchildren's school and help them with a mission. Tiny Rick has the same characteristics as Rick, and because he is still young he is more positive and altruistic than his older version. However, his conscience still has traces of old-Rick, which makes him have self-destructive thoughts eventually."
    picResult.src = "./teste-personalidadeRM/img-test/tiny-rick.jpg"
    }
  }
}






/* --------------MENU E BOTÕES MOBILE VERSION--------------- */

const changeFilter = document.getElementById("return-filters")
changeFilter.addEventListener("click", showMobiFilters)

const menu1Mobi = document.getElementById("menu1-mobile")
const charactersButtonMobi = document.getElementById("button-charac-mobile")

charactersButtonMobi.addEventListener("click" , showMobiFilters)
const allMobiFilters = document.getElementById("select-filter-mobile")

function showMobiFilters() {
  allMobiFilters.style.display = "flex"
  menu1Mobi.style.display = "block"
  changeFilter.style.display = "none"

  const cardsSection = document.getElementById("get-cards-mobile")
  cardsSection.innerHTML = ""
  divTextMobi.innerHTML = ""
}


// Mostrar todos os personagens

const allButtonMobi = document.getElementById("all-button-mobile")
allButtonMobi.addEventListener("click", showMobiCharac)

function showMobiCharac(){
  allMobiFilters.style.display = "none"
  changeFilter.style.display = "inline"
  let cards = ""
  
	for (let character of data.results){
    cards += `
      <div class="all-cards-mobile">
        <div class="card-info-mobile">
          <div class="card-front-mobile">
            <img class="front-pic-mobile" src="${character.image}" alt="">
            <h1>${character.name}</h1>
          </div>
          <div class="card-back-mobile">
            <img class="back-pic-mobile" src="${character.image}" alt="">
            <ul>
              <li>Name: ${character.name}</li>
              <li>Status: ${character.status}</li>
              <li>Species: ${character.species}</li> 
              <li>Type: ${character.type}</li>
              <li>Gender: ${character.gender}</li> 
              <li>Origin: ${character.origin.name}</li>
              <li>Location: ${character.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards-mobile")
  cardsSection.innerHTML = cards
}


/* ---------- Filtrando ------------- */

// Filtro Status

const divTextMobi = document.getElementById("percentage-text-mobile")

let chooseStatusMobi = document.getElementById("status-filter-mobile")
chooseStatusMobi.addEventListener("change", cardMobiStatus)

function cardMobiStatus(){ 
  allMobiFilters.style.display = "none"
  changeFilter.style.display = "inline"
  let cards = ""
  
  const statusQuant = filterStatus(jsDocs,chooseStatusMobi.value).length       
  const calcStatus = Math.round(((statusQuant/493)*100));
  divTextMobi.innerHTML = `${calcStatus}% of the characters are ${chooseStatusMobi.value}`

  for(let finder of filterStatus(jsDocs, chooseStatusMobi.value)){
    cards += `
      <div class="all-cards-mobile">
        <div class="card-info-mobile">
          <div class="card-front-mobile">
            <img class="front-pic-mobile" src="${finder.image}" alt="">
            <h1>${finder.name}</h1>
          </div>
          <div class="card-back-mobile">
            <img class="back-pic-mobile" src="${finder.image}" alt="">
            <ul>
              <li>Name: ${finder.name}</li>
              <li>Status: ${finder.status}</li>
              <li>Species: ${finder.species}</li> 
              <li>Type: ${finder.type}</li>
              <li>Gender: ${finder.gender}</li> 
              <li>Origin: ${finder.origin.name}</li>
              <li>Location: ${finder.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards-mobile")
  cardsSection.innerHTML = cards
}


// Filtro Gênero

let chooseGenderMobi = document.getElementById("gender-filter-mobile")
chooseGenderMobi.addEventListener("change", cardMobiGender)

function cardMobiGender(){
  allMobiFilters.style.display = "none"
  changeFilter.style.display = "inline"
  let cards = ""

  const genderQuant = filterGender(jsDocs, chooseGenderMobi.value).length       
  const calcGender = Math.round(((genderQuant/493)*100));
  divTextMobi.innerHTML = `${calcGender}% of the characters are ${chooseGenderMobi.value}`

  for(let finder of filterGender(jsDocs, chooseGenderMobi.value)){
    cards += `
      <div class="all-cards-mobile">
        <div class="card-info-mobile">
          <div class="card-front-mobile">
            <img class="front-pic-mobile" src="${finder.image}" alt="">
            <h1>${finder.name}</h1>
          </div>
          <div class="card-back-mobile">
            <img class="back-pic-mobile" src="${finder.image}" alt="">
            <ul>
              <li>Name: ${finder.name}</li>
              <li>Status: ${finder.status}</li>
              <li>Species: ${finder.species}</li> 
              <li>Type: ${finder.type}</li>
              <li>Gender: ${finder.gender}</li> 
              <li>Origin: ${finder.origin.name}</li>
              <li>Location: ${finder.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards-mobile")
  cardsSection.innerHTML = cards
}

// Filtro de ordenação

divText.innerHTML = ""
const orderFilterMobi = document.getElementById("order-filter-mobile")
orderFilterMobi.addEventListener("change", cardMobiOrder)

function cardMobiOrder(){
  allMobiFilters.style.display = "none"
  changeFilter.style.display = "inline"
  let cards = ""

  for(let finder of filterOrder(jsDocs, orderFilterMobi)){
    cards += `
      <div class="all-cards-mobile">
        <div class="card-info-mobile">
          <div class="card-front-mobile">
            <img class="front-pic-mobile" src="${finder.image}" alt="">
            <h1>${finder.name}</h1>
          </div>
          <div class="card-back-mobile">
            <img class="back-pic-mobile" src="${finder.image}" alt="">
            <ul>
              <li>Name: ${finder.name}</li>
              <li>Status: ${finder.status}</li>
              <li>Species: ${finder.species}</li> 
              <li>Type: ${finder.type}</li>
              <li>Gender: ${finder.gender}</li> 
              <li>Origin: ${finder.origin.name}</li>
              <li>Location: ${finder.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards-mobile")
  cardsSection.innerHTML = cards
}


// Filtro com campo de texto
/*
const textInMobi = document.getElementById("data-in-mobile")
textInMobi.addEventListener("keyup", showMobiOptions)

function showMobiOptions(){
  allMobiFilters.style.display = "none"
  changeFilter.style.display = "inline"
  divTextMobi.innerHTML = ""

  let filterSearch = filterText(jsDocs, textInMobi)
  let cards = ""

  for(let finder of filterSearch){
    cards += `
      <div class="all-cards-mobile">
        <div class="card-info-mobile">
          <div class="card-front-mobile">
            <img class="front-pic-mobile" src="${finder.image}" alt="">
            <h1>${finder.name}</h1>
          </div>
          <div class="card-back-mobile">
            <img class="back-pic-mobile" src="${finder.image}" alt="">
            <ul>
              <li>Name: ${finder.name}</li>
              <li>Status: ${finder.status}</li>
              <li>Species: ${finder.species}</li> 
              <li>Type: ${finder.type}</li>
              <li>Gender: ${finder.gender}</li> 
              <li>Origin: ${finder.origin.name}</li>
              <li>Location: ${finder.location.name}</li>
            </ul>
          </div>
        </div>  
      </div>`;
  }
  const cardsSection = document.getElementById("get-cards-mobile")
  cardsSection.innerHTML = cards
} */
