const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
    const createListItem = document.createElement('li');
    createListItem.textContent = ingredient;
    
    listRef.appendChild(createListItem);
});

console.log(listRef);