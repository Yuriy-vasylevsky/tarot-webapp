


// const tg = window.Telegram?.WebApp;
// if (tg) {
//   tg.expand();
//   tg.setHeaderColor('#2e3192');
//   tg.setBackgroundColor('#1b1464');
// }
// console.log("🍌 Minion Tarot ready");

// const btnSend = document.getElementById("btn-send");
// const sendBlock = document.getElementById("send-block");
// const cardTitle = document.getElementById("card-title");

// // === IP користувача (зовнішня адреса) ===
// let userIp = null;

// // пробуємо дізнатись IP одразу при завантаженні WebApp
// fetch("https://api.ipify.org?format=json")
//   .then(res => res.json())
//   .then(data => {
//     userIp = data.ip;
//     console.log("📡 User IP:", userIp);
//   })
//   .catch(err => {
//     console.warn("Не вдалось отримати IP:", err);
//   });

// const CARD_MAP = {
//   "The Fool": { ua: "🤹‍♂️ Блазень", img: "images/cards/the_fool_upright.jpg" },
//   "The Magician": { ua: "🪄 Маг", img: "images/cards/the_magician_upright.jpg" },
//   "The High Priestess": { ua: "🌙 Жриця", img: "images/cards/the_high_priestess_upright.jpg" },
//   "The Empress": { ua: "🌸 Імператриця", img: "images/cards/the_empress_upright.jpg" },
//   "The Emperor": { ua: "👑 Імператор", img: "images/cards/the_emperor_upright.jpg" },
//   "The Hierophant": { ua: "📜 Ієрофант", img: "images/cards/the_hierophant_upright.jpg" },
//   "The Lovers": { ua: "💞 Закохані", img: "images/cards/the_lovers_upright.jpg" },
//   "The Chariot": { ua: "🚗 Колісниця", img: "images/cards/the_chariot_upright.jpg" },
//   "Strength": { ua: "🦁 Сила", img: "images/cards/strength_upright.jpg" },
//   "The Hermit": { ua: "🕯 Відлюдник", img: "images/cards/the_hermit_upright.jpg" },
//   "Wheel of Fortune": { ua: "🎡 Колесо Фортуни", img: "images/cards/wheel_of_fortune_upright.jpg" },
//   "Justice": { ua: "⚖️ Справедливість", img: "images/cards/justice_upright.jpg" },
//   "The Hanged Man": { ua: "🪶 Повішений", img: "images/cards/the_hanged_man_upright.jpg" },
//   "Death": { ua: "💀 Смерть", img: "images/cards/death_upright.jpg" },
//   "Temperance": { ua: "🌈 Помірність", img: "images/cards/temperance_upright.jpg" },
//   "The Devil": { ua: "😈 Диявол", img: "images/cards/the_devil_upright.jpg" },
//   "The Tower": { ua: "🏰 Вежа", img: "images/cards/the_tower_upright.jpg" },
//   "The Star": { ua: "⭐ Зірка", img: "images/cards/the_star_upright.jpg" },
//   "The Moon": { ua: "🌕 Місяць", img: "images/cards/the_moon_upright.jpg" },
//   "The Sun": { ua: "🌞 Сонце", img: "images/cards/the_sun_upright.jpg" },
//   "Judgement": { ua: "🎺 Суд", img: "images/cards/judgement_upright.jpg" },
//   "The World": { ua: "🌍 Світ", img: "images/cards/the_world_upright.jpg" },

