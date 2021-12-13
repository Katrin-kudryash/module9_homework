/* Этап 1. Подготовка данных */

// JSON, который  необходимо парсить

const jsonString = `
{
"list": [
	{
		"name": "Petr",		
		"age": "20",	
		"prof": "mechanic"
	},
	{ 
		"name": "Vova",
		"age": "60",
		"prof": "pilot"	\
	}
]
}
`;

// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */

const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
// console.log('list', list);

/* Этап 3. Запись данных в результирующий объект */

const result = {
	list: [
		{ name: list[0].name, age: Number(list[0].age), prof: list[0].prof },
		{ name2: list[1].name, age2: Number(list[1].age), prof2: list[1].prof }
	]
};

console.log('result', result);

// вариант2

/* Этап 1. Подготовка данных */

// JSON, который  необходимо парсить

const jsonString = `
{
"list": [
	{
		"name": "Petr",
		"age": "20",
		"prof": "mechanic"
	},
	{ 
		"name": "Vova",
		"age": "60",
		"prof": "pilot"
	}
]
}
`;

// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */

const data = JSON.parse(jsonString);
// console.log('data', data);
const list = [];
// console.log('list', list);

/* Этап 3. Запись данных в результирующий объект */
data.list.forEach((people) => {
	const name = people.name;
	const age = people.age;
	const prof = people.prof;
	list.push({
		name: name,
		age: age,
		prof: prof
	});
});

const result = { list: list };
console.log(result);
