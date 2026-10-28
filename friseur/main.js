const b=document.querySelector('.burger'),l=document.querySelector('.links');
b.addEventListener('click',()=>{const o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>l.classList.remove('open')));
// Öffnungsstatus: [Tag]=[von,bis] in Minuten, So=0
const h={2:[540,1110],3:[540,1110],4:[540,1200],5:[540,1110],6:[510,840]};
const d=new Date(),m=d.getHours()*60+d.getMinutes(),t=h[d.getDay()],s=document.getElementById('status');
if(t&&m>=t[0]&&m<t[1]){s.textContent='● Jetzt geöffnet';s.className='status open'}else{s.textContent='● Gerade geschlossen';s.className='status closed'}
