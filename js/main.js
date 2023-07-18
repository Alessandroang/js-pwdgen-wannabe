const nome = prompt("Qual'è il tuo nome?");
const cognome = prompt("Qual'è il tuo cognome?");
const colore = prompt("Qual'è il tuo colore preferito?");

const risultato = nome + cognome + colore + 21;
console.log(risultato);

document.getElementById("pluto").innerHTML = risultato;
