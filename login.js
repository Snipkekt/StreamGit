// const form = document.querySelector('.form');
// const bg = document.querySelector('.fakebg');

// form.addEventListener('mouseenter', () => {
//     bg.style.background = "linear-gradient(to bottom, #000000, #002860db, #ff0000, #276fe3, #000000)";
//     bg.style.transition = "5s";

// }
// );

// form.addEventListener('mouseleave', () => {
//     bg.style.transition = "5s";
//     bg.style.background = "linear-gradient(to bottom, #000000,  #ff0000, #276fe3,#002860db, #000000)";
// }
// );
// from.addEventListener('mouseenter', () => {
//     bg.style.filter = "blur(0px)"
// })
// from.addEventListener('mouseleave', () => {
//     bg.style.filter = "blur(0px)"
// })
const log = document.getElementById("loginBtn");
log.addEventListener('click', (e)=> {
   e.preventDefault();
   window.location="homepage.html";
})
