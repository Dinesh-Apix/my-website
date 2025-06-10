const word = document.getElementById("changing_text");
const titles = ["Frontend Developer.", "Backend Developer.", "AI Enthusiast."];
let titlesIndex = 0;
let charIndex = 0;
const speed = 100;
const eraseSpeed = 50;
const pauseTime = 1000;

function typeEffect(){
  if(charIndex < titles[titlesIndex].length){
    word.textContent = titles[titlesIndex].substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeEffect, speed);
  }else{
    setTimeout(eraseEffect, pauseTime);
  }
}

function eraseEffect(){
  if(charIndex > 0){
  word.textContent = titles[titlesIndex].substring(0, charIndex - 1);
  charIndex--;
  setTimeout(eraseEffect, eraseSpeed); 
  }else{
    titlesIndex = (titlesIndex + 1) % titles.length;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();