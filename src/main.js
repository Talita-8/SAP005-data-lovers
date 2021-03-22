import { filterStatus, filterGender, filterText, filterOrder } from './data.js';

import { characList, quizRm, resultScreenTest } from './teste-personalidadeRM/quiz.js'

import data from './data/rickandmorty/rickandmorty.js';


// Habilitando menu de filtros

const test = document.getElementById("questions-area")
const menuCharac = document.getElementById("menu-charac")

const charactersButton = document.getElementById("characters-button")
charactersButton.addEventListener("click", showFilters)

const allFilters = document.getElementById("select-filter")

const widthViewport = window.innerWidth

const changeFilter = document.getElementById("return-filters")
changeFilter.addEventListener("click", backFilterMenu)


function backFilterMenu(){

  const cardsSection = document.getElementById("get-cards")
  cardsSection.style.display = "none"
  cardsSection.innerHTML = ""

  changeFilter.style.display = "none"
  allFilters.style.display = "flex"
  divText.innerHTML = ""

}

function showFilters(){
  allFilters.style.display = "flex"
  menuCharac.style.display = "flex"
  divText.style.display = "block"
  test.style.display = "none"

  let cards = ""

  if( widthViewport >= 500) {
    divText.innerHTML = ""
  
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
    cardsSection.style.display = "flex"
    cardsSection.innerHTML = cards
  }
}


// Mostrar todos os personagens

const allButton = document.getElementById("all-button")
allButton.addEventListener("click", showCharacters)

function showCharacters(){
  test.style.display = "none"

  divText.innerHTML = ""
  let cards = ""
  
  document.getElementById("status-filter").value = "none"
  document.getElementById("order-filter").value = "none"
  document.getElementById("gender-filter").value = "none"
  
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
  cardsSection.style.display = "flex"
  cardsSection.innerHTML = cards
  
  if( widthViewport <= 500) {
    allFilters.style.display = "none"
    changeFilter.style.display = "flex"
  }
}

/* ---------- Filtrando ------------- */

// Filtro Status

const divText = document.getElementById("percentage-text")

let chooseStatus = document.getElementById("status-filter")
chooseStatus.addEventListener("change", cardStatus)
const jsDocs = data.results

function cardStatus(){ 

  document.getElementById("gender-filter").value = "none"
  document.getElementById("order-filter").value = "none"

  const statusQuant = filterStatus(jsDocs, chooseStatus.value).length       
  const calcStatus = Math.round(((statusQuant/493)*100));
  divText.innerHTML = `${calcStatus}% of the characters are ${chooseStatus.value}`
  let cards = ""

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
  cardsSection.style.display = "flex"
  cardsSection.innerHTML = cards

  if( widthViewport <= 500) {
    allFilters.style.display = "none"
    changeFilter.style.display = "flex"
  }
}


// Filtro Gênero

let chooseGender = document.getElementById("gender-filter")
chooseGender.addEventListener("change", cardGender)

function cardGender(){
  document.getElementById("status-filter").value = "none"
  document.getElementById("order-filter").value = "none"


  const genderQuant = filterGender(jsDocs, chooseGender.value).length       
  const calcGender = Math.round(((genderQuant/493)*100));
  divText.innerHTML = `${calcGender}% of the characters are ${chooseGender.value}`
  let cards = ""

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
  cardsSection.style.display = "flex"
  cardsSection.innerHTML = cards

  if( widthViewport <= 500) {
    allFilters.style.display = "none"
    changeFilter.style.display = "flex"
  }
}


// Filtro de ordenação

divText.innerHTML = ""
const orderFilter = document.getElementById("order-filter")
orderFilter.addEventListener("change", cardOrder)


function cardOrder(){
  let cards = ""

  document.getElementById("status-filter").value = "none"
  document.getElementById("gender-filter").value = "none"

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
  cardsSection.style.display = "flex"
  cardsSection.innerHTML = cards

  if( widthViewport <= 500) {
    allFilters.style.display = "none"
    changeFilter.style.display = "flex"
  }
}
    

// Filtro com campo de texto
   
const textIn = document.getElementById("data-in")
textIn.addEventListener("keyup", showOptions)

function showOptions(){
  divText.innerHTML = ""
  let filterSearch = filterText(jsDocs, textIn.value)
  let cards = ""

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
  cardsSection.style.display = "flex"
  cardsSection.innerHTML = cards
}




/* -----------TESTE------------ */


const testButton = document.getElementById("test-button")
testButton.addEventListener("click", showTest)

