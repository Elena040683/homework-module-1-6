const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  }
};

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};
Для доступа к вложенным свойствам используется цепочка обращений «через точку».
Например, если необходимо получить значение страны пользователя, записываем
user.location.country, где user.location это обращение(путь) к объекту в
свойстве location, а user.locaton.country обращение к свойству country в этом объекте.
То есть, «точка» указывает следующую вложенность.

const location = user.location;
console.log(location); // Объект location

const country = user.location.country;
console.log(country); // "Jamaica"
Если значение свойства это массив, то в нашем примере user.hobbies - обращение к этому
массиву.Далее, можно получить доступ к его элементам через квадратные скобки и индекс или
использовать свойства и методы.

const hobbies = user.hobbies;
console.log(hobbies); // ["swiming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swiming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Change code above this line


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");


const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
}

Иногда, при создании объекта, значение свойства необходимо взять из переменной или
параметра функции с таким же именем, как и само свойство.

Синтксис в следующем примере слишком громоздкий, потому что приходится дублировать имя
свойства и имя переменной, в которой хранится необходимое значение.

const name = "Генри Сибола";
const age = 25;

const user = {
  name: name,
  age: age
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
Синтаксис коротких свойств(shorthand properties) решает эту проблему, позволяя
использовать имя переменной как имя свойства, а её значение как значение свойства.

const name = "Генри Сибола";
const age = 25;

const user = {
  name,
  age
};

console.log(user.name); // "Генри Сибола"
console.log(user.age); // 25
То есть, при объявлении объекта достаточно указать только имя свойства, а значение будет
взято из переменной с аналогичным именем.

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  // Change code below this line
  name,
  price,
  image,
  tags,

  // Change code above this line
};


Бывают ситуации, когда при объявлении обьекта необходимо добавить свойство с именем,
  которое мы заранее не знаем, потому что оно хранится как значение переменной или как
результат выполнения функции.

Раньше для этого необходимо было сначала создать объект, а потом добавлять свойства через
квадратные скобки, что не совсем удобно.

const propName = "name";
const user = {
  age: 25
};

user[propName] = "Генри Сибола";
console.log(user.name); // "Генри Сибола"
Синтаксис вычисляемых свойств(computed properties) помогает избежать лишнего кода и в
некоторых случаях упростить его.Значением вычисляемого свойства может быть любое валидное
выражение.

const propName = "name";
const user = {
  age: 25,
  // Имя этого свойства будет взято из значения переменной propName
  [propName]: "Генри Сибола"
};

console.log(user.name); // "Генри Сибола"

В отличии от массива или строки, объект - это не итерируемая сущность, то есть его
нельзя перебрать циклами for или for...of.Для перебора объектов используется специальный
цикл for...in, который перебирает ключи объекта object.

for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла.На каждой итерации в неё будет записано
значение ключа(имя) свойства.Для того чтобы получить значение свойства с таким
ключом(именем), используется синтаксис квадратных скобок.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}


Цикл for...in
  В отличии от массива или строки, объект - это не итерируемая сущность, то есть его нельзя
перебрать циклами for или for...of.Для перебора объектов используется специальный
цикл for...in, который перебирает ключи объекта object.

for (key in object) {
  // инструкции
}
Переменная key доступная только в теле цикла.На каждой итерации в неё будет записано
значение ключа(имя) свойства.Для того чтобы получить значение свойства с таким
ключом(именем), используется синтаксис квадратных скобок.

const book = {
  title: "Последнее королевство",
  author: "Бернард Корнуэлл",
  genres: ["историческая проза", "приключения"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}


const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
  keys.push(key)
  values.push(apartment[key])
}


const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {

    keys.push(key);
    values.push(apartment[key]);
  }

  // Change code above this line
}


Задание
Напиши функцию countProps(object), которая считает и возвращает количество собственных
свойств объекта в параметре object.Используй переменную propCount для хранения количества
свойств объекта.

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  
  const keys = Object.keys(object);
  for (key of keys) {
    propCount += 1
  }

  // Change code above this line
  return propCount;
}


Задание
Перебери объект apartment используя метод Object.keys() и цикл for...of.Запиши
в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив
values все значения его свойств.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (key of keys) {
  values.push(apartment[key])
}

Задание
Выполни рефакторинг функции countProps(object) используя метод Object.keys() и,
  возможно, цикл for...of.

  function countProps(object) {
    // Change code below this line
    let propCount = 0;
    const keys = Object.keys(object);
    
    for (const key of keys) {
     
        propCount += 1;
      }
    
    return propCount;
    // Change code above this line
  }

  
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  // Change code below this line
  const keys = Object.keys(apartment);
  const values = Object.values(apartment);

  
  Задание
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
  где имя свойства это имя сотрудника, а значение свойства это зарплата.Функция должна
рассчитать общую сумму зарплат сотрудников и вернуть её.Используй переменную totalSalary
для хранения общей
суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
const salary = Object.values(salaries);
  for (value of salary) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}

Задание
Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors
значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива
colors.

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

Задание
Напиши функцию getProductPrice(productName) которая принимает один параметр
productName - название продукта.Функция ищет объект продукта с таким
именем(свойство name) в массиве products и возвращает его цену(свойство price).
Если продукт с таким названием не найден, функция должна возвращать null.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null; 
  
  // Change code above this line
}

