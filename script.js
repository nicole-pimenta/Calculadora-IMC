const weight = document.querySelector(".peso");
const height = document.querySelector(".altura");
const button = document.getElementById("btn");
const containerFeedback = document.getElementById("feedback");

button.addEventListener("click", function () {
  console.log(weight.value);
  console.log(height.value);
  console.log(calculateIMC(weight.value, height.value));
});

const calculateIMC = (weight, height) => {
  const IMC = weight / (height * height);
  return IMC.toFixed(2);
};

// utilizar conceito de NewMap