function showTest() {
/* Paginação do teste */  
  menuCharac.style.display = "none"
  test.style.display = "block"
  divText.style.display = "none"

  test.innerHTML = `<input type="hidden" id="current-question" value="">`

  let counter = 1
  let increase = 1

  for(let i = 1; i <= 9; i++ ){
    test.innerHTML += `
      <div id="question${i}" class="question-box">
        <h1> Which Rick and Morty's character would you be? </h1>
        <p> ${quizRm.questions[i]}</p>
        <input name="choose-box${i}" value="${counter++}" type="radio">
        <label for""> ${quizRm.answers[increase++]} </label>
        <input name="choose-box${i}" value="${counter++}" type="radio">
        <label for""> ${quizRm.answers[increase++]} </label>
        <input name="choose-box${i}" value="${counter++}" type="radio">
        <label for""> ${quizRm.answers[increase++]} </label> 
      </div>`
  }

  test.innerHTML += `
    <div id="question10" class="question-box-result">
      <div id="pics-container">
        <img id="pics-result" src="#" alt="">
      </div>
      <div id="result-test"></div>
    </div>`

  const confirmButton = document.getElementById("next-button")
  confirmButton.style.display = "block"
  hiding();
  document.getElementById("question1").style.display = "block";
  document.getElementById("current-question").value = 1
}


const confirmButton = document.getElementById("next-button")
confirmButton.addEventListener("click", nextQuestion)

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
  if(current == 9){
    document.getElementById("question10").style.display = "none"
    document.getElementById("result-button").style.display = "flex"
  }
}

/* Acumulando pontos */

const resultButton = document.getElementById("result-button")
resultButton.addEventListener("click", score)

