"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (4 == 4) {
  //условия превращают любой тип данных в булиновое значение
  console.log("ok");
} else {
  console.log("error");
}

const numb = 30;
const num = 50;

if (num < 49) {
  console.log("no");
} else if (num > 100) {
  console.log("NO NO");
} else if (num > 30) {
  console.log("blizko");
}

numb == 30 ? console.log("ee") : console.log("nooo"); //тернарный оператор, условие, далее либо true либо false

const nunB = 32;

switch (nunB) {                        //switch проверяет на точное сравнение, в case какие либо значение, в default если условие не выполнилось
  case 31:                             //где выводится consolelog там выводится что будет если true
    console.log("NO");
    break;
  case 30:
    console.log("NO NO");
    break;
  case 29:
    console.log("NO NO NO");
    break;
  case 33:
    console.log("NO NO NO");
    break;
    default:
        console.log('в другой раз');
        break;
}

const andrew = true;
const mark = true;

if ( andrew && mark) {
    console.log('yes yes');
}

