"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function showMyDB (hidden) {
  if( !hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB (personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, "");
  }
  // while(personalMovieDB.genres.length < 3 ) {
  //       personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i} ?`, ""));
  // }
}
writeYourGenres();
console.log(personalMovieDB.genres);

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const one = prompt("Последний просмотренный фильм?", "").trim(),
      two = prompt("На сколько оценишь ?", "");

    if (one != null && two != null && one != "" && two != "" && one.length < 50) {
      personalMovieDB.movies[one] = two;
      console.log("done");
    } else {
      console.log("ne done");
      i--;
    }
  }
}
rememberMyFilms();

function detectedPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("malo");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("ne malo");
  } else if (personalMovieDB.count > 30) {
    console.log("norm");
  } else {
    console.log("error");
  }

  console.log(personalMovieDB);
}
rememberMyFilms();

const timeM = 60;

function fuctionDeclaration(time, year) {
  console.log(time * year);
}
fuctionDeclaration(timeM, numberOfFilms)

const fuctionExspression = function() {
  console.log('world')
};
fuctionExspression()

const Arr = (a, b) => {
  return a + b;
};

function getCoupeNumber(seatNumber) {
  if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
      return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (seatNumber === 0 || seatNumber > 36) {
      return "Таких мест в вагоне не существует";
  }

  return Math.ceil(seatNumber / 4);
  // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

function secondTask() {
  // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];

  // Пишем решение вот тут
  for(let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
      data[i] = data[i] * 2;
    } else if(typeof(data[i]) === 'string') {
      data[i] = `${data[i]} - done`;
    }
  }
  console.log(data)
  // Не трогаем
  return data;
}
secondTask()
function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return;
  }
}
test();

let userName = prompt('ваше имя ?');

function sayHello(name) {
  return 'Привет, ' +  name;
}

console.log(sayHello(userName));

function returnNeighboringNumbers(number) {
  return [number - 1 , number , number + 1];
}
console.log(returnNeighboringNumbers(5))

function getMathResult(num1, num2) {
  if( !(typeof num1 == 'Number') || num2 <= 0) {
    return num1;
  } else if ( (typeof num2 == 'Number') || num2 >= 0) {
    return num1 + '--' || num1 + num2 ;
  }

}

console.log(getMathResult(3,5));