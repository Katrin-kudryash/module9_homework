// Задание 3.

// Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
// В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст 
// «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR 
// по URL https://picsum.photos/v2/list?limit=10, 
// где get-параметр limit — это введённое число.
// Пример: если пользователь ввёл 5, то запрос будет 
// вида https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.

// Получаем элементы
const buttonNode = document.querySelector('.button');
const resultNode = document.querySelector('.output');
const inputValue = document.querySelector('.input'); 	


// Создаем функцию useRequest, которая будет осуществлять запрос

// Функция-обертка над XMLHttpRequest, осуществляющая запрос
//   * url - урл, по которому будет осуществляться запрос
//   * callback - функция, которая вызовется при успешном выполнении
//   * и первым параметром получит объект-результат запроса
function useRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true); 

	xhr.onload = function() {
		if (xhr.status != 200) {
			console.log('Статус ответа: ', xhr.status);
		} else {
			const result = JSON.parse(xhr.response);
			if (callback) {
				callback(result);
			}
		}
	};

	xhr.onerror = function() {
		console.log('Ошибка! Статус ответа: ', xhr.status);
	};

	xhr.send();
};

// Создаем функцию displayResult для сборки карточек и вставки на страницу
// apiData - объект с результатом запроса
function displayResult(apiData) {
	let cards = '';

	apiData.forEach(elem => {
		const cardBlock = `
			<div class='card'>
				<img src="${elem.download_url}" class="card-image"/>
			</div>
		`;
		cards = cards + cardBlock;
	});
	resultNode.innerHTML = cards;
}


// Вешаем обработчик click на кнопку, который делает запрос с помощью функции useRequest, результат запроса выводит на страницу с помощью функции displayResult
buttonNode.addEventListener('click', () => {
	const value = +inputValue.value;
	if(Number.isInteger(value)) {
		if (value < 1 || value > 10) {
			resultNode.innerText = "Введено число вне диапазона от 1 до 10";
		} else {
			useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
		}
	} else  {
		resultNode.innerText = 'Введено не целое число';
	}
});