//   // WANDS
//   "Ace of Wands": { ua: "🔥 Туз Жезлів", img: "images/cards/wands_ace.jpg" },
//   "Two of Wands": { ua: "🔥 Двійка Жезлів", img: "images/cards/wands_2.jpg" },
//   "Three of Wands": { ua: "🔥 Трійка Жезлів", img: "images/cards/wands_3.jpg" },
//   "Four of Wands": { ua: "🔥 Четвірка Жезлів", img: "images/cards/wands_4.jpg" },
//   "Five of Wands": { ua: "🔥 П’ятірка Жезлів", img: "images/cards/wands_5.jpg" },
//   "Six of Wands": { ua: "🔥 Шістка Жезлів", img: "images/cards/wands_6.jpg" },
//   "Seven of Wands": { ua: "🔥 Сімка Жезлів", img: "images/cards/wands_7.jpg" },
//   "Eight of Wands": { ua: "🔥 Вісімка Жезлів", img: "images/cards/wands_8.jpg" },
//   "Nine of Wands": { ua: "🔥 Дев’ятка Жезлів", img: "images/cards/wands_9.jpg" },
//   "Ten of Wands": { ua: "🔥 Десятка Жезлів", img: "images/cards/wands_10.jpg" },
//   "Page of Wands": { ua: "🔥 Паж Жезлів", img: "images/cards/wands_page.jpg" },
//   "Knight of Wands": { ua: "🔥 Лицар Жезлів", img: "images/cards/wands_knight.jpg" },
//   "Queen of Wands": { ua: "🔥 Королева Жезлів", img: "images/cards/wands_queen.jpg" },
//   "King of Wands": { ua: "🔥 Король Жезлів", img: "images/cards/wands_king.jpg" },

//   // PENTACLES
//   "Ace of Pentacles": { ua: "⭐ Туз Пентаклів", img: "images/cards/pentacles_ace.jpg" },
//   "Two of Pentacles": { ua: "⭐ Двійка Пентаклів", img: "images/cards/pentacles_2.jpg" },
//   "Three of Pentacles": { ua: "⭐ Трійка Пентаклів", img: "images/cards/pentacles_3.jpg" },
//   "Four of Pentacles": { ua: "⭐ Четвірка Пентаклів", img: "images/cards/pentacles_4.jpg" },
//   "Five of Pentacles": { ua: "⭐ П’ятірка Пентаклів", img: "images/cards/pentacles_5.jpg" },
//   "Six of Pentacles": { ua: "⭐ Шістка Пентаклів", img: "images/cards/pentacles_6.jpg" },
//   "Seven of Pentacles": { ua: "⭐ Сімка Пентаклів", img: "images/cards/pentacles_7.jpg" },
//   "Eight of Pentacles": { ua: "⭐ Вісімка Пентаклів", img: "images/cards/pentacles_8.jpg" },
//   "Nine of Pentacles": { ua: "⭐ Дев’ятка Пентаклів", img: "images/cards/pentacles_9.jpg" },
//   "Ten of Pentacles": { ua: "⭐ Десятка Пентаклів", img: "images/cards/pentacles_10.jpg" },
//   "Page of Pentacles": { ua: "⭐ Паж Пентаклів", img: "images/cards/pentacles_page.jpg" },
//   "Knight of Pentacles": { ua: "⭐ Лицар Пентаклів", img: "images/cards/pentacles_knight.jpg" },
//   "Queen of Pentacles": { ua: "⭐ Королева Пентаклів", img: "images/cards/pentacles_queen.jpg" },
//   "King of Pentacles": { ua: "⭐ Король Пентаклів", img: "images/cards/pentacles_king.jpg" },

//   // SWORDS
//   "Ace of Swords": { ua: "⚔️ Туз Мечів", img: "images/cards/swords_ace.jpg" },
//   "Two of Swords": { ua: "⚔️ Двійка Мечів", img: "images/cards/swords_2.jpg" },
//   "Three of Swords": { ua: "⚔️ Трійка Мечів", img: "images/cards/swords_3.jpg" },
//   "Four of Swords": { ua: "⚔️ Четвірка Мечів", img: "images/cards/swords_4.jpg" },
//   "Five of Swords": { ua: "⚔️ П’ятірка Мечів", img: "images/cards/swords_5.jpg" },
//   "Six of Swords": { ua: "⚔️ Шістка Мечів", img: "images/cards/swords_6.jpg" },
//   "Seven of Swords": { ua: "⚔️ Сімка Мечів", img: "images/cards/swords_7.jpg" },
//   "Eight of Swords": { ua: "⚔️ Вісімка Мечів", img: "images/cards/swords_8.jpg" },
//   "Nine of Swords": { ua: "⚔️ Дев’ятка Мечів", img: "images/cards/swords_9.jpg" },
//   "Ten of Swords": { ua: "⚔️ Десятка Мечів", img: "images/cards/swords_10.jpg" },
//   "Page of Swords": { ua: "⚔️ Паж Мечів", img: "images/cards/swords_page.jpg" },
//   "Knight of Swords": { ua: "⚔️ Лицар Мечів", img: "images/cards/swords_knight.jpg" },
//   "Queen of Swords": { ua: "⚔️ Королева Мечів", img: "images/cards/swords_queen.jpg" },
//   "King of Swords": { ua: "⚔️ Король Мечів", img: "images/cards/swords_king.jpg" },

