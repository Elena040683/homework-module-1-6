// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.


// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// let total = calculateTotalPrice(5, 100);
// console.log(total);

// Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."


function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

let message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}


function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered > available) {
  message = "Not enough goods in stock!"
} else {
  message = "Order is processed, our manager will contact you."
}
  // Change code above this line
  return message;
}

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:
// 
// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice = pricePerDroid * orderedQuantity;
  
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
  }
  // Change code above this line
  return message;
}


function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}


function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0) {
  message = "There are no products in the order!"
} else if (ordered > available) {
  message = "Your order is too large, there are not enough items in stock!"
} else {
  message = "The order is accepted, our manager will contact you"
}
  // Change code above this line
  return message;
}


function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.
// 
// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

  return canAccessContent;
}

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000) {
  discount = GOLD_DISCOUNT;
} else if (totalSpent >= 20000 && totalSpent < 50000) {
  discount = SILVER_DISCOUNT;
} else if (totalSpent >= 5000 && totalSpent < 20000) {
  discount = BRONZE_DISCOUNT;
} else {
  discount = BASE_DISCOUNT;
}
  // Change code above this line
  return discount;
}
