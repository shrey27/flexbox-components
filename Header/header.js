let content = document.querySelector('.content');
let navbar = document.querySelector('.navbar');
content.addEventListener('scroll', myFunction);
function myFunction() {
  let y = content.scrollTop;
  if (y > 0) {
    navbar.classList.add('short');
  } else {
    navbar.classList.remove('short');
  }
}