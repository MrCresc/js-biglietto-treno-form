var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
var buttonGenera = document.getElementById('genera');
var buttonAnnulla = document.getElementById('annulla');
var sezioneBiglietto = document.getElementById('biglietto')

buttonGenera.addEventListener('click',
  function () {
    var nomeValue = formNome.value
    var kmValue = parseInt(formKm.value)
    var etaValue = formEta.value

    if (isNaN(nomeValue) && !isNaN(kmValue)) {

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

      document.getElementById('bigl-nome').innerHTML = nomeValue;
      document.getElementById('bigl-offerta').innerHTML = offerta;
      document.getElementById('bigl-carrozza').innerHTML = Math.floor(Math.random() * 10) + 1;
      document.getElementById('bigl-codice').innerHTML = Math.floor(Math.random() * 10) + 9000;
      document.getElementById('bigl-costo').innerHTML = prezzoFinale.toFixed(2);

      sezioneBiglietto.className = 'form-wrapper visible'

      alert('Biglietto generato correttamente!')

    } else {

      alert('Controlla i dati immessi e riprova!')
    }
  }
)

buttonAnnulla.addEventListener('click',
  function () {
    formNome.value = ''
    formKm.value = ''
    formEta.value = 'maggiorenne'

    sezioneBiglietto.className = 'form-wrapper hidden'
  }
)
