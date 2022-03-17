
const btn = document.querySelector('.btn');
const result = document.querySelector('.output');



btn.addEventListener('click', () => {

    let width = document.querySelector('.width').value;
    let height = document.querySelector('.height').value;


    if (width >= 100 && width <= 300 && height >= 100 && height <= 300) {
           fetch(`https://picsum.photos/${width}/${height}`)


        .then((response) => {
            result.innerHTML = `<div class="card"><img src="${response.url}"></div>`;})


        .catch(() => {console.log('Ошибка')});

    } else {

        result.innerHTML = "<h3>Одно из чисел вне диапазона от 100 до 300</h3>";
    }
})