const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInput);

function onInput(event) {
  const trimmedInput = event.currentTarget.value.trim();

  if (trimmedInput !== '') {
    outputRef.textContent = trimmedInput;
  } else {
    outputRef.textContent = 'Anonymous';
  }
}
