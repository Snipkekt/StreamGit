const form = document.querySelector('.form');
const bg = document.querySelector('.fakebg');

form.addEventListener('mouseenter', () => {
    bg.style.background = "linear-gradient(to bottom, #000000, #002860db, #ff0000, #276fe3, #000000)";
}
);

form.addEventListener('mouseleave', () => {
    bg.style.background = "linear-gradient(to bottom, #000000,  #ff0000, #276fe3,#002860db, #000000)";
}
);