//   // CUPS
//   "Ace of Cups": { ua: "💧 Туз Кубків", img: "images/cards/cups_ace.jpg" },
//   "Two of Cups": { ua: "💧 Двійка Кубків", img: "images/cards/cups_2.jpg" },
//   "Three of Cups": { ua: "💧 Трійка Кубків", img: "images/cards/cups_3.jpg" },
//   "Four of Cups": { ua: "💧 Четвірка Кубків", img: "images/cards/cups_4.jpg" },
//   "Five of Cups": { ua: "💧 П’ятірка Кубків", img: "images/cards/cups_5.jpg" },
//   "Six of Cups": { ua: "💧 Шістка Кубків", img: "images/cards/cups_6.jpg" },
//   "Seven of Cups": { ua: "💧 Сімка Кубків", img: "images/cards/cups_7.jpg" },
//   "Eight of Cups": { ua: "💧 Вісімка Кубків", img: "images/cards/cups_8.jpg" },
//   "Nine of Cups": { ua: "💧 Дев’ятка Кубків", img: "images/cards/cups_9.jpg" },
//   "Ten of Cups": { ua: "💧 Десятка Кубків", img: "images/cards/cups_10.jpg" },
//   "Page of Cups": { ua: "💧 Паж Кубків", img: "images/cards/cups_page.jpg" },
//   "Knight of Cups": { ua: "💧 Лицар Кубків", img: "images/cards/cups_knight.jpg" },
//   "Queen of Cups": { ua: "💧 Королева Кубків", img: "images/cards/cups_queen.jpg" },
//   "King of Cups": { ua: "💧 Король Кубків", img: "images/cards/cups_king.jpg" }
// };


// function getCardImg(name){ return CARD_MAP[name]?.img || "images/cards/the_fool_upright.jpg"; }
// function getUaName(name){ return CARD_MAP[name]?.ua  || name; }

// // === Елементи ===
// const intro = document.getElementById('stage-intro');
// const shuffle = document.getElementById('stage-shuffle');
// const pick = document.getElementById('stage-pick');
// const btnShuffle = document.getElementById('btn-shuffle');
// // const btnReset = document.getElementById('btn-reset'); // у тебе в HTML він закоментований
// const cardsWrap = document.getElementById('cards');
// const shuffleCaption = document.getElementById('shuffle-caption');

// const TAROT = Object.keys(CARD_MAP);
// const state = { candidates: [], chosenIndex: null };

// function el(tag, cls){
//   const n = document.createElement(tag);
//   if (cls) n.className = cls;
//   return n;
// }

// function setStage(s){
//   [intro, shuffle, pick].forEach(n => n.classList.add('hidden'));
//   s.classList.remove('hidden');
//   s.classList.add('fade');
// }

// function randCard(){
//   const name = TAROT[Math.floor(Math.random() * TAROT.length)];
//   const upright = Math.random() > 0.3;
//   return { name, upright };
// }

// function cardNode(card, index){
//   const c = el('div', 'card');
//   c.dataset.index = index;
//   c.style.animationDelay = (Math.random() * 1.5).toFixed(2) + 's';

//   const inner = el('div', 'card-inner');
//   const back = el('div', 'face back');
//   const front = el('div', 'face front');

//   front.style.backgroundImage = `url('${getCardImg(card.name)}')`;
//   if (!card.upright) front.classList.add('reversed');

//   inner.append(back, front);
//   c.append(inner);

//   const label = el('div', 'card-label');
//   label.textContent = "";
//   c.append(label);

