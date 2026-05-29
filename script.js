const soy = document.querySelector(".soy");

const levelText = document.getElementById("level");
const waterText = document.getElementById("water");
const ecoText = document.getElementById("eco");
const message = document.getElementById("message");

const rainBtn = document.getElementById("rainBtn");
const sunBtn = document.getElementById("sunBtn");
const fertilizerBtn = document.getElementById("fertilizerBtn");
const resetBtn = document.getElementById("resetBtn");

let growth = 0;
let water = 50;
let sustainability = 100;

function updateScreen(){

  levelText.innerText = growth + "%";
  waterText.innerText = water + "%";
  ecoText.innerText = sustainability + "%";

  soy.style.height = (80 + growth * 2) + "px";

  if(growth >= 100){
    message.innerText = "🌾 A soja cresceu com sucesso sustentável!";
  }

  if(sustainability <= 30){
    message.innerText = "⚠️ Sustentabilidade baixa! Preserve o meio ambiente.";
  }

}

rainBtn.addEventListener("click", () => {

  createRain();

  water += 10;

  if(water > 100){
    water = 100;
  }

  growth += 10;

  if(growth > 100){
    growth = 100;
  }

  sustainability += 5;

  if(sustainability > 100){
    sustainability = 100;
  }

  message.innerText = "🌧️ Irrigação sustentável aplicada!";

  updateScreen();

});

sunBtn.addEventListener("click", () => {

  growth += 5;

  if(growth > 100){
    growth = 100;
  }

  water -= 5;

  if(water < 0){
    water = 0;
  }

  message.innerText = "☀️ A luz solar ajudou no crescimento!";

  updateScreen();

});

fertilizerBtn.addEventListener("click", () => {

  growth += 20;

  sustainability -= 15;

  if(growth > 100){
    growth = 100;
  }

  if(sustainability < 0){
    sustainability = 0;
  }

  message.innerText =
    "🧪 Fertilizante acelerou a produção, mas impactou o meio ambiente.";

  updateScreen();

});

resetBtn.addEventListener("click", () => {

  growth = 0;
  water = 50;
  sustainability = 100;

  message.innerText =
    "🌱 Nova plantação iniciada.";

  updateScreen();

});

function createRain(){

  for(let i = 0; i < 100; i++){

    const drop = document.createElement("div");

    drop.classList.add("raindrop");

    drop.style.left = Math.random() * window.innerWidth + "px";

    drop.style.animationDuration =
      (Math.random() * 1 + 0.5) + "s";

    document.body.appendChild(drop);

    setTimeout(() => {
      drop.remove();
    }, 2000);

  }

}

updateScreen();