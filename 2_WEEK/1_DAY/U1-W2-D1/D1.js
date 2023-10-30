/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//In JS i datatype sono il tipo di dato che possiamo inserire nelle nostre variabili. JS riconosce automaticamente il tipo di variabile inserito senza doverso indicare prima. 
//I Datatype sono l'etichetta sulla scatola in cui andremo a metere il contenuto delle nostre variabili. Questi sono 5.

var string = "Testo";            //Questo tipo (STRINGA) viene usato per i testi scritti e deve essere contenuto tra apici singoli '' o doppi "" che non possono essere combinati tra loro. Se usati nella nostra variabile vanno preceduti da \ come tutti gli altri tipi di caratteri speciali
var num = 1234;                  //Questo tipo (NUMERI) viene usato per i numeri. Questi possono essere interi, decimali negativi, ecc.
var booleano = true;              //Questo  tipo (BOOLEANO) identifica solo due possibili valori: True(vero) o False(Falso). Può essere utilizzato per dichiarare che una condizione, o uno stato, sia vera o meno.
var nullo = null                 //Se i datatype sono l'etichetta delle scatole in cui mettere il contenuto delle nostre variabili, allora null è l'etichetta che dichiara che la scatola è vuota e senza una vera e propria etichetta. QUesta scatola potrà poi essere riempita con qualsiasi contenuto e rietichettata
var indefinito = undefined       //In questo caso il valore Undefined è il datatype che dice a JS che la scatola, quindi la variabile non esiste proprio.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

  // var nome = "Alvise";
  // console.log(nome);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sommaNum() {
  let x = 12;
  let y = 20;
  let z= x + y;
  alert(z);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  var x = 12;
  console.log(x);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

nome = "Veneziano";
console.log(nome);
const nome2 = "Pietro"; // commentato per permettere il log del resto dell'esercizio
//nome2 ="Marco";
console.log(nome2);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

var y = 4;
var z = x - y;
console.log(z);

/* SCRIVI QUI LA TUA RISPOSTA */


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
{
  let name1 = "john";
  let name2 = "John";
  if( name1 == name2){
    x = true
    console.log(x + " : " + name1 + " è uguale a " + name2);
  }
  else{
    x = false
    console.log(x + " : " + name1 + " è diverso a " + name2);
  }
}

{
  let name1 = "john";
  let name2 = "John";
  if( name1 == name2.toLowerCase()){
    x = true
    console.log(x + " : " + name1 + " è uguale a " + name2 + " usando .toLowerCase");
  }
  else{
    x = false
    console.log(x + " : " + name1 + " è diverso a " + name2);
  }
}


// function johnControl1() {
//   let name1 = "john";
//   let name2 = "John";
//   if( name1 == name2){
//     x = true
//     alert(x + " : " + name1 + " è uguale a " + name2);
//   }
//   else{
//     x = false
//     alert(x + " : " + name1 + " è diverso a " + name2);
//   }
// }

// function johnControl2(){
//   let name1 = "john";
//   let name2 = "John";
//   if( name1 == name2.toLowerCase()){
//     x = true
//     alert(x + " : " + name1 + " è uguale a " + name2 + " usando .toLowerCase");
//   }
//   else{
//     x = false
//     alert(x + " : " + name1 + " è diverso a " + name2);
//   }
// }


// function controlloNome(){
//   var name1 = document.getElementById("parola1").value;
//   var name2 = document.getElementById("parola2").value;
//   if( name1 == name2){
//     x = true
//     alert(x + " : " + name1 + " è uguale a " + name2);
//   }
//   else{
//     x = false
//     alert(x + " : " + name1 + " è diverso a " + name2);
//   }
// }
