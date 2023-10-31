/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 10;
  let y = 5;
  if(x > y){
    console.log( x + " è più grande di " + y);
  }
  else{
    console.log(y + " è più grande di " + x);
  };
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 10;
  if( x !== 5) {
    console.log("not equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 10;
  if( x%5 == 0){
    console.log(x + " è divisibile per 5!")
  }
  else{
    console.log(x + " non è divisibile per 5!")
  };
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 5;
  let y = 3;
  
  if( x == 8 && y== 8){
    console.log("Entrambi i numeri sono uguali a 8!");
  }

  else if( x == 8){
    console.log("Il primo numero è uguale a 8!");
  }

  else if( y == 8){
    console.log("Il secondo numero è uguale a 8!");
  }

  else if( (x + y) == 8 ){
    console.log("La somma dei due numeri è uguale a 8!");
  }

  else if( (x - y) == 8){
    console.log("La sottrazione dei due numeri è uguale a 8!");
  }

  else
  {console.log("nessuno dei numeri e nemmeno la loro somma o sottrazione è uguale a 8!")}
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let totale = 20;
  let totalShoppingCart = totale;
  let costo = 10;
  if (totalShoppingCart > 50){
    console.log("Hai diritto alla spedizione gratuita. Il totale da pagare è: " + totalShoppingCart )
  }
  else {
    console.log("Non hai diritto alla spedizione gratuita. Il totale da pagare è: " + (totalShoppingCart+costo));
  }
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let totale = 30;
  let totalShoppingCart = totale;
  let costo = 10;
  if (totalShoppingCart > 50){
    console.log("Hai diritto alla spedizione gratuita. Il totale da pagare con lo sconto del BF(20%) è: " + (totalShoppingCart-(totalShoppingCart*0.2) ))
  }
  else {
    console.log("Non hai diritto alla spedizione gratuita. Il totale da pagare è: " + ((totalShoppingCart-(totalShoppingCart*0.2))+costo));
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 10;
  let y = 2;
  let z = 3;
  if ( x > y && x > z && y > z){
    console.log("l'ordine dei valori è: " + x + " " + y + " " + z);
  }
  else if( x > y && x > z && z > y){
    console.log("l'ordine dei valori è: " + x + " " + z + " " + y);
  }

  else if(y > x && y > z && x > z){
    console.log("l'ordine dei valori è: " + y + " " + x + " " + z);
  }
  else if((y > x && y > z && z > x)){
    console.log("l'ordine dei valori è: " + y + " " + z + " " + x);
  }
  
  else if( z > y && z > x && y > x){
    console.log("l'ordine dei valori è: " + z + " " + y + " " + x);
  }
  else {
    console.log("l'ordine dei valori è: " + z + " " + x + " " + y);
  }
  
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// {
//   let x = 10;
//   let y = 2;
//   let z = 3;
//   let numeri = new Array;
//   numeri.push(x, y, z);
//   console.log(numeri);
//   numeri.sort(function(a, b){return b-a});
//   console.log(numeri);
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 8;
  if(typeof(x) === "number"){
    console.log(x + " è un numero");
  }
  else{
    console.log(x + " non è un numero");
  }
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let x = 25;
  if( x%2 == 0 ){
    console.log(x + " è un numero pari");

  }
  else{
    console.log(x + " è un numero dispari");
  }
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/


/* SCRIVI QUI LA TUA RISPOSTA */

{let val = 20;
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else if ( val == 10 || val > 10) {
      console.log("Uguale a 10 o maggiore");
    }
  }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

{const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me.city);

me.city = "Toronto";

console.log(me.city);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me.lastName);

delete me.lastName;

console.log(me.lastName);
}

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
console.log(me.skills[2]);

delete me.skills[2];

console.log(me.skills[2]);
}

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let myArray = new Array;

  myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  console.log(myArray[5], myArray[9]);

  
}

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let myArray = new Array;

  myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  myArray.pop();
  console.log(myArray[9]);

  myArray.push(100);

  console.log(myArray[9]);

  
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function maxOfTwo () {
  let x = document.getElementById("num1").value;
  let y = document.getElementById("num2").value;
  if(x > y){

    document.getElementById("ris1").innerHTML = ( x + " è più grande di " + y);
  }
  else{

    document.getElementById("ris1").innerHTML = ( y + " è più grande di " + x);
  };
  
};


function divForFive () {
  let x = document.getElementById("num3").value;
  if( x%5 == 0){
    document.getElementById("ris2").innerHTML = (x + " è divisibile per 5!")
  }
  else{
    document.getElementById("ris2").innerHTML = (x + " non è divisibile per 5!")
  };
}
*/

