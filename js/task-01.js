const listRef = document.querySelector('#categories');
const catRef = document.querySelectorAll('.item');

console.log('Number of Categories: ', listRef.children.length);

catRef.forEach(elt => {
  console.log('Category: ', elt.firstElementChild.textContent);
  console.log('Elements: ', elt.lastElementChild.children.length);
});

// for (const elt of catRef) {
//   console.log('Category: ', elt.firstElementChild.textContent);
//   console.log('Elements: ', elt.lastElementChild.children.length);
// }
