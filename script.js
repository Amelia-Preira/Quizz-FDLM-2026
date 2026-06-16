const QUESTIONS = [
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

let current = 0;
let timerMode = "auto";
let timerDuration = 15;
let timeLeft = timerDuration;
let timerInterval = null;
let answered = false;

let audioCtx = null;
let musicOn = false;
let musicTimer = null;

const timerProgress = () => document.getElementById("timerProgress");
const timerText = () => document.getElementById("timer");

function calculateReadingTime(question){
  const words = question.trim().split(/\s+/).length;
  // Temps de lecture confortable sur écran/TV : environ 2,4 mots par seconde + 6 s pour répondre.
  const seconds = Math.ceil(words / 2.4) + 6;
  return Math.min(26, Math.max(12, seconds));
}

function getQuestionDuration(q){
  if(timerMode === "auto") return calculateReadingTime(q.question);
  return Number(timerMode);
}

function renderQuestion(){
  const q = QUESTIONS[current];
  timerDuration = getQuestionDuration(q);

  document.getElementById("counter").textContent = `Question ${current + 1} / ${QUESTIONS.length}`;
  document.getElementById("chronoMode").textContent = timerMode === "auto"
    ? `Top chrono automatique : ${timerDuration} s`
    : `Chrono fixe : ${timerDuration} s`;
  document.getElementById("question").textContent = q.question;

  document.getElementById("reveal").className = "reveal hidden";
  document.getElementById("feedback").className = "feedback";
  document.getElementById("feedback").textContent = "";
  document.getElementById("correctAnswer").textContent = "";
  document.getElementById("explanation").textContent = "";
  document.querySelectorAll(".round").forEach(b => b.disabled = false);
  document.getElementById("quizCard").className = "quiz-card";

  answered = false;
  restartTimer();
}

function setTimerMode(mode){
  timerMode = mode;
  renderQuestion();
}

function restartTimer(){
  clearInterval(timerInterval);
  timeLeft = timerDuration;
  updateTimerDisplay();

  if(!answered){
    timerInterval = setInterval(() => {
      timeLeft--;
      tickSound();
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

  const q = QUESTIONS[current];
  const isCorrect = choice === q.answer;
  revealAnswer(isCorrect, q, false);
}

function timeoutReveal(){
  if(answered) return;
  const q = QUESTIONS[current];
  revealAnswer(false, q, true);
}

function revealAnswer(isCorrect, q, timeout){
  answered = true;
  document.querySelectorAll(".round").forEach(b => b.disabled = true);

  const feedback = document.getElementById("feedback");
  const correctAnswer = document.getElementById("correctAnswer");
  const explanation = document.getElementById("explanation");
  const reveal = document.getElementById("reveal");
  const card = document.getElementById("quizCard");

  feedback.className = "feedback " + (timeout ? "timeout" : (isCorrect ? "correct" : "wrong"));
  feedback.textContent = timeout ? "Temps écoulé" : (isCorrect ? "Bonne réponse" : "Mauvaise réponse");

  correctAnswer.textContent = "Réponse : " + (q.answer ? "Oui" : "Non");
  explanation.textContent = q.why;
  reveal.className = "reveal";
  card.className = "quiz-card " + (isCorrect ? "good" : "bad");

  if(isCorrect){
    successSound();
    confettiBurst();
  } else {
    wrongSound();
  }
}

function nextQuestion(){
  current = (current + 1) % QUESTIONS.length;
  renderQuestion();
}

function previousQuestion(){
  current = (current - 1 + QUESTIONS.length) % QUESTIONS.length;
  renderQuestion();
}

function toggleFullscreen(){
  if(!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
}

function ensureAudio(){
  if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function tone(freq, duration, type="sine", volume=.05){
  if(!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = volume;
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + duration);
  osc.stop(audioCtx.currentTime + duration);
}

function tickSound(){
  ensureAudio();
  tone(timeLeft <= 5 ? 760 : 520, .08, "square", .022);
}

function successSound(){
  ensureAudio();
  tone(523,.12,"sine",.05);
  setTimeout(()=>tone(659,.12,"sine",.05),120);
  setTimeout(()=>tone(784,.22,"sine",.06),240);
}

function wrongSound(){
  ensureAudio();
  tone(220,.18,"sawtooth",.04);
  setTimeout(()=>tone(160,.24,"sawtooth",.04),160);
}

function toggleMusic(){
  ensureAudio();
  musicOn = !musicOn;
  const btn = document.getElementById("musicBtn");
  btn.textContent = musicOn ? "🎵" : "🔇";
  btn.className = musicOn ? "music-toggle on" : "music-toggle";

  clearInterval(musicTimer);
  if(musicOn){
    const notes = [196,247,294,330,392,330,294,247];
    let i = 0;
    musicTimer = setInterval(() => {
      tone(notes[i % notes.length], .32, "sine", .018);
      if(i % 2 === 0) tone(notes[(i+2) % notes.length] / 2, .38, "triangle", .012);
      i++;
    }, 360);
  }
}

function confettiBurst(){
  const c = document.getElementById("confetti");
  const ctx = c.getContext("2d");
  c.width = innerWidth;
  c.height = innerHeight;

  const pieces = Array.from({length:180}, () => ({
    x: Math.random()*c.width,
    y: -20 - Math.random()*220,
    s: 5 + Math.random()*9,
    v: 3 + Math.random()*7,
    a: Math.random()*Math.PI*2,
    color: ["#ff7a18","#ffb000","#ffffff","#f6c7d7","#cfefff","#cfefcf"][Math.floor(Math.random()*6)]
  }));

  let frame = 0;
  function loop(){
    ctx.clearRect(0,0,c.width,c.height);
    pieces.forEach(p => {
      p.y += p.v;
      p.x += Math.sin(frame/10 + p.a) * 2.4;
      p.a += .08;
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.a);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*1.7);
      ctx.restore();
    });
    frame++;
    if(frame < 160) requestAnimationFrame(loop);
    else ctx.clearRect(0,0,c.width,c.height);
  }
  loop();
}

document.addEventListener("keydown", (e) => {
  if(e.key === "ArrowRight") nextQuestion();
  if(e.key === "ArrowLeft") previousQuestion();
  if(e.key.toLowerCase() === "o") answer(true);
  if(e.key.toLowerCase() === "n") answer(false);
  if(e.key === " ") restartTimer();
  if(e.key.toLowerCase() === "m") toggleMusic();
});

renderQuestion();
