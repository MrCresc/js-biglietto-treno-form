// Variabili form
var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
// Variabili bottoni
var buttonGenera = document.getElementById('genera');
var buttonAnnulla = document.getElementById('annulla');
// Variabile sezione biglietto
var sezioneBiglietto = document.getElementById('biglietto')
// Generazione numeri Carrozza e Codice Prenotazione
var randomCarrozza = Math.floor(Math.random() * 10) + 1;
var randomCodice = Math.floor(Math.random() * 10) + 9000;
// Easter egg dark mode
var darkMode = document.getElementById('darkmode');
var lightMode = document.getElementById('lightmode');
var body = document.getElementById('body');
// -------------------------------------------------------------------

// Dark mode
darkMode.addEventListener('click',
  function () {
    body.className = 'darkmode'
    formNome.className = 'inputdark'
    formKm.className = 'inputdark'
    formEta.className = 'inputdark'
  }
)
// Reset dark mode
lightMode.addEventListener('click',
  function () {
    body.className = ''
    formNome.className = 'customstyle'
    formKm.className = 'customstyle'
    formEta.className = 'customstyle'
  }
)

// Click bottone genera
buttonGenera.addEventListener('click',
  // Funzioni assegnazione valore
  function () {
    var nomeValue = formNome.value
    var kmValue = parseInt(formKm.value)
    var etaValue = formEta.value
    // Condizione di verifica input positiva
    if (isNaN(nomeValue) && !isNaN(kmValue)) {
      // Condizioni di calcolo
      if (etaValue == 'minorenne') {
        prezzoIniziale = kmValue * 0.21;
        prezzoFinale = prezzoIniziale - (prezzoIniziale*0.2)
        offerta = 'Tariffa -20%'
      } else if (etaValue == 'over') {
        prezzoIniziale = kmValue * 0.21;
        prezzoFinale = prezzoIniziale - (prezzoIniziale*0.4)
        offerta = 'Tariffa -40%'
      } else {
        prezzoIniziale = kmValue * 0.21
        prezzoFinale = prezzoIniziale
        offerta = 'Tariffa Standard'
      }
      // Trascrizioni in HTML
      document.getElementById('bigl-nome').innerHTML = nomeValue;
      document.getElementById('bigl-offerta').innerHTML = offerta;
      document.getElementById('bigl-carrozza').innerHTML = randomCarrozza;
      document.getElementById('bigl-codice').innerHTML = randomCodice;
      document.getElementById('bigl-costo').innerHTML = prezzoFinale.toFixed(2) + ' €';
      // Applicazione classe visibilità
      sezioneBiglietto.className = 'form-wrapper visible'
      // Popup esito positivo
      alert('Biglietto generato correttamente!')
    // Condizione di verifica input negativa
    } else {
      // Popup esito negativo
      alert('Controlla i dati immessi e riprova!')
    }
  }
)

// -------------------------------------------------------------------

// Click bottone annulla
buttonAnnulla.addEventListener('click',
  // Funzioni annullamento valore
  function () {
    formNome.value = ''
    formKm.value = ''
    formEta.value = 'maggiorenne'
    // Applicazione classe invisibilità
    sezioneBiglietto.className = 'form-wrapper hidden'
  }
)
