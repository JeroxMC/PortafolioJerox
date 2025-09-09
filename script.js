// ===== Estrellas animadas =====
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w,h,stars=[];
function resize(){w=canvas.width=innerWidth;h=canvas.height=innerHeight;}
window.addEventListener('resize',resize);resize();
function rand(min,max){return Math.random()*(max-min)+min;}
function initStars(){stars=[];const count=Math.floor((w*h)/12000);for(let i=0;i<count;i++){stars.push({x:Math.random()*w,y:Math.random()*h,z:rand(0.2,1),r:rand(0.3,1.6),twinkle:Math.random()*0.03});}}
function draw(){ctx.clearRect(0,0,w,h);for(let s of stars){s.x+=0.02*(s.z*2);s.y+=0.01*(s.z*2);s.twinkle+=0.02;const alpha=0.6+Math.sin(s.twinkle*2*Math.PI)*0.4;ctx.beginPath();ctx.fillStyle=`rgba(255,255,255,${alpha})`;ctx.arc(s.x,s.y,s.r*s.z,0,Math.PI*2);ctx.fill();if(s.x>w+10)s.x=-10;if(s.y>h+10)s.y=-10;}requestAnimationFrame(draw);}
function shooting(){const sx=rand(0,w);const sy=rand(0,h/2);const len=rand(80,200);let t=0;const speed=rand(6,12);function frame(){t+=1;ctx.save();ctx.globalCompositeOperation='lighter';ctx.strokeStyle='rgba(255,255,255,0.9)';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(sx+t*speed,sy+t*0.4);ctx.lineTo(sx+t*speed-len,sy+t*0.4-len*0.08);ctx.stroke();ctx.restore();if(t<30)requestAnimationFrame(frame);}frame();}
function start(){initStars();draw();setInterval(shooting,6000);}start();
window.addEventListener('resize',initStars);

// ===== Contadores animados =====
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / 100;
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount,20);
    } else { counter.innerText = target; }
  }
  updateCount();
});

// ===== Lightbox para imágenes =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxTitle = document.querySelector('.lightbox-title');
const lightboxSubtitle = document.querySelector('.lightbox-subtitle');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.lightbox .close');

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxTitle.textContent = img.dataset.title || '';
    lightboxSubtitle.textContent = img.dataset.subtitle || '';
    lightboxCaption.textContent = img.dataset.description || '';
  });
});

// Cerrar lightbox
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});

closeBtn.addEventListener('click', () => { lightbox.style.display='none'; });
lightbox.addEventListener('click', e => { if(e.target===lightbox) lightbox.style.display='none'; });

