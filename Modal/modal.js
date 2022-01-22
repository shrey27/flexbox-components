let ct = document.querySelector('.container');
let mdl = document.querySelector('.modal');
let btn = document.querySelector('.btn');

let title = document.querySelector('.title');
let subTitle = document.querySelector('.subtitle');
let footer = document.querySelector('.footer');
let btn2 = document.querySelector('.btn-2');

btn.addEventListener('click', () => {
  mdl.classList.add('show');
  ct.classList.add('show');
});

ct.addEventListener('click', (e) => {
  if (
    e.target !== btn &&
    e.target !== mdl &&
    e.target !== title &&
    e.target !== subTitle &&
    e.target !== footer &&
    e.target !== btn2
  ) {
    mdl.classList.remove('show');
    ct.classList.remove('show');
  }
});
