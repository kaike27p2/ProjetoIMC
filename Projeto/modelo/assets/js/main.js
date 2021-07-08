
const formulario = document.querySelector(".form") 

formulario.addEventListener("submit" , function(e){
 e.preventDefault()
  
 const peso = document.querySelector("#peso")
 const altura = document.querySelector("#altura")
 const resultado = document.querySelector(".Resultado")
 const niveisIMC = ["Muito abaixo do Peso: Grau de obesidade 0",
                     "Abaixo do peso: Grau de Obesidade 0",
                    "Normal: Grau de Obesidade: 0",
                     "SobrePeso, Grau de Obesidade: 0", 
                     "Obesidade, Grau 1",
                      "Obesidade, Grau 2", 
                     "Obesidade Grave, Grau 3"]
const valorPeso = Number(peso.value)
const valorAltura = Number(altura.value)
const calculaIMC = valorPeso / (valorAltura ** 2)
if(!valorPeso){
      resultado.innerHTML = "Peso Inválido",  false
      resultado.classList.add("bad")
      return;
}
if(!valorAltura){
    resultado.innerHTML = "Altura Inválida", false
    resultado.classList.add("bad")
      return;
}

if(calculaIMC != NaN){
      if (calculaIMC.toFixed(2) < 17){
      resultado.innerHTML = niveisIMC[0]
}else if (calculaIMC.toFixed(2) >= 17 && calculaIMC.toFixed(2) <= 18.49){
      resultado.innerHTML = niveisIMC[1]
}else if (calculaIMC.toFixed(2) >= 18.5 && calculaIMC.toFixed(2) <= 24.99){
      resultado.innerHTML = niveisIMC[2]
} else if (calculaIMC.toFixed(2) >= 25 && calculaIMC.toFixed(2) <= 29.99){
      resultado.innerHTML = niveisIMC[3]
}else if (calculaIMC.toFixed(2) >= 30 && calculaIMC.toFixed(2) <= 34.99){
      resultado.innerHTML = niveisIMC[4]
}else if (calculaIMC.toFixed(2) >= 35 && calculaIMC.toFixed(2) <= 39.99){
      resultado.innerHTML = niveisIMC[5]
}else if (calculaIMC.toFixed(2) >= 40){
      resultado.innerHTML = niveisIMC[6]
}
resultado.classList.remove("bad")}






})

                    






