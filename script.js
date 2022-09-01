// "use strict";

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


                          //оператор &&(и) выводит false если одно из условий не выполнится
                          //оператор || (или) выводит true если одно из условий true

console.log(NaN || 2 || undefined);                   //2 так как это первое true

console.log(NaN && 2 && undefined);                   //nan так как первое false

console.log(1 && 2 && 3);                             //веыдедт 3 т.к. последнее true

console.log((!1 && 2) || !3);                         //false

console.log(25 || (null && !3));                       //25

console.log(NaN || null || !3 || undefined || 5);     //5

console.log(NaN || (null && !3 && undefined) || 5);   //5

console.log((5 === 5 && 3 > 1) || 5);                 //выводит первое true, а это 5===5


const hamburger = 3;                                       //условие выполнено т.к. справа true
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
  console.log("Done!");
}


let hamburgerr;
const friess = NaN;
const colaa = 0;
const nuggetss = 0;

if (hamburgerr || colaa || friess === 3 || nuggetss) {
  console.log("Done!");
} else {
  console.log('ne done')
};
