const inputRef = document.querySelector('input');
const createRef = document.querySelector('[data-create]');
const destrRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');

createRef.addEventListener('click', onCreate);

function onCreate(evt) {
  const amount = inputRef.value;
  if (amount >= 1 && amount <= 100) {
    return createBoxes(amount);
  }
}

function createBoxes(amount) {
  let boxes = [];
  let color = getRandomHexColor();
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.classList.add('box');
    const minBoxWidth = 20;
    const minBoxHeight = 20;
    box.style.width = `${minBoxWidth + 10 * i}px`;
    box.style.height = `${minBoxHeight + 10 * i}px`;
    box.style.backgroundColor = color;

    boxes.push(box);
  }
  return boxRef.append(...boxes);
}

destrRef.addEventListener('click', destroyBoxes => {
  boxRef.innerHTML = '';
  inputRef.value = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
