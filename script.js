
// Simple 2-image hero slider
let idx = 0;
const slides = document.querySelectorAll('.slide');
const rotate = () => {
  slides.forEach((s,i)=> s.classList.toggle('active', i === idx));
  idx = (idx + 1) % slides.length;
};
rotate();
setInterval(rotate, 5000);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