//   c.addEventListener('click', () => flipCard(index, c));
//   return c;
// }

// function shuffleFlow(){
//   setStage(shuffle);
//   shuffleCaption.textContent = "Міньйони тасують карти…";

//   setTimeout(() => {
//     startPick();
//   }, 4000);
// }

// function startPick(){
//   state.candidates = [randCard(), randCard(), randCard()];
//   state.chosenIndex = null;
//   setStage(pick);

//   cardsWrap.innerHTML = '';
//   sendBlock.classList.remove("visible");
//   sendBlock.style.display = "none";
//   cardTitle.textContent = "Довірся своїй інтуіції та вибери карту";

//   state.candidates.forEach((c, i) => {
//     cardsWrap.appendChild(cardNode(c, i));
//   });
// }

// function flipCard(index, node){
//   if (state.chosenIndex !== null) return;

//   state.chosenIndex = index;

//   node.classList.add('flip', 'revealed');

//   document.querySelectorAll(".card").forEach((card, i) => {
//     if (i !== index) card.classList.add("dimmed");
//   });

//   setTimeout(() => {
//     const c = state.candidates[index];
//     cardTitle.textContent = `${getUaName(c.name)} ${c.upright ? "⬆️" : "⬇️"}`;
//     const lbl = node.querySelector('.card-label');
//     lbl.textContent = `${getUaName(c.name)} ${c.upright ? '⬆️' : '⬇️'}`;
//   }, 600);

//   setTimeout(() => {
//     sendBlock.style.display = "flex";
//     setTimeout(() => sendBlock.classList.add("visible"), 20);
//   }, 750);
// }

// // === Клік по кнопці "Зробити аналіз" ===
// btnSend.addEventListener("click", async () => {
//   if (!tg || state.chosenIndex === null) return;

//   // якщо раптом IP ще не встиг підтягнутись — пробуємо ще раз
//   let ip = userIp;
//   if (!ip) {
//     try {
//       const res = await fetch("https://api.ipify.org?format=json");
//       const data = await res.json();
//       ip = data.ip;
//     } catch (e) {
//       console.warn("Не вдалось отримати IP вдруге:", e);
//       ip = null;
//     }
//   }

//   const chosen = state.candidates[state.chosenIndex];

//   const payload = {
//     action: "pick_card",
//     chosen,
//     candidates: state.candidates,
//     ip // <-- ось тут IP, якщо вдалося отримати
//   };

//   tg.sendData(JSON.stringify(payload));
//   tg.close();
// });

// // Події
// btnShuffle.addEventListener('click', shuffleFlow);
// // якщо колись додаси кнопку "Почати заново", розкоментуєш:
// // btnReset.addEventListener('click', () => setStage(intro));



// script.js
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

// === SFX ===
const sfxShuffle = document.getElementById("sfx-shuffle");
const sfxFlip = document.getElementById("sfx-flip");

function playSfx(audioEl, { loop = false, volume = 1 } = {}) {
  if (!audioEl) return;
  try {
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.loop = loop;
    audioEl.volume = volume;
    const p = audioEl.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  } catch (e) {}
}

function stopSfx(audioEl) {
  if (!audioEl) return;
  try {
    audioEl.pause();
    audioEl.currentTime = 0;
    audioEl.loop = false;
  } catch (e) {}
}

// === IP користувача (зовнішня адреса) ===
let userIp = null;

fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    userIp = data.ip;
    console.log("📡 User IP:", userIp);
  })
  .catch(err => {
    console.warn("Не вдалось отримати IP:", err);
  });