Задание
Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя
  (ключ) свойства.Функция должна вернуть массив всех значений свойства с таким именем из
каждого объекта в массиве products.Если в объектах нет свойства с таким именем, функция
должна вернуть пустой массив.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const arr = [];
  
  for (const product of products) {
    if (product[propName]) {
    arr.push(product[propName])
    }
    
  }
  
  return arr;
  // Change code above this line
}

Задание
Напиши функцию calculateTotalPrice(productName) которая принимает один параметр
productName - название товара.Функция должна вернуть общую стоимость(цена * количество)
товара с таким именем из массива products.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let total = 0;
for (let product of products) {
  if (productName === product.name){
    total = product.price * product.quantity
  }
}
return total;

  // Пиши код выше этой строки
}

Задание
Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за
три дня(meanTemperature).Замени объявления переменных yesterday, today и tomorrow одной
операцией деструктуризации свойств объекта highTemperatures.

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday: highYesterday, 
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
} = highTemperatures;


// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


Задание
Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация
объекта..

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
  }
} = forecast;

Задание
Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект
температур на два дня следующего формата.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной
операцией деструктуризации свойств объекта forecast.

// Change code below this line
function calculateMeanTemperature(forecast) {
  const {
    today: {low: todayLow, high: todayHigh},
    tomorrow: {low: tomorrowLow, high: tomorrowHigh},
  } = forecast
  
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

Задание
В переменной scores хранится массив результатов тестирования.Используя распыление и
методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый
высокий балл, а в worstScore самый низкий.

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);



const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};


Задание
Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими
свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data.
В новом объекте должно быть свойство completed, значение которого хранится в одноимённой
локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и
priority, могут отсутствовать.Тогда, в новом объекте задачи, в свойствах category и
priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
const task = {
  completed, 
  category,
  priority,
};
  editedData = {...task, ...data};
  return editedData;
  
  // Change code above this line
}

Задание
Используя операцию rest дополни код функции add() так, чтобы она принимала любое
количество аргументов, считала и возвращала их сумму.

function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
  // Change code above this line
}

Задание
Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции
addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем
заданное число.Это число должно быть первым параметром функции.

function addOverNum(num, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > num){
    total += arg;
   }
  }

  return total;
  // Change code above this line
}

Задание
Функция findMatches() принимает произвольное количество аргументов.Первым аргументом
всегда будет массив чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут
только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

  Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2],
  потому что только они есть в массиве первого аргумента.
    
  Change code below this line
function findMatches(arr, ...args) {
  const matches = []; // Don't change this line

  for (const element  of args) {
    if (arr.includes(element)) {
      matches.push(element)
    }
      
  }
  // Change code above this line
  return matches;
}

Задание
Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто
строки по аналогии с getBooks() и addBook(bookName).

Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку
"Deleting book <имя книги>", где < имя книги > это значение параметра bookName.

Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает
строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя >
  это значения параметров oldName и newName соотвественно.

  const bookShelf = {
    // Change code below this line
    books: ['The last kingdom', 'The guardian of dreams'],
    getBooks() {
      return 'Returning all books';
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    
    removeBook(bookName) {
      return `Deleting book ${bookName}`
    },
    
    updateBook(oldName, newName) {
      return `Updating book ${oldName} to ${newName}`
    },
    
    // Change code above this line
  };
  
  Задание
Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с
oldName на newName в свойстве books.Используй indexOf() для того, чтобы найти нужный
элемент массива, и splice() для того чтобы заменить этот элемент

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
	const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    
    return this.books;
	
	
    // Change code above this line
  },
};

Задача. Лавка зелий «У старой жабы»
Задание
К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения
инвентаря - добавления, удаления, поиска и обновления зелий.Добавь объекту atTheOldToad
свойство potions, значением которого сделай пустой массив.

Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение
свойства potions.

Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец
массива зелий в свойстве potions.

Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива
зелий в свойстве potions.

Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья
с oldName на newName, в массиве зелий в свойстве potions.

const atTheOldToad = {

  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    this.potions.push(potionName);
  },

  removePotion(potionName) {
    const potionNameIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionNameIndex, 1);

    updatePotionName(oldName, newName) {
    const oldNameIndex = this.potions.indexOf(oldName);
    this.potions.splice(oldNameIndex, 1, newName);
  },
};

Задание
Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой,
а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions 
будет храниться массив объектов со следующими свойствами.

{
  name: "Dragon breath",
  price: 700
}
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом
строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве
potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием
oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};


// Верный ответ:

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    const {potions} = this;
    return potions;
  },
  addPotion(potionName) {
    const {potions} = this;
    if (potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    potions.push(potionName);
  },
  removePotion(potionName) {
   const {potions} = this;
 	for(let i=0; i < this.potions.length; i += 1) {
      
      if(this.potions[i].name === potionName) {
        this.potions.splice(i, 1)
     }
    }
    return this.potions;
  },
    
  updatePotionName(oldName, newName) {
    const {potions} = this;
    for (let potion of potions) {
      if (potion.name === oldName){
        potion.name = newName;
      }
    }
    return this.potions;
  },
  // Change code above this line
};
