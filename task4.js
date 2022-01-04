// Задание 4.
// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit.
// В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или 
// введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос 
// c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.


// Получаем элементы
const buttonNode = document.querySelector('.button');
const resultNode = document.querySelector('.output');
const widthPicture = document.getElementById('width-picture').value;
const heightPicture = document.getElementById('height-picture').value;

buttonNode.addEventListener('click', () => {	
		if (widthPicture < 100 || widthPicture > 300 || heightPicture < 100 || heightPicture > 300) {
			resultNode.innerText = "Одно из чисел вне диапазона от 100 до 300"
		} else {
			fetch(`https://picsum.photos/${widthPicture}/${heightPicture}`)
				.then((response) => {
					const cardBlock = `
					<div class="card">
						<img src="${response.url}" class="card-image" />
					</div>
					`;
					resultNode.innerHTML = cardBlock;
				})
				.catch(() => {
					console.log('error')
				});
		}
});	