const CARD_MAP = {
  "The Fool": { ua: "🤹‍♂️ Блазень", img: "images/cards/the_fool_upright.jpg" },
  "The Magician": { ua: "🪄 Маг", img: "images/cards/the_magician_upright.jpg" },
  "The High Priestess": { ua: "🌙 Жриця", img: "images/cards/the_high_priestess_upright.jpg" },
  "The Empress": { ua: "🌸 Імператриця", img: "images/cards/the_empress_upright.jpg" },
  "The Emperor": { ua: "👑 Імператор", img: "images/cards/the_emperor_upright.jpg" },
  "The Hierophant": { ua: "📜 Ієрофант", img: "images/cards/the_hierophant_upright.jpg" },
  "The Lovers": { ua: "💞 Закохані", img: "images/cards/the_lovers_upright.jpg" },
  "The Chariot": { ua: "🚗 Колісниця", img: "images/cards/the_chariot_upright.jpg" },
  "Strength": { ua: "🦁 Сила", img: "images/cards/strength_upright.jpg" },
  "The Hermit": { ua: "🕯 Відлюдник", img: "images/cards/the_hermit_upright.jpg" },
  "Wheel of Fortune": { ua: "🎡 Колесо Фортуни", img: "images/cards/wheel_of_fortune_upright.jpg" },
  "Justice": { ua: "⚖️ Справедливість", img: "images/cards/justice_upright.jpg" },
  "The Hanged Man": { ua: "🪶 Повішений", img: "images/cards/the_hanged_man_upright.jpg" },
  "Death": { ua: "💀 Смерть", img: "images/cards/death_upright.jpg" },
  "Temperance": { ua: "🌈 Помірність", img: "images/cards/temperance_upright.jpg" },
  "The Devil": { ua: "😈 Диявол", img: "images/cards/the_devil_upright.jpg" },
  "The Tower": { ua: "🏰 Вежа", img: "images/cards/the_tower_upright.jpg" },
  "The Star": { ua: "⭐ Зірка", img: "images/cards/the_star_upright.jpg" },
  "The Moon": { ua: "🌕 Місяць", img: "images/cards/the_moon_upright.jpg" },
  "The Sun": { ua: "🌞 Сонце", img: "images/cards/the_sun_upright.jpg" },
  "Judgement": { ua: "🎺 Суд", img: "images/cards/judgement_upright.jpg" },
  "The World": { ua: "🌍 Світ", img: "images/cards/the_world_upright.jpg" },

  // WANDS
  "Ace of Wands": { ua: "🔥 Туз Жезлів", img: "images/cards/wands_ace.jpg" },
  "Two of Wands": { ua: "🔥 Двійка Жезлів", img: "images/cards/wands_2.jpg" },
  "Three of Wands": { ua: "🔥 Трійка Жезлів", img: "images/cards/wands_3.jpg" },
  "Four of Wands": { ua: "🔥 Четвірка Жезлів", img: "images/cards/wands_4.jpg" },
  "Five of Wands": { ua: "🔥 П’ятірка Жезлів", img: "images/cards/wands_5.jpg" },
  "Six of Wands": { ua: "🔥 Шістка Жезлів", img: "images/cards/wands_6.jpg" },
  "Seven of Wands": { ua: "🔥 Сімка Жезлів", img: "images/cards/wands_7.jpg" },
  "Eight of Wands": { ua: "🔥 Вісімка Жезлів", img: "images/cards/wands_8.jpg" },
  "Nine of Wands": { ua: "🔥 Дев’ятка Жезлів", img: "images/cards/wands_9.jpg" },
  "Ten of Wands": { ua: "🔥 Десятка Жезлів", img: "images/cards/wands_10.jpg" },
  "Page of Wands": { ua: "🔥 Паж Жезлів", img: "images/cards/wands_page.jpg" },
  "Knight of Wands": { ua: "🔥 Лицар Жезлів", img: "images/cards/wands_knight.jpg" },
  "Queen of Wands": { ua: "🔥 Королева Жезлів", img: "images/cards/wands_queen.jpg" },
  "King of Wands": { ua: "🔥 Король Жезлів", img: "images/cards/wands_king.jpg" },

  // PENTACLES
  "Ace of Pentacles": { ua: "⭐ Туз Пентаклів", img: "images/cards/pentacles_ace.jpg" },
  "Two of Pentacles": { ua: "⭐ Двійка Пентаклів", img: "images/cards/pentacles_2.jpg" },
  "Three of Pentacles": { ua: "⭐ Трійка Пентаклів", img: "images/cards/pentacles_3.jpg" },
  "Four of Pentacles": { ua: "⭐ Четвірка Пентаклів", img: "images/cards/pentacles_4.jpg" },
  "Five of Pentacles": { ua: "⭐ П’ятірка Пентаклів", img: "images/cards/pentacles_5.jpg" },
  "Six of Pentacles": { ua: "⭐ Шістка Пентаклів", img: "images/cards/pentacles_6.jpg" },
  "Seven of Pentacles": { ua: "⭐ Сімка Пентаклів", img: "images/cards/pentacles_7.jpg" },
  "Eight of Pentacles": { ua: "⭐ Вісімка Пентаклів", img: "images/cards/pentacles_8.jpg" },
  "Nine of Pentacles": { ua: "⭐ Дев’ятка Пентаклів", img: "images/cards/pentacles_9.jpg" },
  "Ten of Pentacles": { ua: "⭐ Десятка Пентаклів", img: "images/cards/pentacles_10.jpg" },
  "Page of Pentacles": { ua: "⭐ Паж Пентаклів", img: "images/cards/pentacles_page.jpg" },
  "Knight of Pentacles": { ua: "⭐ Лицар Пентаклів", img: "images/cards/pentacles_knight.jpg" },
  "Queen of Pentacles": { ua: "⭐ Королева Пентаклів", img: "images/cards/pentacles_queen.jpg" },
  "King of Pentacles": { ua: "⭐ Король Пентаклів", img: "images/cards/pentacles_king.jpg" },

  // SWORDS
  "Ace of Swords": { ua: "⚔️ Туз Мечів", img: "images/cards/swords_ace.jpg" },
  "Two of Swords": { ua: "⚔️ Двійка Мечів", img: "images/cards/swords_2.jpg" },
  "Three of Swords": { ua: "⚔️ Трійка Мечів", img: "images/cards/swords_3.jpg" },
  "Four of Swords": { ua: "⚔️ Четвірка Мечів", img: "images/cards/swords_4.jpg" },
  "Five of Swords": { ua: "⚔️ П’ятірка Мечів", img: "images/cards/swords_5.jpg" },
  "Six of Swords": { ua: "⚔️ Шістка Мечів", img: "images/cards/swords_6.jpg" },
  "Seven of Swords": { ua: "⚔️ Сімка Мечів", img: "images/cards/swords_7.jpg" },
  "Eight of Swords": { ua: "⚔️ Вісімка Мечів", img: "images/cards/swords_8.jpg" },
  "Nine of Swords": { ua: "⚔️ Дев’ятка Мечів", img: "images/cards/swords_9.jpg" },
  "Ten of Swords": { ua: "⚔️ Десятка Мечів", img: "images/cards/swords_10.jpg" },
  "Page of Swords": { ua: "⚔️ Паж Мечів", img: "images/cards/swords_page.jpg" },
  "Knight of Swords": { ua: "⚔️ Лицар Мечів", img: "images/cards/swords_knight.jpg" },
  "Queen of Swords": { ua: "⚔️ Королева Мечів", img: "images/cards/swords_queen.jpg" },
  "King of Swords": { ua: "⚔️ Король Мечів", img: "images/cards/swords_king.jpg" },

  // CUPS
  "Ace of Cups": { ua: "💧 Туз Кубків", img: "images/cards/cups_ace.jpg" },
  "Two of Cups": { ua: "💧 Двійка Кубків", img: "images/cards/cups_2.jpg" },
  "Three of Cups": { ua: "💧 Трійка Кубків", img: "images/cards/cups_3.jpg" },
  "Four of Cups": { ua: "💧 Четвірка Кубків", img: "images/cards/cups_4.jpg" },
  "Five of Cups": { ua: "💧 П’ятірка Кубків", img: "images/cards/cups_5.jpg" },
  "Six of Cups": { ua: "💧 Шістка Кубків", img: "images/cards/cups_6.jpg" },
  "Seven of Cups": { ua: "💧 Сімка Кубків", img: "images/cards/cups_7.jpg" },
  "Eight of Cups": { ua: "💧 Вісімка Кубків", img: "images/cards/cups_8.jpg" },
  "Nine of Cups": { ua: "💧 Дев’ятка Кубків", img: "images/cards/cups_9.jpg" },
  "Ten of Cups": { ua: "💧 Десятка Кубків", img: "images/cards/cups_10.jpg" },
  "Page of Cups": { ua: "💧 Паж Кубків", img: "images/cards/cups_page.jpg" },
  "Knight of Cups": { ua: "💧 Лицар Кубків", img: "images/cards/cups_knight.jpg" },
  "Queen of Cups": { ua: "💧 Королева Кубків", img: "images/cards/cups_queen.jpg" },
  "King of Cups": { ua: "💧 Король Кубків", img: "images/cards/cups_king.jpg" }
};

