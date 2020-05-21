var formNome = document.getElementById('form-nome');
var formKm = document.getElementById('form-km');
var formEta = document.getElementById('form-eta');
var buttonGenera = document.getElementById('genera');
var buttonAnnulla = document.getElementById('annulla');

buttonGenera.addEventListener('click',
  function () {
    var nomeValue = formNome.value
    var kmValue = parseInt(formKm.value)
    var etaValue = formEta.value

    if (isNaN(nomeValue) && !isNaN(kmValue)) {

      if (etaValue == 'minorenne') {
        prezzoIniziale = kmValue * 0.21;
        prezzoFinale = prezzoIniziale - (prezzoIniziale*0.2)
      } else if (etaValue == 'over') {
        prezzoIniziale = kmValue * 0.21;
        prezzoFinale = prezzoIniziale - (prezzoIniziale*0.4)
      } else {
        prezzoIniziale = kmValue * 0.21
        prezzoFinale = prezzoIniziale
      }
      document.getElementById('bigl-nome').innerHTML = nomeValue;
      alert('Biglietto generato correttamente!')
      console.log(prezzoIniziale)
      console.log(prezzoFinale)

    } else {

      alert('Controlla i dati immessi e riprova!')
    }
  }
)
