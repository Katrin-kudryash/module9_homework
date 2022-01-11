// Задание 5.

// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 
// или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 
// или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах 
// или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, 
// где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. 
// Пример: если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки 
// из последнего успешно выполненного запроса (использовать localStorage).

const buttonNode = document.querySelector('.button');
const resultNode = document.querySelector('.output');


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
			const lastRequestPicture = localStorage.setItem('JSON', xhr.response);
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
};


// Вешаем обработчик click на кнопку, который делает запрос с помощью функции useRequest, результат запроса выводит на страницу с помощью функции displayResult
buttonNode.addEventListener('click', () => {
	const numPage = document.getElementById('number-picture').value;
	const numLimit = document.getElementById('limit').value;	
	if ((numPage < 1 || numPage > 10) && (numLimit < 1 || numLimit > 10)) {
		resultNode.innerText = "Номер страницы и лимит вне диапазона от 1 до 10";
	} else if (numPage < 1 || numPage > 10) {
			resultNode.innerText = "Номер страницы вне диапазона от 1 до 10";
	}  else if (numLimit < 1 || numLimit > 10) {
			resultNode.innerText = "Лимит вне диапазона от 1 до 10";
	} else {
		useRequest(`https://picsum.photos/v2/list?page=${numPage}&limit=${numLimit}`, displayResult);
	}
});		


window.onload = function() {
	let lastRequestPicture = localStorage.getItem('JSON');
	if (lastRequestPicture !==null) {
		displayResult(JSON.parse(lastRequestPicture));
	}
};