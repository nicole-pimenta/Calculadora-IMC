const weight = document.querySelector(".peso");
const height = document.querySelector(".altura");
const button = document.getElementById("btn");
const resetButton = document.querySelector(".btn_reset");
const containerFeedback = document.getElementById("feedback");
const imcOutput = document.createElement("h2");

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

button.addEventListener("click", function () {
  imcOutput.setAttribute("class", "output");

  const imc = calculateIMC(weight.value, height.value);
  imcOutput.innerText = calculateFeedback(imc);

  containerFeedback.appendChild(imcOutput);
});

resetButton.addEventListener("click", function () {
  weight.value = "";
  height.value = "";
  imcOutput.innerText = "";
});