function getCardImg(name){ return CARD_MAP[name]?.img || "images/cards/the_fool_upright.jpg"; }
function getUaName(name){ return CARD_MAP[name]?.ua  || name; }

// === Елементи ===
const intro = document.getElementById('stage-intro');
const shuffle = document.getElementById('stage-shuffle');
const pick = document.getElementById('stage-pick');
const btnShuffle = document.getElementById('btn-shuffle');
const cardsWrap = document.getElementById('cards');
const shuffleCaption = document.getElementById('shuffle-caption');

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
  const upright = Math.random() > 0.3;
  return { name, upright };
}

function cardNode(card, index){
  const c = el('div', 'card');
  c.dataset.index = index;
  c.style.animationDelay = (Math.random() * 1.5).toFixed(2) + 's';

  const inner = el('div', 'card-inner');
  const back = el('div', 'face back');
  const front = el('div', 'face front');

  front.style.backgroundImage = `url('${getCardImg(card.name)}')`;
  if (!card.upright) front.classList.add('reversed');

  inner.append(back, front);
  c.append(inner);

  const label = el('div', 'card-label');
  label.textContent = "";
  c.append(label);

  c.addEventListener('click', () => flipCard(index, c));
  return c;
}

function shuffleFlow(){
  setStage(shuffle);
  shuffleCaption.textContent = "Міньйони тасують карти…";

  // SFX: shuffle
  playSfx(sfxShuffle, { loop: true, volume: 0.5 });

  setTimeout(() => {
    stopSfx(sfxShuffle);
    startPick();
  }, 3000);
}

