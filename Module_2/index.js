// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
    
//   }  if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }  
  
//      return "The order is accepted, our manager will contact you";
 
//   // Change code above this line
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";


// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"

// Объяви две переменные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	Мндекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];

// Задание
// Напиши функцию getExtremeElements(array) которая принимает один параметр
// array - массив элементов произвольной длины.Функция должна возвращать массив
// из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  // Change code below this line
const arr = array.splice(1, array.length-2);
  return array;

  // Change code above this line
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));


Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в
переменной words результат разделения строки message по разделителю delimeter - массив строк.

Тесты
Объявлена функция splitMessage(message, delimeter)
Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
Вызов splitMessage("best_for_week", "_") возвращает["best", "for", "week"]

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
words = message.split(delimeter);
  // Change code above this line
  return words;
}

Задание
Сервису гравировки украшений нужна функция, которая бы автоматически считала
цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает
строку, состоящую из слов разделённых только пробелами(параметр message) и цену гравировки
одного слова(параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

Тесты
Объявлена функция calculateEngravingPrice(message, pricePerWord)
Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
return message.split(' ').length*pricePerWord


  // Change code above this line
}

Задание
Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в
переменной string результат соединения элементов массива array c разделителем
delimeter - строку.

function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
string = array.join(delimeter);


  // Change code above this line
  return string;
}

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title,
и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире

function slugify(title) {
  // Change code below this line
return title.toLowerCase().split(' ').join('-');


  // Change code above this line
}

Задание
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

Задание
Дополни код так, чтобы в переменной allClients получился массив всех элементов
массивов oldClients и newClients.

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line


Задание
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива
со всеми элементами двух исходных firstArray и secondArray.Параметр maxLength содержит 
максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию
массива длиной maxLength элементов.В противном случае функция должна вернуть новый массив
целиком.

Тесты
Объявлена функция makeArray(firstArray, secondArray, maxLength)
Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
let tempArr = [];
let array = firstArray.concat(secondArray);
tempArr = (array.length > maxLength) ?
array.slice(0, maxLength) : array.slice(0,
array.length);
return tempArr;



  // Change code above this line
}

Задание
Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number
равно 3, то сумма это 1 + 2 + 3, то есть 6.

function calculateTotal(number) {
  // Change code below this line
 let total = 0;
   for (let i = 0; i <= number; i+=1) {
     total += i;
   }
   return total;
 
 
   // Change code above this line
}
 
Задание
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив
чисел, и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться
в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let price of order) {
  total += price;
}
 
  // Change code above this line
  return total;
}

Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую
только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в
этой строке.

Тесты
Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog")
возвращает jumped

function findLongestWord(string) {
  // Change code below this line
let word = string.split(' ');
 let longestWord = ''; 
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }
return longestWord;

  // Change code above this line
}

Задание
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив
всех целых чисел от значения min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
for (let i = min; i <= max; i+=1) {
  numbers.push(i);
}
  
  // Change code above this line
  return numbers;
}

Задание
Напиши функцию filterArray(numbers, value), которая принимает массив чисел
  (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива
numbers, которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
  // Change code below this line
 let result = [];
 for (let i=0; i < numbers.length; i+=1) {
   if (numbers[i] > value) {
     result.push(numbers[i]);
   }
 }
return result;

 // Change code above this line
}

Задание
Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit), и
проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}


Задание
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

  Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они
присутствуют в обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из
массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной
длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов,
  которые присутствуют в обоих исходных массивах.

  function getCommonElements(array1, array2) {
    // Change code below this line
  array3 = [];
    for (element of array1) {
      if (array2.includes(element)) {
        array3.push(element);
      }
    }
    return array3;
  
  
   // Change code above this line
}
  
Задание
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let price of order) {
    total += price;
  }

  // Change code above this line
  return total;
}


Задание
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (number of numbers) {
   
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

Задание
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от
start до end.Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

function getEvenNumbers(start, end) {
  // Change code below this line
let arr =[]
for (let i = start; i <= end; i+=1) {
  if (i % 2 !== 0) {
    continue
  } else {
    arr.push(i);
  }
}
 return arr;
   // Change code above this line;
 }

 Задание
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива
массив.includes(значение) - проверяет, есть ли в массиве array значение value,
  возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод
массив.includes(значение).

function includes(array, value) {
  // Change code below this line
  for(let element of array) {  
  
 	return array.indexOf(value) !== -1 ? true : false;
    
  }
  // Change code above this line
}
