let openBtn = document.querySelector('.show_btn');
let closeBtn = document.querySelector('.close');
let snackbar = document.querySelector('.snackbar');

openBtn.addEventListener('click', () => {
  snackbar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  snackbar.classList.remove('open');
});
