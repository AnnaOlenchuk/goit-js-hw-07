const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function createListItem(text) {
  const item = document.createElement('li');
  item.textContent = text;
  return item;
}

const listRef = document.querySelector('#ingredients');
const createList = ingredients.map(ingredient => createListItem(ingredient));
listRef.append(...createList);