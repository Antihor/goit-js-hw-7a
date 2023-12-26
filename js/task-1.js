const listRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log('Number of Categories: ', listRef.children.length);

itemRef.forEach(elt => {
  console.log('Category: ', elt.firstElementChild.textContent);
  console.log('Elements: ', elt.lastElementChild.children.length);
});
