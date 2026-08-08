const data=[
["Yalı Çapkını","Dramă, Romance","8.7","assets/yalicapkini.jpg",false,"Yalı Çapkını este o dramă romantică despre familie, dragoste și secrete."],
["Kızılcık Şerbeti","Dramă","8.5","assets/kizilcik.jpg",false,"O poveste despre două familii și diferențele dintre ele."],
["Emanet","Dramă, Romance","8.4","assets/emanet.jpg",false,"O poveste despre familie și iubire."],
["Rüzgarlı Tepe","Dramă, Romance","8.3","assets/ruzgarlitepe.jpg",false,"Dragoste și alegeri dificile."],
["Hudutsuz Sevda","Dramă","8.2","assets/hudutsuzsevda.jpg",false,"Răzbunare, familie și confruntări."],
["Gönül Dağı","Dramă, Familie","8.1","assets/gonuldagi.jpg",false,"Viață, familie și vise."],
["Siyah Kalp","Dramă","8.0","assets/siyahkalp.jpg",true,"Un nou început și secrete de familie."],
["Leyla: Hayat... Aşk... Adalet...","Dramă","7.9","assets/leyla.jpg",true,"Iubire, dreptate și alegeri."],
["Bir Gece Masalı","Dramă, Romance","7.9","assets/birgecemasali.jpg",true,"O întâlnire care schimbă două destine."],
["Sahipsizler","Dramă","8.0","assets/sahipsizler.jpg",true,"Frați care încearcă să rămână împreună."],
["Gizli Bahçe","Dramă, Romance","7.7","assets/gizlibahce.jpg",true,"Secrete și sentimente ascunse."],
["Aşk ve Gözyaşı","Dramă, Romance","7.6","assets/askgozyasi.jpg",true,"O poveste despre iubire și regăsire."]
];
const popular=document.querySelector("#popularGrid"), newer=document.querySelector("#newGrid"), search=document.querySelector("#search");
function makeCard(s){return `<article class="card" onclick="openDetails('${s[0].replaceAll("'","\\'")}')"><div class="poster"><img src="${s[3]}" alt="${s[0]} poster"><span class="${s[4]?'new':'score'}">${s[4]?'NOU':'★ '+s[2]}</span></div><div class="info"><h3>${s[0]}</h3><div class="meta">${s[1]}</div><span class="tag">${s[4]?'EP. 3':'EP. NOU'}</span></div></article>`}
function render(list=data){popular.innerHTML=list.filter(x=>!x[4]).map(makeCard).join("");newer.innerHTML=list.filter(x=>x[4]).map(makeCard).join("")}
search.addEventListener("input",()=>{let q=search.value.toLowerCase();render(data.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q)))});
document.querySelectorAll(".cats button").forEach(b=>b.addEventListener("click",()=>{let f=b.dataset.filter;render(f==="all"?data:f==="new"?data.filter(x=>x[4]):data.filter(x=>x[1].includes(f)))}));
function openDetails(title){let s=data.find(x=>x[0]===title);document.querySelector("#modalTitle").textContent=s[0];document.querySelector("#modalText").textContent=s[5];document.querySelector("#modal").hidden=false}
function closeModal(){document.querySelector("#modal").hidden=true}
function notice(t){let x=document.querySelector("#toast");x.textContent=t;x.style.display="block";setTimeout(()=>x.style.display="none",2800)}
document.querySelector("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
render();