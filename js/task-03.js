const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener('input', onInput);

function onInput(event) {
  if (event.currentTarget.value !== '') {
    outputRef.textContent = event.currentTarget.value;
  } else {
    outputRef.textContent = 'Anonymous';
  }
}

// inputRef.addEventListener('input', event => {
//   event.currentTarget.value !== ''
//     ? (outputRef.textContent = event.currentTarget.value)
//     : (outputRef.textContent = 'Anonymous');
// });
