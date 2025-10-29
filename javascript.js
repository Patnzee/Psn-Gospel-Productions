// Smooth anchor scrolling
(document.querySelectorAll('a[href^="#"]')||[]).forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){ e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
  });
});

// Current year in footer
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();
