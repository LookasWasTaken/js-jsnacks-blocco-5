/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. */

// Ho chiesto a chatGPT di generarmi varietà, peso e lunghezza di 10 zucchine
const zucchine = [
  { varietà: "Zucchino nero di Milano", peso: 0.5, lunghezza: 15 },
  { varietà: "Zucchino romanesco", peso: 0.3, lunghezza: 10 },
  { varietà: "Zucchino siciliano", peso: 0.4, lunghezza: 12 },
  { varietà: "Zucchino tondo di Piacenza", peso: 0.6, lunghezza: 18 },
  { varietà: "Zucchina lunga fiorentina", peso: 0.4, lunghezza: 20 },
  { varietà: "Zucchina striata di Napoli", peso: 0.5, lunghezza: 16 },
  { varietà: "Zucchina bianca triestina", peso: 0.3, lunghezza: 14 },
  { varietà: "Zucchino giallo", peso: 0.2, lunghezza: 8 },
  { varietà: "Zucchina trombetta di Albenga", peso: 0.8, lunghezza: 25 },
  { varietà: "Zucchino rampicante", peso: 0.7, lunghezza: 22 },
];

const container = document.querySelector(".container");
let somma = 0;

zucchine.forEach((zucchina) => {
  container.innerHTML += `
  <div class="zucchina">
      <h3>Varietà: ${zucchina.varietà}</h3>
      <h5>Peso: ${zucchina.peso} kg</h5>
      <h5>Lunghezza: ${zucchina.lunghezza} cm</h5>
  </div>`;

  somma += zucchina.peso;
});
console.log("Le zucchine complessivamente pesano", somma);
