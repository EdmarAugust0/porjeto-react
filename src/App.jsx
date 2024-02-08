import { useState } from "react"

import './App.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagemErro, setMensagemErro] = useState('');

  const calcularIMC = () => {
    if (!altura || !peso) {
      setMensagemErro('>>Por favor, preencha todos os campos.<<');
      setImc(null)
      return;
    }
    
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setImc(imcCalculado);
    setMensagemErro('')
  }

  const classificarIMC = () => {
    if(imc < 18.5) {
      return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal'
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso'
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade grau I'
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade grau II'
    } else {
      return 'Obesidade grau III'
    }
  }

  return (
    <div className="container">
      <h1 className="titulo">Calculadora de IMC</h1>
        <dev className="input">
          <label>
            Altura (cm):
            <input required type="number" value={altura} onChange={(e) => setAltura(e.target.value)}/>
          </label>
          <label>
            Peso (Kg):
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)}/>
          </label>
        </dev>
      <button className="btn" onClick={calcularIMC}>Calcular IMC</button>
      {mensagemErro && <p className="mensagemErro">{mensagemErro}</p>}
      {imc && (
        <div className="container2">
                    {/* o "2" do parametro é para a casa de numeros dps da virgula */}
          <h2>Seu IMC é: {imc.toFixed(2)}</h2>
          <p>Sua classificação é: {classificarIMC()}</p>
        </div>
      )}
    </div>
  )
}

export default App