function startPick(){
  state.candidates = [randCard(), randCard(), randCard()];
  state.chosenIndex = null;
  setStage(pick);

  cardsWrap.innerHTML = '';
  sendBlock.classList.remove("visible");
  sendBlock.style.display = "none";
  cardTitle.textContent = "Довірся своїй інтуіції та вибери карту";

  state.candidates.forEach((c, i) => {
    cardsWrap.appendChild(cardNode(c, i));
  });
}

function flipCard(index, node){
  if (state.chosenIndex !== null) return;

  // SFX: flip
  playSfx(sfxFlip, { loop: false, volume: 0.5 });

  state.chosenIndex = index;

  node.classList.add('flip', 'revealed');

  document.querySelectorAll(".card").forEach((card, i) => {
    if (i !== index) card.classList.add("dimmed");
  });

  setTimeout(() => {
    const c = state.candidates[index];
    cardTitle.textContent = `${getUaName(c.name)} ${c.upright ? "⬆️" : "⬇️"}`;
    const lbl = node.querySelector('.card-label');
    lbl.textContent = `${getUaName(c.name)} ${c.upright ? '⬆️' : '⬇️'}`;
  }, 600);

  setTimeout(() => {
    sendBlock.style.display = "flex";
    setTimeout(() => sendBlock.classList.add("visible"), 20);
  }, 750);
}

btnSend.addEventListener("click", async () => {
  if (!tg || state.chosenIndex === null) return;

  let ip = userIp;
  if (!ip) {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      ip = data.ip;
    } catch (e) {
      console.warn("Не вдалось отримати IP вдруге:", e);
      ip = null;
    }
  }

  const chosen = state.candidates[state.chosenIndex];

  const payload = {
    action: "pick_card",
    chosen,
    candidates: state.candidates,
    ip
  };

  tg.sendData(JSON.stringify(payload));
  tg.close();
});

btnShuffle.addEventListener('click', shuffleFlow);
