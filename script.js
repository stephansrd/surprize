function showQuiz(){
  document.getElementById("quiz").classList.remove("hidden");
}

function showFinal(){
  document.getElementById("final").classList.remove("hidden");
  setupNoButton();
}

function checkAnswer(button, correct){
  let result=document.getElementById("quizResult");
  result.innerText = correct ? "Correct 😍" : "Wrong 😂 but I still love you!";
}

function yes(){
  document.getElementById("response").innerText="YAY ❤️ Best day ever!";
  startFireworks();
}

function setupNoButton(){
  const btn=document.getElementById("noBtn");
  btn.addEventListener("touchstart",moveButton);
  btn.addEventListener("mouseover",moveButton);
}

function moveButton(){
  const btn=document.getElementById("noBtn");
  const x=Math.random()*200-100;
  const y=Math.random()*200-100;
  btn.style.transform=`translate(${x}px,${y}px)`;
}

/* FIREWORKS */
function startFireworks(){
  const canvas=document.getElementById("fireworks");
  const ctx=canvas.getContext("2d");

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;

  let particles=[];

  for(let i=0;i<100;i++){
    particles.push({
      x:canvas.width/2,
      y:canvas.height/2,
      vx:(Math.random()-0.5)*6,
      vy:(Math.random()-0.5)*6,
      life:100
    });
  }

  function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
      p.x+=p.vx;
      p.y+=p.vy;
      p.life--;

      ctx.beginPath();
      ctx.arc(p.x,p.y,3,0,Math.PI*2);
      ctx.fillStyle="red";
      ctx.fill();
    });

    particles=particles.filter(p=>p.life>0);

    if(particles.length>0){
      requestAnimationFrame(animate);
    }
  }

  animate();
}

/* Floating hearts */
setInterval(()=>{
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerText="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.fontSize=(Math.random()*10+15)+"px";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },6000);

},600);