const resultado = document.querySelector('#result')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Magreza'
    } else if (imc < 25) {
      classification = 'Normal'
    } else if (imc < 30) {
      classification = 'Sobrepeso'
    } else if (imc < 35) {
      classification = 'Obesidade Grau I'
    } else if (imc < 40) {
      classification = 'Obesidade Grau II'
    } else {
      classification = 'Obesidade Grau III'
    }
    
    result.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    result.innerHTML = 'Preencha os campos'
  }
}