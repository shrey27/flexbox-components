let input = document.querySelector('.chip-input');
let chips = document.querySelector('.chips');

document.querySelector('.form-field').addEventListener('click', () => {
  input.style.display = 'block';
  input.focus();
});

input.addEventListener('blur', () => {
  input.style.display = 'none';
});

input.addEventListener('keypress', (event) => {
  if (event.which === 13) {
    let chip = document.createElement('div');
    chip.classList.add('chip');

    let chip_text = document.createElement('span');
    chip_text.classList.add('chip-cont');
    chip_text.innerHTML = input.value;

    let chip_button = document.createElement('span');
    chip_button.classList.add('chip-btn');
    chip_button.innerHTML = 'X';
    chip_button.addEventListener('click', (e) =>
      chips.removeChild(e.target.parentElement)
    );

    chip.append(chip_text, chip_button);

    chips.insertBefore(chip, input);
    input.value = '';
  }
});


