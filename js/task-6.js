const inputRef = document.querySelector('input');
const createRef = document.querySelector('[data-create]');
const destrRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

createRef.addEventListener('click', onCreate);

function onCreate() {
  const amount = inputRef.value;
  if (amount >= 1 && amount <= 100) {
    return createBoxes(amount);
  }
}

function createBoxes(amount) {
  destroyBoxes();
  let boxes = [];

  for (let i = 1; i <= amount; i += 1) {
    let color = getRandomHexColor();

    const box = document.createElement('div');
    box.classList.add('box');

    const MINBOXSIDE = 20;
    box.style.width = `${MINBOXSIDE + 10 * i}px`;
    box.style.height = `${MINBOXSIDE + 10 * i}px`;
    box.style.backgroundColor = color;

    boxes.push(box);
  }
  return boxRef.append(...boxes);
}

destrRef.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxRef.innerHTML = '';
  inputRef.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
