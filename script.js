/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const NAME = 'Mario';
const COGNOME = 'Rossi';
console.log(`Ciao, mi chiamo ${NAME} ${COGNOME}`)

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 10;
let b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const annoNascita = 2000;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;
const etaTra10Anni = etaOggi + 10;
const eta5AnniFa = etaOggi - 5;

console.log(`Oggi hai ${etaOggi} anni.`);
console.log(`Tra 10 anni avrai ${etaTra10Anni} anni.`);
console.log(`Cinque anni fa avevi ${eta5AnniFa} anni.`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const eta = 26;
const maggiorenne = eta >= 18;
console.log(`Età: ${eta} — Maggiorenne: ${maggiorenne}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
const string = "Ciao";
const number = 42;
const boolean = true;
// L'espressione typeof null restituisce "object" a causa di un bug.
// si puo utilizzare valore === null per verificare se una variabile è null.
const nessunValore = null;
let indefinito;

console.log(`string è di tipo: ${typeof string}`);
console.log(`number è di tipo: ${typeof number}`);
console.log(`boolean è di tipo: ${typeof boolean}`);
console.log(`nessunValore è di tipo: ${typeof nessunValore}`);
console.log(`valore === null: ${nessunValore === null}`);
console.log(`indefinito è di tipo: ${typeof indefinito}`);


/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numero = 5;
const stringa = "5";

console.log(numero == stringa); // true perché l'operatore == effettua una conversione implicita del tipo di dato prima di confrontare i valori.
console.log(numero === stringa); // false perché l'operatore === confronta sia il valore che il tipo di dato, e in questo caso i tipi sono diversi (numero vs stringa).

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// "5" + 3 => "53" (concatenazione di stringa e numero)
// "5" - 3 => 2 (la stringa viene convertita in numero e sottratta)
// true + 1 => 2 (true viene convertito in 1 e sommato a 1)
// "10" * "2" => 20 (le stringhe vengono convertite in numeri e moltiplicate)

console.log("5" + 3); // Anche al contrario il risultato sarà "53" perché l'operatore + tra una stringa e un numero effettua la concatenazione.
console.log("5" - 3); 
console.log(true + 1); 
console.log("10" * "2"); 

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 9;
const isPari = n % 2 === 0;
const isDivisibilePer3 = n % 3 === 0;
const isPariEDivisibilePer3 = isPari && isDivisibilePer3;

console.log(`n è pari: ${isPari}`);
console.log(`n è divisibile per 3: ${isDivisibilePer3}`);
console.log(`n è pari E divisibile per 3: ${isPariEDivisibilePer3}`);

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let tipoTriangolo;

const d = 4;
const e = 7;
const f = 4;
const perimetro = d + e + f;

if (d + e <= f || d + f <= e || e + f <= d) {tipoTriangolo = "non è un triangolo valido";} //
/*In geometria, tre misure formano un triangolo solo se la somma di due lati è sempre maggiore del terzo*/
else if (d === e && e === f) {tipoTriangolo = "equilatero";} 
else if (d === e || d === f || e === f) {tipoTriangolo = "isoscele";} 
else {tipoTriangolo = "scaleno";}

console.log(`Triangolo ${tipoTriangolo}, perimetro ${perimetro}`);