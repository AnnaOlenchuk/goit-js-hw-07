const quantityOfCategories = document.getElementById('categories').length;
console.log(`В списке ${quantityOfCategories} категории`);


const categoryUnits = document.querySelectorAll('#categories > .item');

categoryUnits.forEach(item => {
    const categoryNameRef = item.querySelector('h2');
    const categoryElementsRef = item.querySelectorAll('li');
    return console.log(`Категория: ${categoryNameRef.textContent} \r\nКоличество элементов: ${categoryElementsRef.length}`);
})