/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("");
console.log("-------Esercizio A -----------");
var sum;
sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("");
console.log("-------Esercizio B -----------");

var random;
random = Math.floor(Math.random()*21);
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("");
console.log("-------Esercizio C -----------");
let me;
me = {
  nome: "Alvise",
  surname: "Veneziano",
  age: 34,
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("");
console.log("-------Esercizio D -----------");
delete me.name;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
{
let me = {
    nome: "Alvise",
    surname: "Veneziano",
    age: 34,
  }
console.log("");
console.log("-------Esercizio E -----------");
me.skills = ["Html: anche se non lo è"];
console.log(me);
}

// --------------------- oggetto ripetuto e chiuso in diversi scope per dismostrare la funzionalità dei singoli esercizi nel console log----------

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("");
console.log("-------Esercizio F -----------");

{

let me = {
    nome: "Alvise",
    surname: "Veneziano",
    age: 34,
    skills: ["Html: anche se non lo è"]
  }

function add(obj, skill){
  obj.skills.push(skill);
  }
  add(me, "javascript")
console.log(me);
}

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("");
console.log("-------Esercizio G -----------");
{

  let me = {
      nome: "Alvise",
      surname: "Veneziano",
      age: 34,
      skills: ["Html: anche se non lo è"]
    }
    function remove(obj){
      obj.skills.pop();
      }

    remove(me)
    console.log(me);
    
  }


// Funzioni



/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("");
console.log("-------Esercizio 1 -----------");

const dice = function(){
  let dado = Math.floor(Math.random()*7);
  return dado;
}

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("");
console.log("-------Esercizio 2 -----------");

const whoIsBigger = function(x , y){
  if( x > y){
    console.log(`${x} è il numero più grande`);
  }
  else{
    console.log(`${y} è il numero più grande`);
  }
}
whoIsBigger(5 , 3)

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("");
console.log("-------Esercizio 3 -----------");

const splitMe = function(string){
  result = string.split(" ");
  return result;
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("");
console.log("-------Esercizio 4 -----------");

const deleteOne = function(string , booleano){
  if(booleano == true){
  result = string.slice(1);
  return result;
  }
  else{
    result = string.slice(0, string.length-1);
    return result;
  }
}

console.log(deleteOne("I love coding", true));
console.log(deleteOne("I love coding", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("");
console.log("-------Esercizio 5 -----------");

const onlyLetters= function(string){
  let cleanString = string.replace(/\d/g, "");
  return cleanString;
}
console.log(onlyLetters("I have 4 dogs"));


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("");
console.log("-------Esercizio 6 -----------");

const isThisAnEmail= function(string){
  let et = string.includes("@");
  let dotIt = string.includes(".it")
  let dotCom = string.includes(".com")
  if(et && (dotIt || dotCom ) == true ){
    console.log("La mail inserita è valida");
  }
  else{
    console.log("Il valore inserito non è una mail valida");
  }
}

isThisAnEmail("veneziano@gmail.com");
isThisAnEmail("veneziano@gmail.it");
isThisAnEmail("venezianogmail.it");
isThisAnEmail("veneziano@gmail");



/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("");
console.log("-------Esercizio 7 -----------");

const whatDayIsIt = function(){
  let days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
  let day = new Date;
  let dayIndex = day.getDay();
  let today = days[dayIndex-1];
  return today;
}
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("");
console.log("-------Esercizio 8 -----------");

const rollTheDices = function(numberOfDices){
  tiri = {
    sum:0,
    values: [],
  }

  for(i = 0; i< numberOfDices; i++){
      let dado = dice();
      tiri.sum += dado;
      tiri.values.push(dado)
  }
}

rollTheDices(7);
console.log(tiri);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("");
console.log("-------Esercizio 9 -----------");

const howManyDays = function (x){
    let today = new Date(x);
    today.getTime();
    let yearStart = new Date("2023-01-01");
    yearStart.getTime();
    let numberOfDays = ((today - yearStart)/ 86400000)+1;
    return numberOfDays;
  }

  console.log(howManyDays("2023-11-10"));


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("");
console.log("-------Esercizio 10 -----------");

const isTodayMyBirthday = function(x){
  let birthday = new Date(x);
  let birthdayDay= birthday.getDate();
  let birthdayMonth= (birthday.getMonth())+1;
  let z = `${birthdayDay}-${birthdayMonth}`


  let confronto = new Date();
  let confrontoDay= confronto.getDate();
  let confrontoMonth= (confronto.getMonth())+1;
  let y = `${confrontoDay}-${confrontoMonth}`

if( z === y ){
  console.log("Oggi è il tuo Compleanno");

}
else{
  console.log("Oggi è il tuo Non-compleanno");
}

}

isTodayMyBirthday("2023-12-10");
isTodayMyBirthday("2023-11-10");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file



/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/


console.log("");
console.log("-------Esercizio 11 -----------");

const deleteProp = function(obj, string){
  delete obj[string];
  return obj;
}

console.log(deleteProp(me, "surname"));


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(){
  let years = parseInt(movies[0].Year);
  let title = movies[0].Title;
  movies.forEach(film => {
  if(parseInt(film.Year) > years){
    years = parseInt(film.Year)
    title= film.Title;
  }
});
return title;
}




/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function(){
  return movies.length;
}


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function(){
  return movies.map((film) => film.Year)
}


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function(){
  return movies.filter((film) => film.Year <= 1999)
}


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function(){
  let sum=0;
  movies.forEach((film) => sum += parseInt(film.Year))
  return sum;
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function(string){
  return movies.filter((film) => film.Title.includes(string))
}


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function(string){
  let liste ={};
  let match =  movies.filter((film) => film.Title.includes(string));
  let unmatch = movies.filter((film) => !film.Title.includes(string));
  liste.match = match;
  liste.unmatch = unmatch;
  return liste;
}


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = function(x){
  movies.splice(x,1);
  return movies;
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const selectElementId = function(){
  let element = document.querySelector('#container')
  return element.innerHTML;
}


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectElementTagName = function(){
  let element = document.getElementsByTagName('td')
  return element[0].innerHTML;
}


/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const printElementTagName = function(){
  let element = document.getElementsByTagName('td')
  for(i = 0; i < element.length; i++){
    let x = element[i].innerHTML;
    console.log(x);
  }

}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const changeColor = function(){
  let elements = document.querySelectorAll('a');
  for(i = 0; i < elements.length; i++){
    elements[i].classList.add('bcolor')
    
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/


const addListItem = function(){
  let list = document.querySelector('#myList');
  let listItem = document.createElement('li');
  listItem.innerText = "Ciao sono un nuovo elemento della lista";
  list.appendChild(listItem);
}



/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const removeListItems = function(){
  let list = document.querySelector('#myList');
  list.innerHTML = "";
}

let buttons = document.querySelectorAll('button');
buttons[0].addEventListener('click', addListItem);
buttons[1].addEventListener('click', removeListItems);

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassTr = function(){
  let trList = document.getElementsByTagName('tr');
  for(i = 0 ; i < trList.length ; i++){
    trList[i].classList.add('test');
  }
}



// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)
  c



  *
  **
  ***

*/


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function(x){
  if( x <= 1)
  {
    console.log( x + " non è un numero primo");
    return;
  }
  let y = Math.sqrt(x);
  for(i = 2 ; i<=y; i++){
  if(x%i==0){
        console.log( x + " non è un numero primo");
        return;
      }
    }
  console.log( x + " è un numero primo");
  }




/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


console.log("");
console.log("-------Esercizio 12 -----------");
console.log(newestMovie());

console.log("");
console.log("-------Esercizio 13 -----------");
console.log(countMovies());

console.log("");
console.log("-------Esercizio 14 -----------");
console.log(onlyTheYears());

console.log("");
console.log("-------Esercizio 15 -----------");
console.log(onlyInLastMillennium());

console.log("");
console.log("-------Esercizio 16 -----------");
console.log(sumAllTheYears());


console.log("");
console.log("-------Esercizio 17 -----------");
console.log(searchByTitle("Lord of"));


console.log("");
console.log("-------Esercizio 18 -----------");
console.log(searchAndDivide("Lords of"));


console.log("");
console.log("-------Esercizio 19 -----------");
console.log(removeIndex(3));


console.log("");
console.log("-------Esercizio 20 -----------");
console.log(selectElementId());

console.log("");
console.log("-------Esercizio 21 -----------");
console.log(selectElementTagName());

console.log("");
console.log("-------Esercizio 22 -----------");
printElementTagName()


console.log("");
console.log("-------Esercizio 23 -----------");
changeColor();
console.log('Il colore è presente sui link nel DOM');

console.log("");
console.log("-------Esercizio 24 -----------");
console.log("Legata Al Button1");

console.log("");
console.log("-------Esercizio 25 -----------");
console.log("Legata Al Button2");

console.log("");
console.log("-------Esercizio 26 -----------");
addClassTr();
console.log("tr colorati sul DOM");

console.log("");
console.log("-------Esercizio 27 -----------");



console.log("");
console.log("-------Esercizio 28 -----------");

console.log("");
console.log("-------Esercizio 29 -----------");

isItPrime(5);
isItPrime(7);
isItPrime(11);
isItPrime(13);
isItPrime(4);
isItPrime(6);
isItPrime(8);

