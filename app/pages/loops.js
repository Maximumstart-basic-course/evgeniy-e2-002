let k = 10;
while (k >= 0) {
  if (k % 2 === 0) {
    console.log(k);
    --k;
  }
}


const isAdmin = true;

(isAdmin) ? alert('Привет, Admin!') : alert('Ты точно не Admin');


const age = +prompt('Сколько тебе лет?', '12');

switch (age) {
  case 12:
    console.log('Слишком мало :(');
    break;

  case 16:
    console.log('Почти достаточно :[');
    break;

  case 18:
    console.log('Вот сейчас в самый раз! :)');
    break;

  default:
    console.log('Возраст не определен %)');
}

const foo = prompt('Введите логин');

if (foo === 'Admin') {
  const pass = prompt('Введите пароль');
  if (pass === 'qwerty') {
    alert('Добро пожаловать admin');
  } else if (pass === null) {
    alert('Отказано в доступе');
  } else {
    alert('Введенный пароль неправильный');
  }
} else if (foo === 'User') {
  const pass = prompt('Введите пароль');
  if (pass === '12345') {
    alert('Добро пожаловать User');
  } else if (pass === null) {
    alert('Отказано в доступе');
  } else {
    alert('Введенный пароль неправильный');
  }
} else {
  alert('Такого логина нет в системе');
}
