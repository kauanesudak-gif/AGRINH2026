const rainBtn = document.getElementById("rainBtn");
const rainContainer = document.getElementById("rainContainer");

rainBtn.addEventListener("click", () => {

  for(let i = 0; i < 100; i++){

    const drop = document.createElement("div");
    drop.classList.add("raindrop");

    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = (Math.random() * 1 + 0.5) + "s";

    rainContainer.appendChild(drop);

    setTimeout(() => {
      drop.remove();
    }, 2000);
  }

});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// contador sustentável

let score = 0;
const scoreElement = document.getElementById("score");

const interval = setInterval(() => {

  score++;

  scoreElement.innerText = score + "%";

  if(score >= 100){
    clearInterval(interval);
  }

}, 50);