// #1

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const array2 = array.map((num) => {
  return num + 20
})
console.log(array2);

// #2

// Не смог :(

// 3#

let num = 4;
switch (num) {
case 1:
result = 'зима';
break;
case 2:
result = 'весна';
break;
case 3:
result = 'лето';
break;
case 4:
result = 'осень';
break;
}

console.log(result);

// #4

const obj = {green: 'зеленый', red: "красный", blue: "голубой"}
for (variable in obj) {
  console.log(variable + " = " + obj[variable] );
}

// #5

let userName = prompt("Ваше имя?");

if (userName) {
  if (userName.toLowerCase() .includes('насиба')) {
    alert ("Приветствую, Насиба")
  } else {
  alert ("Я вас не знаю :(")
}
}

