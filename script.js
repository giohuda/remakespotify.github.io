const toggle = document.querySelector('.hamburger input');
const nav = document.querySelector('.nav ul');

toggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})