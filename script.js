const soja = document.getElementById("soja");

const growthText = document.getElementById("growthText");
const waterText = document.getElementById("waterText");
const ecoText = document.getElementById("ecoText");

const message = document.getElementById("message");

const waterBtn = document.getElementById("waterBtn");
const sunBtn = document.getElementById("sunBtn");
const harvestBtn = document.getElementById("harvestBtn");
const resetBtn = document.getElementById("resetBtn");

const folhas = document.querySelectorAll(".folha");

let growth = 0;
let water = 50;
let eco = 100;

function updatePlant(){

  growthText.innerText = growth + "%";
  waterText.innerText = water + "%";
  ecoText.innerText = eco + "%";

  soja.style.height = (120 + growth * 2) + "px";

  // mudança de cor da soja

  if(growth < 30){

    folhas.forEach(folha => {
      folha.style.background = "#2e7d32";
    });

  } else if(growth < 70){

    folhas.forEach(folha => {
      folha.style.background = "#7cb342";
    });

  } else {

    folhas.forEach(folha => {
      folha.style.background = "#c0ca33";
    });

  }

  // sustentabilidade

  if(eco < 40){

    message.innerText =
      "⚠️ O meio ambiente está sofrendo impacto!";

  }

  if(growth >= 100){

    message.innerText =
      "🌾 A soja amadureceu com sucesso sustentável!";

  }

}

waterBtn.addEventListener("click", () => {

  createRain();

  growth += 10;
  water += 10;

  if(growth > 100){
    growth = 100;
  }

  if(water > 100){
    water = 100;
  }

  eco += 2;

  if(eco > 100){
    eco = 100;
  }

  message.innerText =
    "🌧️ Irrigação sustentável aplicada!";

  updatePlant();

});

sunBtn.addEventListener("click", () => {

  growth += 5;
  water -= 5;

  if(growth > 100){
    growth = 100;
  }

  if(water < 0){
    water = 0;
  }

  message.innerText =
    "☀️ A luz solar acelerou o crescimento!";

  updatePlant();

});

harvestBtn.addEventListener("click", () => {

  if(growth >= 100){

    message.innerText =
      "🚜 Colheita realizada com responsabilidade ambiental!";

  } else {

    message.innerText =
      "🌱 A soja ainda não está pronta para colheita.";

  }

});

resetBtn.addEventListener("click", () => {

  growth = 0;
  water = 50;
  eco = 100;

  message.innerText =
    "🌿 Nova plantação iniciada.";

  updatePlant();

});

function createRain(){

  for(let i = 0; i < 80; i++){

    const rain = document.createElement("div");

    rain.classList.add("raindrop");

    rain.style.left =
      Math.random() * window.innerWidth + "px";

    rain.style.top = "0px";

    rain.style.animationDuration =
      (Math.random() * 1 + 0.5) + "s";

    document.body.appendChild(rain);

    setTimeout(() => {
      rain.remove();
    }, 2000);

  }

}

updatePlant();