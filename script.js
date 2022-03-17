const button = document.getElementById("btn");
const containerFeedback = document.getElementById("feedback");

button.addEventListener("click", function () {
  const weight = document.querySelector(".peso");
  const height = document.querySelector(".altura");
  const imcOutput = document.createElement("h2");
  imcOutput.setAttribute("class", "output");

  const imc = calculateIMC(weight.value, height.value);
  imcOutput.innerText = calculateFeedback(imc);

  containerFeedback.appendChild(imcOutput);
  weight.value = "";
  height.value = "";
});

const calculateIMC = (weight, height) => {
  const IMC = weight / (height * height);
  return IMC.toFixed(2);
};

const calculateFeedback = (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso";
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal";
  }
  if (imc >= 25 && imc <= 29.9) {
    return "Peso normal";
  }
  if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau 1";
  }
  if (imc >= 35 && imc <= 39.9) {
    return "Obesidade grau 2";
  }
  if (imc >= 40) {
    return "Obesidade grau 3";
  }
};
