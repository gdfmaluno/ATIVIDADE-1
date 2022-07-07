const resultado = document.querySelector('#result')
const imc = document.querySelector('#imc')
const altura = document.querySelector('#altura')

const calcPI = () => {

  if (imc.value !== '' && altura.value !== '') {
    const pi = (imc.value * (altura.value * altura.value)).toFixed(2)

    result.innerHTML = `Peso Ideal: ${pi}`

  } 
  else {
    result.innerHTML = 'Preencha os campos'
  }
}