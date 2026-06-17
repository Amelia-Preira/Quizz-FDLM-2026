const QUESTION_BANK = [
  {
    "question": "Dans La Reine des neiges, Libérée, délivrée est chantée par Anna.",
    "answer": false,
    "why": "C’est Elsa qui chante cette chanson."
  },
  {
    "question": "Dans Aladdin, Ce rêve bleu est chantée sur un tapis volant.",
    "answer": true,
    "why": "C’est la scène culte associée à la chanson."
  },
  {
    "question": "Dans Le Roi Lion, Hakuna Matata est chantée par Timon et Pumbaa avec Simba.",
    "answer": true,
    "why": "C’est l’un des moments emblématiques du film."
  },
  {
    "question": "Dans Le Livre de la jungle, la chanson connue est Il en faut peu pour être peureux.",
    "answer": false,
    "why": "Le vrai titre est Il en faut peu pour être heureux."
  },
  {
    "question": "Suspense… dans Pocahontas, la chanson culte s’intitule L’Air du temps.",
    "answer": false,
    "why": "Le vrai titre est L’Air du vent."
  },
  {
    "question": "Question pour 1 000 euros : dans La Petite Sirène, le père d’Ariel s’appelle Tritonton.",
    "answer": false,
    "why": "Son père s’appelle Triton."
  },
  {
    "question": "Dans Encanto, le personnage qu’on ne doit pas évoquer s’appelle Bruno.",
    "answer": true,
    "why": "Toute la chanson repose sur ce prénom."
  },
  {
    "question": "Dans Les Aristochats, la chanson jazz connue parle de devenir un cadre.",
    "answer": false,
    "why": "Le vrai mot est cat."
  },
  {
    "question": "Attention, question pop : dans Zootopie, la chanson Try Everything est interprétée par Shakira.",
    "answer": true,
    "why": "Shakira interprète bien la chanson du film."
  },
  {
    "question": "Restons concentrés : dans Vaiana, la chanson mise en avant s’appelle Le Lyon lumière.",
    "answer": false,
    "why": "Le piège porte sur le mot. Le titre est Le bleu lumière, pas Le Lyon lumière."
  },
  {
    "question": "Question émotion : dans Titanic, Céline Dion chante My Heart Will Go On, et le geste où elle frappe sa poitrine du poing droit est du côté droit.",
    "answer": false,
    "why": "Le geste connu est fait du côté gauche, au niveau du cœur."
  },
  {
    "question": "Dans Bodyguard, la chanson culte s’intitule I Will Always Follow You.",
    "answer": false,
    "why": "Le vrai titre est I Will Always Love You."
  },
  {
    "question": "Dans Rocky, la chanson connue parle de l’œil du tigre.",
    "answer": true,
    "why": "Le titre exact est Eye of the Tiger."
  },
  {
    "question": "Tom Cruise, dans Top Gun : a-t-il passé plus de temps à courir qu’à marcher ?",
    "answer": true,
    "why": "C’est un trait très connu de ses films : Tom Cruise est souvent associé à ses scènes de course."
  },
  {
    "question": "Dans Flashdance, le titre phare est What a Dancing.",
    "answer": false,
    "why": "Le vrai titre est What a Feeling."
  },
  {
    "question": "Dans Dirty Dancing, la chanson culte du final est The Time of My Life.",
    "answer": true,
    "why": "Elle accompagne l’une des scènes finales les plus connues."
  },
  {
    "question": "Dans Ghostbusters, la chanson principale s’intitule Who You Gonna Call.",
    "answer": false,
    "why": "La chanson principale s’appelle Ghostbusters, même si cette phrase est dans le refrain."
  },
  {
    "question": "Dans A Star Is Born, Shallow est un duo.",
    "answer": true,
    "why": "Le morceau est interprété en duo dans le film."
  },
  {
    "question": "Dans Footloose, le titre de la chanson principale est différent du titre du film.",
    "answer": false,
    "why": "Le film et la chanson portent le même nom."
  },
  {
    "question": "Pour rester vivant jusqu’au bout : dans La Fièvre du samedi soir, Stayin’ Alive est chanté par les Bees Gee.",
    "answer": false,
    "why": "Le groupe s’appelle Bee Gees, pas Bees Gee."
  },
  {
    "question": "Question couleur : dans Le Magicien d’Oz, on retient surtout une route jaune… et non des chaussures orange de Dorothy.",
    "answer": true,
    "why": "L’image culte est bien celle de la Yellow Brick Road, même si les chaussures de Dorothy sont célèbres aussi."
  },
  {
    "question": "Dans 8 Mile, Lose Yourself est chantée par Will Smith.",
    "answer": false,
    "why": "Le morceau est associé à Eminem."
  },
  {
    "question": "Dans Skyfall, le thème principal est interprété par Adele.",
    "answer": true,
    "why": "C’est l’un des génériques James Bond les plus connus."
  },
  {
    "question": "Petite anecdote cinéma : dans Ghost, la scène culte liée à Unchained Melody met en scène deux acteurs autour d’un tour de potier.",
    "answer": true,
    "why": "C’est l’une des anecdotes visuelles les plus connues du film."
  },
  {
    "question": "Dans le générique de Friends, il y a un claquement de mains très reconnaissable.",
    "answer": true,
    "why": "C’est un détail culte du générique."
  },
  {
    "question": "Le thème de Game of Thrones est surtout connu pour être chanté par les personnages principaux.",
    "answer": false,
    "why": "Il est surtout connu comme thème instrumental."
  },
  {
    "question": "Dans La Casa de Papel, celui qui mène la bande est bien connu pour s’appeler Le Docteur.",
    "answer": false,
    "why": "Son surnom est Le Professeur, pas Le Docteur."
  },
  {
    "question": "Au début du générique de Mission: Impossible, c’est un briquet qui allume la mèche.",
    "answer": false,
    "why": "Le générique est célèbre pour sa mèche enflammée, mais pas par un briquet dans la formulation retenue ici."
  },
  {
    "question": "Dans Stranger Things, l’autre univers s’appelle bien le Monde à l’envers.",
    "answer": true,
    "why": "C’est le nom français le plus connu de cet univers parallèle."
  },
  {
    "question": "Dans The Addams Family, leur fille s’appelle Vendredi.",
    "answer": false,
    "why": "Leur fille s’appelle Mercredi."
  }
];
const QUESTIONS_PER_GAME = 10;
const QUALIFY_SCORE = 8;

