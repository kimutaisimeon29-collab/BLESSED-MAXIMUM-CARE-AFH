
// Simple lightbox for gallery
function showLightbox(src, alt){
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.alt = alt || 'photo';
  lb.hidden = false;
}
function hideLightbox(){
  const lb = document.getElementById('lightbox');
  lb.hidden = true;
}
// bind clicks
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a.glink');
  if(a){
    e.preventDefault();
    showLightbox(a.getAttribute('href'), a.querySelector('img')?.alt);
  }
  if(e.target.id === 'lightbox'){
    hideLightbox();
  }
});
