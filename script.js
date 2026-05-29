const rainBtn = document.getElementById("rainBtn");
const sunBtn = document.getElementById("sunBtn");
const futureBtn = document.getElementById("futureBtn");
const resetBtn = document.getElementById("resetBtn");

const growthText = document.getElementById("growthText");
const waterText = document.getElementById("waterText");
const ecoText = document.getElementById("ecoText");

const rainSound = document.getElementById("rainSound");

const tractor = document.getElementById("tractor");

const soyPlants = document.querySelectorAll(".soy");
const leaves = document.querySelectorAll(".leaf");

const message = document.getElementById("message");

let growth = 0;
let water = 50;
let eco = 100;

function updateFarm(){

  growthText.innerText = growth + "%";
  waterText.innerText = water + "%";
  ecoText.innerText = eco + "%";

  soyPlants.forEach(soy => {

    soy.style.height = (100 + growth * 2) + "px";

  });

  // mudança de cor

  if(growth < 30){

    leaves.forEach(leaf => {
      leaf.style.background = "#2e7d32";
    });

  }

  else if(growth < 70){

    leaves.forEach(leaf => {
      leaf.style.background = "#8bc34a";
    });

  }

  else{

    leaves.forEach(leaf => {
      leaf.style.background = "#d4e157";
    });

  }

  if(growth >= 100){

    message.innerText =
      "🌾 Plantação pronta para colheita sustentável!";

  }

}

rainBtn.addEventListener("click", () => {

  createRain();

  rainSound.play();

  growth += 10;
  water += 10;

  if(growth > 100){
    growth = 100;
  }

  if(water > 100){
    water = 100;
  }

  message.innerText =
    "🌧️ Irrigação inteligente ativada!";

  updateFarm();

});

sunBtn.addEventListener("click", () => {

  growth += 5;

  water -= 5;

  if(water < 0){
    water = 0;
  }

  if(growth > 100){
    growth = 100;
  }

  message.innerText =
    "☀️ Energia solar acelerou o crescimento!";

  updateFarm();

});

futureBtn.addEventListener("click", () => {

  document.body.classList.toggle("future-mode");

  tractor.style.animation =
    "tractorMove 8s linear infinite";

  message.innerText =
    "🛰️ Agro 2050 ativado: drones, IA e sustentabilidade!";

});

resetBtn.addEventListener("click", () => {

  growth = 0;
  water = 50;
  eco = 100;

  document.body.classList.remove("future-mode");

  tractor.style.animation = "none";

  message.innerText =
    "🌱 Nova safra iniciada.";

  updateFarm();

});

function createRain(){

  for(let i = 0; i < 120; i++){

    const drop = document.createElement("div");

    drop.classList.add("raindrop");

    drop.style.left =
      Math.random() * window.innerWidth + "px";

    drop.style.top = "0px";

    drop.style.animationDuration =
      (Math.random() * 1 + 0.5) + "s";

    document.body.appendChild(drop);

    setTimeout(() => {
      drop.remove();
    }, 2000);

  }

}

const style = document.createElement("style");

style.innerHTML = `

@keyframes tractorMove{

  from{
    left:-200px;
  }

  to{
    left:110%;
  }

}

`;

document.head.appendChild(style);

updateFarm();