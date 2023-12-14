const inputRef = document.querySelector('input');
const createRef = document.querySelector('[data-create]');
const destrRef = document.querySelector('[data-destroy]');
const boxRef = document.querySelector('#boxes');
const amount = Number(inputRef.value);

createRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  let boxes = [];
  let color = getRandomHexColor();
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    const minBoxWidth = 30;
    const minBoxHeight = 30;
    box.style.width = `${minBoxWidth + 10 * i}px`;
    box.style.height = `${minBoxHeight + 10 * i}px`;
    box.style.backgroundColor = color;
    boxes.push(box);
  }
  boxRef.append(...boxes);
}
console.log(boxes);
destrRef.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
