let content = document.querySelector('.drawer');
let navbar = document.querySelector('.content');
let drawerButton = document.querySelector('.icons');

drawerButton.addEventListener('click', ()=>{
    content.classList.toggle('collapse');
    navbar.classList.toggle('collapse');
})