let gameQuestions = [];
let current = 0;
let score = 0;
let timerMode = "auto";
let timerDuration = 15;
let timeLeft = timerDuration;
let timerInterval = null;
let answered = false;

const timerProgress = () => document.getElementById("timerProgress");
const timerText = () => document.getElementById("timer");

function shuffle(array){
  const arr = [...array];
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startGame(){
  gameQuestions = shuffle(QUESTION_BANK).slice(0, QUESTIONS_PER_GAME);
  current = 0;
  score = 0;
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  renderQuestion();
}

function calculateReadingTime(question){
  const words = question.trim().split(/\s+/).length;
  const seconds = Math.ceil(words / 2.4) + 6;
  return Math.min(24, Math.max(10, seconds));
}

function getDuration(q){
  if(timerMode === "auto") return calculateReadingTime(q.question);
  return Number(timerMode);
}

function setTimerMode(mode){
  timerMode = mode;
  if(gameQuestions.length > 0) renderQuestion();
}

function renderQuestion(){
  const q = gameQuestions[current];
  timerDuration = getDuration(q);
  document.getElementById("counter").textContent = `Question ${current + 1} / ${QUESTIONS_PER_GAME}`;
  document.getElementById("scoreMini").textContent = `Score actuel : ${score} / ${current}`;
  document.getElementById("question").textContent = q.question;
  document.getElementById("reveal").className = "reveal hidden";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("feedback").textContent = "";
  document.getElementById("correctAnswer").textContent = "";
  document.getElementById("explanation").textContent = "";
  document.querySelectorAll(".round").forEach(b => b.disabled = false);
  answered = false;
  restartTimer();
}

function restartTimer(){
  clearInterval(timerInterval);
  timeLeft = timerDuration;
  updateTimerDisplay();
  if(!answered){
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if(timeLeft <= 0){
        clearInterval(timerInterval);
        timeoutReveal();
      }
    }, 1000);
  }
}

