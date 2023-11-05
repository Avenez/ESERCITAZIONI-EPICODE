/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1 ---------------");
{

const pets = ['dog', 'cat', 'hamster', 'redfish'];
  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    console.log(pet);
    }  
}  

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(" ");
console.log("Esercizio 2 ---------------");
{
  const pets = ['dog', 'cat', 'hamster', 'redfish'];
  pets.sort();
  console.log(pets);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(" ");
console.log("Esercizio 3.1 ---------------");
//1

{
  const pets = ['dog', 'cat', 'hamster', 'redfish'];
  for (let i = pets.length-1 ; i > -1; i--) {
    const pet = pets[i];
    console.log(pet);
  }
}


// 2 
console.log(" ");
console.log("Esercizio 3.2 ---------------");
{
const pets = ['dog', 'cat', 'hamster', 'redfish'];
pets.reverse();
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  console.log(pet);
  }
}




/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log(" ");
console.log("Esercizio 4 ---------------");
{
const pets = ['dog', 'cat', 'hamster', 'redfish'];
let pet = pets[pets.length-1];
pets.pop();
pets.push(pets[0]);
pets.shift();
pets.unshift(pet);
console.log(pets);
}


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log(" ");
console.log("Esercizio 5 ---------------");
{
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  car.licensePlate = Math.floor(Math.random()*1000) + 10000;
}
console.log(cars);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log(" ");
console.log("Esercizio 6 ---------------");
{
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const obj = {
  brand: 'Fiat',
    model: 'Maccaroni',
    color: 'ragù',
    trims: ['life', 'style', 'r-line'],
}

cars.push(obj);
console.log(cars);


cars.forEach(car => {car.trims.pop();});
console.log(cars);
}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log(" ");
console.log("Esercizio 7 ---------------");
{
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const justTrims = []

cars.forEach(car => {justTrims.push(car.trims[0]);});
console.log(justTrims);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log(" ");
console.log("Esercizio 8 ---------------");
{
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars.forEach(car => {
    
    car.color.trim(); //in caso di spazi binachi prima del testo
      if (car.color.charAt(0) === "b") {

        console.log("Fizz");

      } else {
        
        console.log("Buzz");

      }  
});

}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log(" ");
console.log("Esercizio 9.1 ---------------");
// 1 -con indexOf

{
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
let x = numericArray.indexOf(32);
  while (i < x ) {
        const y = numericArray[i]; 
        console.log(y);
        i++
  }
}


console.log(" ");
console.log("Esercizio 9.2 ---------------");
//2 - senza indexof
{
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
  ]
let x = 0;
for (let i = 0; i < numericArray.length; i++) {
    const element = numericArray[i];
    if (element !== 32) {
          x++;
      }
    else{
      break;
    }
  }


let i = 0;
while (i < x) {
  const element2 = numericArray[i];
  console.log(element2);
  i++
}

}







/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log(" ");
console.log("Esercizio 10 ---------------");

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alfabetNum = [];
charactersArray.forEach(element => {
  
  switch (element) {
    case "a":
      alfabetNum.push(1);
      break;

    case "b":
      alfabetNum.push(2);
      break;

    case "c":
      alfabetNum.push(3);
      break;
        
    case "d":
      alfabetNum.push(4);
      break;

    case "e":
      alfabetNum.push(5);
      break;

    case "f":
      alfabetNum.push(6);
      break;

    case "g":
      alfabetNum.push(7);
      break;

    case "h":
      alfabetNum.push(8);
      break;

    case "i":
      alfabetNum.push(9);
      break;
        
    case "l":
      alfabetNum.push(10);
      break;

    case "m":
      alfabetNum.push(11);
      break;

    case "n":
      alfabetNum.push(12);
      break;
      
    case "o":
      alfabetNum.push(13);
      break;

    case "p":
      alfabetNum.push(14);
      break;

    case "q":
      alfabetNum.push(15);
      break;
        
    case "r":
      alfabetNum.push(16);
      break;

    case "s":
      alfabetNum.push(17);
      break;

    case "t":
      alfabetNum.push(18);
      break;
  
    case "u":
      alfabetNum.push(19);
      break;

    case "v":
      alfabetNum.push(20);
      break;

    case "z":
      alfabetNum.push(21);
      break;
    
    default:
      console.log("L'elemento non è una lettera");
      break;
  }
});

console.log(alfabetNum);

