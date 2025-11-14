const tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.setHeaderColor('#2e3192');
  tg.setBackgroundColor('#1b1464');
  console.log("Telegram WebApp detected");
} else {
  console.log("Running outside Telegram (dev mode)");
}

// === Елементи ===
const introStage   = document.getElementById('stage-intro');
const shuffleStage = document.getElementById('stage-shuffle');
const pickStage    = document.getElementById('stage-pick');

const btnShuffle   = document.getElementById('btn-shuffle');
const cardsWrap    = document.getElementById('cards');
const cardTitle    = document.getElementById('card-title');
const sendBlock    = document.getElementById('send-block');
const btnSend      = document.getElementById('btn-send');

// === Карти (мапа як у "карти дня") ===
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

const TAROT = Object.keys(CARD_MAP);

const state = {
  cards: [],           // 7 карт
  selectedIndices: []  // індекси в порядку кліків
};

// === Хелпери ===
function setStage(stage) {
  [introStage, shuffleStage, pickStage].forEach(el => el.classList.add('hidden'));
  stage.classList.remove('hidden');
  stage.classList.add('fade');
}

function getRandomCards(count) {
  const pool = [...TAROT];
  const result = [];

  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    const name = pool.splice(idx, 1)[0];
    result.push({
      name,
      upright: Math.random() > 0.4
    });
  }
  return result;
}

function createCardNode(cardData, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.index = String(index);

  // різна затримка анімації "float"
  card.style.animationDelay = (Math.random() * 1.5).toFixed(2) + 's';

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const back = document.createElement('div');
  back.className = 'face back';

  const front = document.createElement('div');
  front.className = 'face front';
  front.style.backgroundImage = `url('${CARD_MAP[cardData.name].img}')`;

  if (!cardData.upright) {
    front.classList.add('reversed');
  }

  inner.append(back, front);
  card.append(inner);

  card.addEventListener('click', () => handleCardClick(index, card));

  return card;
}

function handleCardClick(index, node) {
  // вже вибрана / вже є 3 — не реагуємо
  if (state.selectedIndices.includes(index)) return;
  if (state.selectedIndices.length >= 3) return;

  state.selectedIndices.push(index);
  node.classList.add('flip', 'revealed');

  const left = 3 - state.selectedIndices.length;
  if (left > 0) {
    cardTitle.textContent =
      left === 2 ? "Обери ще 2 карти" :
      left === 1 ? "Обери ще 1 карту" :
      "Обери 3 карти";
    return;
  }

  // вибрано 3
  finalizeSelection();
}

function finalizeSelection() {
  cardTitle.textContent = "Твої 3 карти:";

  const allNodes = Array.from(document.querySelectorAll('.card'));

  // згасити / прибрати невибрані
  allNodes.forEach(node => {
    const idx = Number(node.dataset.index);
    if (!state.selectedIndices.includes(idx)) {
      node.classList.add('dimmed');
      node.style.opacity = '0';
      node.style.transform = 'scale(0.85)';
      setTimeout(() => node.remove(), 400);
    }
  });

  // через мить — залишити тільки 3 та відцентрувати
  setTimeout(() => {
    cardsWrap.innerHTML = '';
    cardsWrap.classList.add('center-row');

    state.selectedIndices.forEach(idx => {
      const data = state.cards[idx];
      const node = createCardNode(data, idx);
      node.classList.add('flip', 'revealed');
      cardsWrap.appendChild(node);
    });

    // показати кнопку відправки
    sendBlock.style.display = "flex";
    setTimeout(() => sendBlock.classList.add("visible"), 20);
  }, 420);
}

function startPickStage() {
  state.cards = getRandomCards(7);
  state.selectedIndices = [];

  cardsWrap.classList.remove('center-row');
  cardsWrap.innerHTML = '';

  sendBlock.classList.remove('visible');
  sendBlock.style.display = "none";

  cardTitle.textContent = "Довірся своїй інтуїції та обери 3 карти";

  state.cards.forEach((c, i) => {
    cardsWrap.appendChild(createCardNode(c, i));
  });

  setStage(pickStage);
}

// === Обробники ===
btnShuffle.addEventListener('click', () => {
  setStage(shuffleStage);

  // даємо анімації тасування відпрацювати
  setTimeout(startPickStage, 3800);
});

btnSend.addEventListener('click', () => {
  const chosen = state.selectedIndices.map(i => state.cards[i]);

  const payload = {
    action: "three_cards",    // ти в боті ловиш data.action == "three_cards"
    chosen,                   // 3 карти у порядку вибору
    candidates: state.cards   // всі 7 карт (якщо захочеш використати)
  };

  if (tg) {
    tg.sendData(JSON.stringify(payload));
    tg.close();
  } else {
    alert("DEBUG payload:\n" + JSON.stringify(payload, null, 2));
  }
});

// стартова сцена
setStage(introStage);
