
const controllo = [];

const creaTabellone = function (){
    const tabellone = document.querySelector('#tabellone')
    for(i = 1 ; i <= 76 ; i++){
        let cella = `<div id="${i}"><p>${i}</p></div>`
        tabellone.innerHTML += cella;

    }
}
creaTabellone();

const randomNumber = function (){
    let randomNumber = Math.floor(Math.random()*77)+1;
    if(!controllo.includes(randomNumber)){
        controllo.push(randomNumber)

        let selectedCell1 = document.getElementById(randomNumber);
        let selectedCell2 = document.getElementsByClassName(`${randomNumber}`);
        selectedCell1.classList.add('marcato')
        selectedCell2[0].classList.add('marcato')
        let numeroEstratto = document.querySelector('p');
        numeroEstratto.innerText = `Il numero estratto è: ${randomNumber}`
    }
    }



    let button = document.querySelectorAll('button');
    button[0].addEventListener('click' , randomNumber)



    const schedeGioco = function (){
    let numeroSchede = document.querySelector('input');
    let postoSchede = document.querySelector('#partita > div')
    for( i=0 ; i < numeroSchede.value ; i++ ){
        let scheda = document.createElement('section');
        postoSchede.appendChild(scheda);
        for(x = 0 ; x <= 24 ; x++){
            let newRandom = Math.floor(Math.random()*77)+1;
            let cella = `<div class="${newRandom}"><p>${newRandom}</p></div>`
            scheda.innerHTML += cella;
        }
    }    
    }

    button[1].addEventListener('click' , schedeGioco)