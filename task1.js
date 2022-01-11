/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит парсить XML

const parserStudent = new DOMParser();
// console.log('parserStudent', parserStudent);

//XML, который будет парситься
const xmlStringStudent = `
<list>
 <student>
  <name lang="en">
   <first>Ivan</first>
   <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
 </student>
 <student>
  <name lang="ru">
   <first>Петр</first>
   <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
 </student>
</list>
`;
// console.log('xmlString', xmlStringStudent);

/* Этап 2. Получение данных */
// Парсинг XML
const xmlDom = parserStudent.parseFromString(xmlStringStudent, 'text/xml');

//  Получение всех DOM-нод(узлов)

const listNode = xmlDom.querySelector('list');
const studentNode = listNode.querySelector('list > student:first-child');
const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');

// console.log('listNode', listNode);
// console.log('studentNode', studentNode);
// console.log('nameNode', nameNode);
// console.log('firstNode', firstNode);
// console.log('secondNode', secondNode);
// console.log('ageNode', ageNode);
// console.log('profNode', profNode);

const studentNode2 = listNode.querySelector('list > student:last-child');
const nameNode2 = studentNode2.querySelector('name');
const firstNode2 = nameNode2.querySelector('first');
const secondNode2 = nameNode2.querySelector('second');
const ageNode2 = studentNode2.querySelector('age');
const profNode2 = studentNode2.querySelector('prof');

// console.log('studentNode2', studentNode2);
// console.log('nameNode2', nameNode2);
// console.log('firstNode2', firstNode2);
// console.log('secondNode2', secondNode2);
// console.log('ageNode2', ageNode2);
// console.log('profNode2', profNode2);

// Получение данных из атрибутов
const langAttr = nameNode.getAttribute('lang');
const langAttr2 = nameNode2.getAttribute('lang');
console.log('langAttr', langAttr);
console.log('langAttr2', langAttr2);

/* Этап 3. Запись данных в результирующий объект */

const result = {
	list: [
		{
			name: firstNode.textContent + ' ' + secondNode.textContent,
			age: Number(ageNode.textContent),
			prof: profNode.textContent,
			lang: langAttr
		},
		{
			name: firstNode2.textContent + ' ' + secondNode2.textContent,
			age: Number(ageNode2.textContent),
			prof: profNode2.textContent,
			lang: langAttr2
		}
	]
};

console.log('result', result);

// 2 вариант

// const parser = new DOMParser();
// console.log('parser', parser);

// const xmlStringStudent = `
// <list>
//  <student>
//   <name lang="en">
//    <first>Ivan</first>
//    <second>Ivanov</second>
//   </name>
//   <age>35</age>
//   <prof>teacher</prof>
//  </student>
//  <student>
//   <name lang="ru">
//    <first>Петр</first>
//    <second>Петров</second>
//   </name>
//   <age>58</age>
//   <prof>driver</prof>
//  </student>
// </list>
// `;

// const xmlDom = parser.parseFromString(xmlStringStudent, 'text/xml');

// const listNode = xmlDOM.querySelector('list');
// const studentNode = listNode.querySelectorAll('student');

// const list = [];

// studentNode.forEach(student => {
//  const nameNode = student.querySelector('name');
//  const firstNode = nameNode.querySelector('first')
//  const secondNode = nameNode.querySelector('second');
//  const ageNode = student.querySelector('age');
//  const profNode = student.querySelector('prof');
//  const langAttr = nameNode.getAttribute('lang')
//  list.push({
//   name: ${firstNode.textContent} ${secondNode.textContent},
//   age: ageNode.textContent,
//   prof: profNode.textContent,
//   lang: langAttr,
//  });
// });

// const result = {
//  list: list,
// };

// console.log(result);

/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит парсить XML

const parserStudent = new DOMParser();
// console.log('parserStudent', parserStudent);

//XML, который будет парситься
const xmlStringStudent = `
<list>
	<student>
		<name lang="en">
			<first>Ivan</first>
			<second>Ivanov</second>
		</name>
		<age>35</age>	
		<prof>teacher</prof>
	</student>
	<student>
		<name lang="ru">
			<first>Петр</first>
			<second>Петров</second>
		</name>
		<age>58</age>
		<prof>driver</prof>
	</student>
</list>
`;
// console.log('xmlString', xmlStringStudent);

/* Этап 2. Получение данных */
// Парсинг XML
const xmlDom = parserStudent.parseFromString(xmlStringStudent, 'text/xml');

//  Получение всех DOM-нод(узлов)

const listNode = xmlDom.querySelector('list');
const studentNode = listNode.querySelector('list > student:first-child');
const nameNode = studentNode.querySelector('name');
const firstNode = nameNode.querySelector('first');
const secondNode = nameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');

// console.log('listNode', listNode);
// console.log('studentNode', studentNode);
// console.log('nameNode', nameNode);
// console.log('firstNode', firstNode);
// console.log('secondNode', secondNode);
// console.log('ageNode', ageNode);
// console.log('profNode', profNode);

const studentNode2 = listNode.querySelector('list > student:last-child');
const nameNode2 = studentNode2.querySelector('name');
const firstNode2 = nameNode2.querySelector('first');
const secondNode2 = nameNode2.querySelector('second');
const ageNode2 = studentNode2.querySelector('age');
const profNode2 = studentNode2.querySelector('prof');

// console.log('studentNode2', studentNode2);
// console.log('nameNode2', nameNode2);
// console.log('firstNode2', firstNode2);
// console.log('secondNode2', secondNode2);
// console.log('ageNode2', ageNode2);
// console.log('profNode2', profNode2);

// Получение данных из атрибутов
const langAttr = nameNode.getAttribute('lang');
const langAttr2 = nameNode2.getAttribute('lang');
console.log('langAttr', langAttr);
console.log('langAttr2', langAttr2);

/* Этап 3. Запись данных в результирующий объект */

const result = {
	list: [
		{
			name: firstNode.textContent + ' ' + secondNode.textContent,
			age: Number(ageNode.textContent),
			prof: profNode.textContent,
			lang: langAttr
		},
		{
			name: firstNode2.textContent + ' ' + secondNode2.textContent,
			age: Number(ageNode2.textContent),
			prof: profNode2.textContent,
			lang: langAttr2
		}
	]
};

console.log('result', result);

// 2 вариант

// const parser = new DOMParser();
// console.log('parser', parser);

// const xmlStringStudent = `
// <list>
//  <student>
//   <name lang="en">
//    <first>Ivan</first>
//    <second>Ivanov</second>
//   </name>
//   <age>35</age>
//   <prof>teacher</prof>
//  </student>
//  <student>
//   <name lang="ru">
//    <first>Петр</first>
//    <second>Петров</second>
//   </name>
//   <age>58</age>
//   <prof>driver</prof>
//  </student>
// </list>
// `;

// const xmlDom = parser.parseFromString(xmlStringStudent, 'text/xml');

// const listNode = xmlDOM.querySelector('list');
// const studentNode = listNode.querySelectorAll('student');

// const list = [];

// studentNode.forEach(student => {
//  const nameNode = student.querySelector('name');
//  const firstNode = nameNode.querySelector('first')
//  const secondNode = nameNode.querySelector('second');
//  const ageNode = student.querySelector('age');
//  const profNode = student.querySelector('prof');
//  const langAttr = nameNode.getAttribute('lang')
//  list.push({
//   name: ${firstNode.textContent} ${secondNode.textContent},
//   age: ageNode.textContent,
//   prof: profNode.textContent,
//   lang: langAttr,
//  });
// });

// const result = {
//  list: list,
// };

// console.log(result);
