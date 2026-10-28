const b=document.querySelector('.burger'),l=document.querySelector('.links');
b.addEventListener('click',()=>{const o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>l.classList.remove('open')));
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===t));
  document.querySelectorAll('.menu').forEach(m=>m.classList.toggle('active',m.id===t.dataset.tab));
}));
const h={0:[570,1020],6:[510,1080]};for(let i=1;i<=5;i++)h[i]=[450,1080];
const d=new Date(),m=d.getHours()*60+d.getMinutes(),t=h[d.getDay()],s=document.getElementById('status');
if(t&&m>=t[0]&&m<t[1]){s.textContent='● Jetzt geöffnet – komm vorbei!';s.className='status open'}else{s.textContent='● Gerade geschlossen';s.className='status closed'}
