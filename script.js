
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.setHeaderColor('#2e3192');
  tg.setBackgroundColor('#1b1464');
}
console.log("🍌 Minion Tarot ready");
const btnSend = document.getElementById("btn-send");
const sendBlock = document.getElementById("send-block");
const cardTitle = document.getElementById("card-title");



// === Карти (повна мапа назв і шляхів) ===
const CARD_MAP = {
  "The Fool":         { ua: "🤹‍♂️ Блазень",         img: "images/cards/the_fool_upright.jpg" },
  "The Magician":     { ua: "🪄 Маг",               img: "images/cards/the_magician_upright.jpg" },
  "The High Priestess":{ ua: "🌙 Жриця",            img: "images/cards/the_high_priestess_upright.jpg" },
  "The Empress":      { ua: "🌸 Імператриця",       img: "images/cards/the_empress_upright.jpg" },
  "The Emperor":      { ua: "👑 Імператор",         img: "images/cards/the_emperor_upright.jpg" },
  "The Hierophant":   { ua: "📜 Ієрофант",          img: "images/cards/the_hierophant_upright.jpg" },
  "The Lovers":       { ua: "💞 Закохані",          img: "images/cards/the_lovers_upright.jpg" },
  "The Chariot":      { ua: "🚗 Колісниця",         img: "images/cards/the_chariot_upright.jpg" },
  "Strength":         { ua: "🦁 Сила",              img: "images/cards/strength_upright.jpg" },
  "The Hermit":       { ua: "🕯 Відлюдник",         img: "images/cards/the_hermit_upright.jpg" },
  "Wheel of Fortune": { ua: "🎡 Колесо Фортуни",    img: "images/cards/wheel_of_fortune_upright.jpg" },
  "Justice":          { ua: "⚖️ Справедливість",    img: "images/cards/justice_upright.jpg" },
  "The Hanged Man":   { ua: "🪶 Повішений",         img: "images/cards/the_hanged_man_upright.jpg" },
  "Death":            { ua: "💀 Смерть",            img: "images/cards/death_upright.jpg" },
  "Temperance":       { ua: "🌈 Помірність",        img: "images/cards/temperance_upright.jpg" },
  "The Devil":        { ua: "😈 Диявол",            img: "images/cards/the_devil_upright.jpg" },
  "The Tower":        { ua: "🏰 Вежа",              img: "images/cards/the_tower_upright.jpg" },
  "The Star":         { ua: "⭐ Зірка",              img: "images/cards/the_star_upright.jpg" },
  "The Moon":         { ua: "🌕 Місяць",            img: "images/cards/the_moon_upright.jpg" },
  "The Sun":          { ua: "🌞 Сонце",             img: "images/cards/the_sun_upright.jpg" },
  "Judgement":        { ua: "🎺 Суд",               img: "images/cards/judgement_upright.jpg" },
  "The World":        { ua: "🌍 Світ",              img: "images/cards/the_world_upright.jpg" },
};

function getCardImg(name){ return CARD_MAP[name]?.img || "images/cards/the_fool_upright.jpg"; }
function getUaName(name){ return CARD_MAP[name]?.ua  || name; }

// === Елементи ===
const intro = document.getElementById('stage-intro');
const shuffle = document.getElementById('stage-shuffle');
const pick = document.getElementById('stage-pick');
const btnShuffle = document.getElementById('btn-shuffle');
const btnReset = document.getElementById('btn-reset');
const shuffleBar = document.getElementById('shuffle-bar');
const shuffleCaption = document.getElementById('shuffle-caption');
const cardsWrap = document.getElementById('cards');

const TAROT = Object.keys(CARD_MAP);
const state = { candidates: [], chosenIndex: null };

function el(tag, cls){
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
}

function setStage(s){
  [intro, shuffle, pick].forEach(n => n.classList.add('hidden'));
  s.classList.remove('hidden');
  s.classList.add('fade');
}

function randCard(){
  const name = TAROT[Math.floor(Math.random() * TAROT.length)];
  const upright = Math.random() > 0.4;
  return { name, upright };
}

// === Карта (одна) ===
function cardNode(card, index){
  const c = el('div', 'card');
  c.dataset.index = index;

  // невеличкий рандомний зсув анімації, щоб карти "плавали" не синхронно
  c.style.animationDelay = (Math.random() * 1.5).toFixed(2) + 's';

  const inner = el('div', 'card-inner');
  const back = el('div', 'face back');
  const front = el('div', 'face front');

  front.style.backgroundImage = `url('${getCardImg(card.name)}')`;
  if (!card.upright) front.classList.add('reversed');

  inner.append(back, front);
  c.append(inner);

  // Підпис без тексту — з’явиться тільки після відкриття
  const label = el('div', 'card-label');
  label.textContent = "";
  c.append(label);

  c.addEventListener('click', () => flipCard(index, c));
  return c;
}

// === Перемішування ===
function shuffleFlow(){
  setStage(shuffle);

  // звук (якщо хочеш використовувати)
  // document.getElementById("shuffleSound").play();

  // показуємо сцену на 3 секунди
  setTimeout(() => {
    startPick();
  }, 4000);
}


// === Початок вибору ===
function startPick(){
  state.candidates = [randCard(), randCard(), randCard()];
  state.chosenIndex = null;
  setStage(pick);
  
  cardsWrap.innerHTML = '';
  sendBlock.classList.remove("visible");
  sendBlock.style.display = "none";
  
  cardTitle.textContent = "Вибери карту";

  state.candidates.forEach((c, i) => {
    cardsWrap.appendChild(cardNode(c, i));
  });
}


// === Перевертання карти ===

function flipCard(index, node){
  if (state.chosenIndex !== null) return;

  state.chosenIndex = index;

  // Переворот
  node.classList.add('flip', 'revealed');

  // Затемнити всі інші
  document.querySelectorAll(".card").forEach((card, i) => {
    if (i !== index) card.classList.add("dimmed");
  });

  // Показати назву карти у верхньому тексті
  setTimeout(() => {
    const c = state.candidates[index];
    cardTitle.textContent = `${getUaName(c.name)} ${c.upright ? "⬆️" : "⬇️"}`;

    // Показати підпис під картою
    const lbl = node.querySelector('.card-label');
    lbl.textContent = `${getUaName(c.name)} ${c.upright ? '⬆️' : '⬇️'}`;
  }, 600);

  // Показати кнопку з анімацією
  setTimeout(() => {
    sendBlock.style.display = "flex";
    setTimeout(() => sendBlock.classList.add("visible"), 20);
  }, 750);
}


btnSend.addEventListener("click", () => {
  if (!tg || state.chosenIndex === null) return;

  const chosen = state.candidates[state.chosenIndex];

  const payload = {
    action: "pick_card",
    chosen,
    candidates: state.candidates
  };

  tg.sendData(JSON.stringify(payload));
  tg.close();
});


// === Події ===
btnShuffle.addEventListener('click', shuffleFlow);
btnReset.addEventListener('click', () => setStage(intro));


