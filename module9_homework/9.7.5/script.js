
const btn = document.querySelector('.btn');
const result = document.querySelector('.output');
const inputNumber = document.querySelector('.number');
const inputLimit = document.querySelector('.limit');



let data = localStorage.getItem('savedInfo');


btn.addEventListener('click', (event) => {
    event.preventDefault();
    result.textContent = "";
    let number = inputNumber.value;
    let limit = inputLimit.value;
    
          if((number < 1 || number > 10) && (limit < 1 || limit > 10)) {
        result.innerHTML = '<h3>Номер страницы и лимит вне диапазона от 1 до 10</h3>';


        } else if (number < 1 || number > 10) {

        result.innerHTML = '<h3>Номер страницы вне диапазона от 1 до 10</h3>';

        } else if (limit < 1 || limit > 10) {

        result.innerHTML = '<h3>Лимит вне диапазона от 1 до 10</h3>'

        } else {

            fetch(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                localStorage.setItem('savedInfo', JSON.stringify(data));
            
                displayResult(data);
            })

            .catch(() => {
                console.log('error')
            });
        }
    });


function displayResult(data) {
    let cards = "";
    if (data) {
        data.forEach((item) => {
            const cardBlock = `
            <div class="card">
                <img src="${item.download_url}">
            </div>`;
            cards += cardBlock; 
        });
        result.innerHTML = cards;
    }
}


displayResult(JSON.parse(data));