function updateTimerDisplay(){
  timerText().textContent = timeLeft;
  const circumference = 326.7;
  const ratio = Math.max(0, timeLeft / timerDuration);
  timerProgress().style.strokeDashoffset = circumference * (1 - ratio);
  timerProgress().style.stroke = timeLeft <= 5 ? "#e33d3d" : "#ff7a18";
}

function answer(choice){
  if(answered) return;
  clearInterval(timerInterval);
  const q = gameQuestions[current];
  const isCorrect = choice === q.answer;
  if(isCorrect) score++;
  revealAnswer(isCorrect, q, false);
}

function timeoutReveal(){
  if(answered) return;
  const q = gameQuestions[current];
  revealAnswer(false, q, true);
}

function revealAnswer(isCorrect, q, timeout){
  answered = true;
  document.querySelectorAll(".round").forEach(b => b.disabled = true);

  const feedback = document.getElementById("feedback");
  feedback.className = "feedback " + (timeout ? "timeout" : (isCorrect ? "correct" : "wrong"));
  feedback.textContent = timeout ? "Temps écoulé" : (isCorrect ? "Bonne réponse" : "Mauvaise réponse");

  document.getElementById("correctAnswer").textContent = "Réponse : " + (q.answer ? "Oui" : "Non");
  document.getElementById("explanation").textContent = q.why;
  document.getElementById("reveal").className = "reveal";

  if(isCorrect) confettiBurst();
}

function nextQuestion(){
  if(!answered) return;
  if(current < QUESTIONS_PER_GAME - 1){
    current++;
    renderQuestion();
  } else {
    endGame();
  }
}

function endGame(){
  clearInterval(timerInterval);
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.remove("hidden");
  document.getElementById("finalScore").textContent = `${score} / ${QUESTIONS_PER_GAME}`;
  document.getElementById("finalStatus").textContent = score >= QUALIFY_SCORE
    ? "Bravo, score éligible pour un cadeau"
    : "Merci d’avoir participé";
  if(score >= QUALIFY_SCORE) confettiBurst();
}

function toggleFullscreen(){
  if(!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
}

function confettiBurst(){
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  c.width = innerWidth;
  c.height = innerHeight;
  const pieces = Array.from({length:150}, () => ({
    x:Math.random()*c.width,
    y:-20-Math.random()*220,
    s:5+Math.random()*9,
    v:3+Math.random()*7,
    a:Math.random()*Math.PI*2,
    color:["#ff7a18","#ffb000","#ffffff","#f6c7d7","#cfefff","#cfefcf"][Math.floor(Math.random()*6)]
  }));
  let frame=0;
  function loop(){
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p=>{
      p.y+=p.v;
      p.x+=Math.sin(frame/10+p.a)*2.4;
      p.a+=.08;
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.a);
      ctx.fillStyle=p.color;
      ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*1.7);
      ctx.restore();
    });
    frame++;
    if(frame<150) requestAnimationFrame(loop);
    else ctx.clearRect(0,0,c.width,c.height);
  }
  loop();
}

document.addEventListener("keydown", e => {
  if(e.key.toLowerCase() === "o") answer(true);
  if(e.key.toLowerCase() === "n") answer(false);
  if(e.key === "ArrowRight") nextQuestion();
});
