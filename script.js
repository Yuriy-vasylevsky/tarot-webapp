const tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.setHeaderColor('#2e3192');
  tg.setBackgroundColor('#1b1464');
}
console.log("🔮 Minion Tarot ready — Bello! 🍌");

const intro = document.getElementById('stage-intro');
const shuffle = document.getElementById('stage-shuffle');
const pick = document.getElementById('stage-pick');
const reveal = document.getElementById('stage-reveal');
const btnShuffle = document.getElementById('btn-shuffle');
const btnReset = document.getElementById('btn-reset');
const btnSend = document.getElementById('btn-send');
const shuffleBar = document.getElementById('shuffle-bar');
const shuffleCaption = document.getElementById('shuffle-caption');
const cardsWrap = document.getElementById('cards');
const revealArea = document.getElementById('reveal-area');
const workBar = document.getElementById('work-bar');
const workCaption = document.getElementById('work-caption');

const TAROT = [
  "The Fool","The Magician","The High Priestess","The Empress","The Emperor",
  "The Hierophant","The Lovers","The Chariot","Strength","The Hermit",
  "Wheel of Fortune","Justice","The Hanged Man","Death","Temperance",
  "The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"
];

const BASE_PATH = "images/cards/";
function cardImage(name, upright){
  const pos = upright ? "upright" : "reversed";
  return `${BASE_PATH}${name.toLowerCase().replaceAll(" ","_")}_${pos}.jpg`;
}

const state = { candidates: [], chosen: null };

function el(tag,cls){const n=document.createElement(tag);if(cls)n.className=cls;return n;}
function setStage(s){[intro,shuffle,pick,reveal].forEach(n=>n.classList.add('hidden'));s.classList.remove('hidden');s.classList.add('fade');}

function cardNode(faceText,pos,img,isBack=false){
  const c=el('div','card');
  const inner=el('div','card-inner');
  const back=el('div','face back');
  const front=el('div','face front');
  if(img) front.style.backgroundImage=`url('${img}')`;
  const h=el('h3');h.textContent=faceText;
  const p=el('div','pos');p.textContent=pos;
  front.append(h,p);
  inner.append(back,front);c.append(inner);
  return c;
}

function randCard(){
  const name=TAROT[Math.floor(Math.random()*TAROT.length)];
  const upright=Math.random()>0.4;
  return {name,upright};
}

function shuffleFlow(){
  setStage(shuffle);
  shuffleBar.style.width='0%';
  const steps=["Міньйони тасують карти…","Збирають магічну енергію…","Вирівнюють бананову чакру…"];
  let i=0,p=0;
  const id=setInterval(()=>{
    p=Math.min(100,p+8+Math.random()*6);
    shuffleBar.style.width=p+'%';
    if(i<steps.length&&p>(i+1)*(100/steps.length))shuffleCaption.textContent=steps[i++];
    if(p>=100){clearInterval(id);setTimeout(()=>startPick(),400);}
  },260);
}

function startPick(){
  state.candidates=[randCard(),randCard(),randCard()];
  setStage(pick);cardsWrap.innerHTML='';
  for(let i=0;i<3;i++){
    const n=cardNode('🂠','?',null,true);
    n.dataset.index=i;
    n.addEventListener('click',()=>choose(i));
    cardsWrap.appendChild(n);
  }
}

function choose(index){
  const c=state.candidates[index];
  state.chosen={index,...c};
  setStage(reveal);
  revealArea.innerHTML='';
  const label=c.name;
  const pos=c.upright?'⬆️ Пряма':'⬇️ Перевернута';
  const img=cardImage(c.name,c.upright);
  const card=cardNode(label,pos,img);
  revealArea.appendChild(card);
  setTimeout(()=>card.classList.add('flip'),100);

  workBar.style.width='0%';
  const phrases=['✨ Міньйони звертаються до долі…','🔮 Аналізують карту…','📜 Готують передбачення…','💫 Бананова енергія активована!'];
  let s=0,step=0;
  const id=setInterval(()=>{
    step++;const pct=Math.min(100,step*22);
    workBar.style.width=pct+'%';
    if(s<phrases.length)workCaption.textContent=phrases[s++];
    if(pct>=100)clearInterval(id);
  },420);
}

function sendToBot(){
  const payload={action:'pick_card',chosen:state.chosen,candidates:state.candidates};
  console.log("📤 Надсилаю боту:",payload);
  if(tg){try{tg.sendData(JSON.stringify(payload));tg.close();}catch(e){alert("❌ Помилка: "+e);}}
  else alert("⚠️ WebApp не в Telegram — режим тесту.");
}

btnShuffle.addEventListener('click',shuffleFlow);
btnReset.addEventListener('click',()=>setStage(intro));
btnSend.addEventListener('click',sendToBot);