function score() {
  
  if(document.querySelector("input[name = 'choose-box1']:checked")){
    if (document.querySelector("input[name = 'choose-box1']:checked").value == "1"){
      characList.rickSanchez += 1
      characList.zeepXanflorp += 1
      characList.evilMorty += 1
      characList.spaceBeth += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box1']:checked")){
    if (document.querySelector("input[name = 'choose-box1']:checked").value == "2"){
      characList.mrPoopyButthole += 2
      characList.mrMeeseeks += 1
      characList.tinyRick += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box1']:checked")){
    if (document.querySelector("input[name = 'choose-box1']:checked").value == "3"){
      characList.mortySmith += 1
      characList.summerSmith += 1
      characList.jerrySmith += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box2']:checked")){
    if (document.querySelector("input[name = 'choose-box2']:checked").value == "4"){
      characList.rickSanchez += 2
      characList.zeepXanflorp  += 1
      characList.evilMorty += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box2']:checked")){
    if (document.querySelector("input[name = 'choose-box2']:checked").value == "5"){
      characList.spaceBeth += 1
      characList.mrPoopyButthole += 2
      characList.mrMeeseeks += 1
      characList.tinyRick += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box2']:checked")){
    if (document.querySelector("input[name = 'choose-box2']:checked").value == "6"){
      characList.mortySmith += 1
      characList.summerSmith += 1
      characList.jerrySmith += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box3']:checked")){
    if (document.querySelector("input[name = 'choose-box3']:checked").value == "7"){
      characList.rickSanchez += 1
      characList.evilMorty += 1
      characList.zeepXanflorp+= 1
      characList.spaceBeth += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box3']:checked")){
    if (document.querySelector("input[name = 'choose-box3']:checked").value == "8"){
      characList.summerSmith += 2
    }
  }       

  if(document.querySelector("input[name = 'choose-box3']:checked")){
    if (document.querySelector("input[name = 'choose-box3']:checked").value == "9"){
      characList.mrMeeseeks += 1
      characList.mrPoopyButthole += 1
      characList.mortySmith += 1
      characList.jerrySmith += 1
      characList.tinyRick += 1
    }
  }  

  if(document.querySelector("input[name = 'choose-box4']:checked")){
    if (document.querySelector("input[name = 'choose-box4']:checked").value == "10"){
      characList.evilMorty += 2
      characList.zeepXanflorp += 1
    }
  } 
      
  if(document.querySelector("input[name = 'choose-box4']:checked")){
    if (document.querySelector("input[name = 'choose-box4']:checked").value == "11"){
      characList.rickSanchez += 1
      characList.spaceBeth += 1
      characList.mrPoopyButthole += 1
      characList.mortySmith += 1
      characList.tinyRick += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box4']:checked")){
    if (document.querySelector("input[name = 'choose-box4']:checked").value == "12"){
      characList.summerSmith += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box5']:checked")){
    if (document.querySelector("input[name = 'choose-box5']:checked").value == "13"){
      characList.evilMorty += 2
      characList.zeepXanflorp += 2
    }
  }  
      
  if(document.querySelector("input[name = 'choose-box5']:checked")){
    if (document.querySelector("input[name = 'choose-box5']:checked").value == "14"){
      characList.spaceBeth += 1
      characList.mrPoopyButthole += 1
      characList.tinyRick += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box5']:checked")){
    if (document.querySelector("input[name = 'choose-box5']:checked").value == "15"){
      characList.rickSanchez += 1
      characList.mortySmith += 1
      characList.jerrySmith += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box6']:checked")){
    if (document.querySelector("input[name = 'choose-box6']:checked").value == "16"){
      characList.rickSanchez += 1
      characList.evilMorty += 1
      characList.spaceBeth += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box6']:checked")){
    if (document.querySelector("input[name = 'choose-box6']:checked").value == "17"){
      characList.mrMeeseeks += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box6']:checked")){
    if (document.querySelector("input[name = 'choose-box6']:checked").value == "18"){
      characList.mortySmith += 1
      characList.summerSmith += 1
      characList.jerrySmith += 1
      characList.zeepXanflorp  += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box7']:checked")){
    if (document.querySelector("input[name = 'choose-box7']:checked").value == "19"){
      characList.rickSanchez += 1
      characList.spaceBeth += 1
      characList.mrPoopyButthole += 1   
    }
  }

  if(document.querySelector("input[name = 'choose-box7']:checked")){
    if (document.querySelector("input[name = 'choose-box7']:checked").value == "20"){
      characList.mrMeeseeks += 3
      characList.tinyRick += 1
    } 
  }

  if(document.querySelector("input[name = 'choose-box7']:checked")){
    if (document.querySelector("input[name = 'choose-box7']:checked").value == "21"){
      characList.mortySmith += 1
      characList.summerSmith += 1
      characList.jerrySmith += 1
    }
  }

  if(document.querySelector("input[name = 'choose-box8']:checked")){
    if (document.querySelector("input[name = 'choose-box8']:checked").value == "22"){
      characList.spaceBeth += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box8']:checked")){
    if (document.querySelector("input[name = 'choose-box8']:checked").value == "23"){
      characList.jerrySmith += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box8']:checked")){
    if (document.querySelector("input[name = 'choose-box8']:checked").value == "24"){
      characList.mortySmith += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box9']:checked")){
    if (document.querySelector("input[name = 'choose-box9']:checked").value == "25"){
      characList.mrMeeseeks += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box9']:checked")){
    if (document.querySelector("input[name = 'choose-box9']:checked").value == "26"){
      characList.rickSanchez += 2
    }
  }

  if(document.querySelector("input[name = 'choose-box9']:checked")){
    if (document.querySelector("input[name = 'choose-box9']:checked").value == "27"){
      characList.evilMorty += 2
      characList.zeepXanflorp += 2 
    }
  }
  // console.log("Rick: " + characList.rickSanchez, "Evil Morty: " + characList.evilMorty, "Zeep: " + characList.zeepXanflorp, "Space Beth: " + characList.spaceBeth,"Sr. Meeseeks: " + characList.mrMeeseeks, "Sr.Bunda Cagada: " + characList.mrPoopyButthole, "Tiny Rick: " + characList.tinyRick, "Morty: " + characList.mortySmith, "Jerry: " + characList.jerrySmith, "summer: " + characList.summerSmith)
}



/* Mostrando o resultado */

const testResult = document.getElementById("result-button")
testResult.addEventListener("click", showResult)

function showResult(){
  document.getElementById("question10").style.display = "flex"
  const picResult = document.getElementById("pics-result")
  const menuResult = document.getElementById("result-test")
  menuResult.style.display = "inline-block"
  confirmButton.style.display = "none"
  testResult.style.display = "none"


  const points = Object.entries(characList)
  const pointsOrder = points.sort(function(a, b){
    return b[1] - a[1]
  })

  const namesCharac = Object.entries(resultScreenTest)
  const searchFirst = namesCharac.filter(first => first.includes(pointsOrder[0][0]))
  // console.log(searchFirst)
  // console.log(pointsOrder)
  // console.log(namesCharac)
  menuResult.innerHTML = `${searchFirst[0][1][0]}`
  picResult.src = `${searchFirst[0][1][1]}`
}