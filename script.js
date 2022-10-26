// function getMathResult(num, times) {
//   if (typeof(times) !== 'number' || times <= 0) {
//       return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//       if (i === times) {
//           str += num * i;
//       } else {
//           str += num * i + '---';
//       }
//   }

//   return str;
// }

// console.log(getMathResult(10, 10));

// let a = 'Andrew Konev';

// console.log(a.slice(6,12));
// if (4 == 4) {
//   //условия превращают любой тип данных в булиновое значение
//   console.log("ok");
// } else {
//   console.log("error");
// }

// const numb = 30;
// const num = 50;

// if (num < 49) {
//   console.log("no");
// } else if (num > 100) {
//   console.log("NO NO");
// } else if (num > 30) {
//   console.log("blizko");
// }

// numb == 30 ? console.log("ee") : console.log("nooo"); //тернарный оператор, условие, далее либо true либо false

// const nunB = 32;

// switch (nunB) {                        //switch проверяет на точное сравнение, в case какие либо значение, в default если условие не выполнилось
//   case 31:                             //где выводится consolelog там выводится что будет если true
//     console.log("NO");
//     break;
//   case 30:
//     console.log("NO NO");
//     break;
//   case 29:
//     console.log("NO NO NO");
//     break;
//   case 33:
//     console.log("NO NO NO");
//     break;
//     default:
//         console.log('в другой раз');
//         break;
// }

// const andrew = true;
// const mark = true;

// if ( andrew && mark) {
//     console.log('yes yes');
// }

//оператор &&(и) выводит false если одно из условий не выполнится
//оператор || (или) выводит true если одно из условий true

// console.log(NaN || 2 || undefined);                   //2 так как это первое true

// console.log(NaN && 2 && undefined);                   //nan так как первое false

// console.log(1 && 2 && 3);                             //веыдедт 3 т.к. последнее true

// console.log((!1 && 2) || !3);                         //false

// console.log(25 || (null && !3));                       //25

// console.log(NaN || null || !3 || undefined || 5);     //5

// console.log(NaN || (null && !3 && undefined) || 5);   //5

// console.log((5 === 5 && 3 > 1) || 5);                 //выводит первое true, а это 5===5

// const hamburger = 3;                                       //условие выполнено т.к. справа true
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger === 3 && cola) || (fries === 3 && nuggets)) {
//   console.log("Done!");
// }

// let hamburgerr;
// const friess = NaN;
// const colaa = 0;
// const nuggetss = 0;

// if (hamburgerr || colaa || friess === 3 || nuggetss) {
//   console.log("Done!");
// } else {
//   console.log('ne done')
// };

// let konev = 31;
// switch(konev) {
//   case 31:
//   console.log('no no no')
//   break
//   default:
//     console.log('yes')
// }

// let browser = prompt("какой у вас браузер?");

// if (browser == "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// let dataNumber = +prompt('придумайте число от 1 до 3');

// switch(dataNumber) {
//   case 1:
//     alert('вы ввели один')
//     break
//   case 2:
//     alert('вы ввели 2')
//     break
//   case 3:
//     alert('вы ввели 3')
//     break
//   case 4:
//     alert('сказал же до 3')
//     break
//   default:
//     alert('не более 3')
// }

//циклы

// let abc = 50;

// while (abc <= 55) {

//   console.log(abc)
//     abc++;
// }

// for ( let i =1; i < 8; i++) {       //i это просто переменная(можно указать любую) условия цикла, т.е. пока i будет меньшн 8, шаг выполнения т.е +1 и тд
//   if (i > 5) {
//     break;                            //if это словие а break останавливает цикл, есть так же оператор continue который пропускает указанный шаг цикла
//   }
//   console.log(i)
// }

// let result = "";
// const lenght = 11;

// function cikl() {
//   for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//       result += "*";
//     }

//     result += "\n";
//   }
//   console.log(result);
// }

// cikl();

// const lenghtt = 11;
// for (let i = 5; i < lenghtt; i++) {
//   console.log(i);
// }

// let test = 4;

// while (test <= 9) {
//   test++;
//   console.log(test);
// }

// const numberTwo = 20;

// for (let i = 10; i > numberTwo; i--) {

//   console.log(i);
// }

// let hour = 10;
// let isWeekend = false;
// let day = false;

// if (day || hour < 10 || hour > 18 || isWeekend) {
//   console.log( 'Офис закрыт.' )
// } else {
//   console.log('Офис открыт')
// }

// console.log(true || true || false || false)

// let hour = 12;
// let minute = 30;
// let doted = ':';

// if (hour == 12 && minute == 30) {
//   console.log( 'The time is 12:30' );
// } else {
//   console.log('The time is ' + hour + doted + minute)
// };

// let userName = prompt('кто там ?');  //двойной if, идет проверка на пользователя и пароль

// if (userName == 'Макусь') {
//   let pass = prompt('пароль?');
//   if (pass == 'какусь') {
//     alert('WELCOME');
//   } else if (pass === '' || pass === null) {
//     alert('не правильно!!!!');
//   } else ('не верно!!');
// }
// else if (userName == null || start === null) {
//   alert('нет такого');
// }
// else {
//   alert('отойди от компьютера');
// }

// let i = 10;

// for ( ; i <= 20; i++ ) {                        //пропускаем начало цикла т.к. переменная обьявленна ранее
//     if (i == 13) {                              //прерывание цикла
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 10; i++ ) {         //continue пропуск части цикла(не полное прерывание как у break)
//     if (i % 2 == 0) continue;
//     console.log(i)
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 1) {
//       console.log( i );
//     }
//   }

// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const ar = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   // Пишем решение вот тут
//   for (i = 0; i < ar.length; i++) {
//     result[i] = ar[i];
//   }
//   console.log(result);

//   // Не трогаем
//   return result;
// }firstTask()

// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];

//   for  (i = 0; i < data; i++) {
//     if (typeof data == 'string') {
//       console.log('string')
//     } else if (typeof data == 'number') {
//       console.log('number')
//     }
//   }

//   // Не трогаем
//   return result;
// }

//перебор обьектов через метод for in
// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   name2: 'test',
//   color: {
//     border: 'black',
//     bg: 'red'
//   },
//   makeTest: function() {
//     console.log('test');
//   }
// };
// options.makeTest();

// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`свойство ${key} имеет значение ${options[key]}`);
//   }
// }

// console.log(Object.keys(options).length);

//перебор массива методом forEach
// const arrb = [1,2,3,4,5,6,7];
// console.log(arrb);

// for (let i = 0; i < arrb.length; i++) {
//   console.log(arrb[i]);
// }

// arrb.forEach( function (item, i, arrb) {
//   console.log(`${i}: ${item} внутри массива ${arrb}`)
// });

// console.log(arr);

// arr.pop();

// console.log(arr);

// let massiv = ['Толька', 'учи', 'js'];
// console.log(massiv.join(' '));
// console.log(massiv);

// const obj = {
//   a: 5,
//   b: 1

// }
// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copyObj (mainObject) {
//   let objCope = {};

//   let key;
//   for (key in mainObject) {
//     objCope[key] = mainObject[key]
//   }

// }

// const data = [
//   {
//     id: 1,
//     name: 'Andrew',
//     isActiv: true,
//     email: 'andew@mail.ru'
//   },
//   {
//     id: 2,
//     name: 'Tolka',
//     isActiv: false,
//     email: 'tolka@mail.ru'
//   },
//   {
//     id: 3,
//     name: 'Ivan',
//     isActiv: true,
//     email: 'ivan@mail.ru'
//   },
//   {
//     id: 4,
//     name: 'Ekaterina',
//     isActiv: false,
//     email: 'ekaterina@mail.ru'
//   },
// ];

// const getJs = [];
// const userName = [];

// data.forEach(elem => {
//   getJs.push(elem.isActiv);
//   userName.push(elem.name);
// })

// console.log(getJs);
// console.log(userName);

//                                                                             //function declaration, можно вызвать в любом месте, т.е. до обьявления функции

// function calcSum(a,b) {
//   console.log(a+b);
// }
// calcSum(1,2);

//                                                                             //function expression, можно вызвать только после обьявления

// let showMessage = function () {
//   console.log('hello')
// };

// showMessage();

//                                                                             //стрелочная функция

// let showMessage2 = (a, b) => {
//   console.log(a +' '+ b);
// };
// showMessage2('hello', 'world');

//                                                                             //обычная функция

// function calcSum3 (numOne, numTwo) {
//   let result = 1;
//   for(let i = 0; i < numTwo; i++) {
//     result *= numOne;
//   }
//   return result;
// }
// console.log(calcSum3(2,3));

//                                                                             //рекурсия

// function calcSum2 (numOne, numTwo) {
//   if (numTwo === 1) {
//     return numOne;
//   } else {
//     return numOne * calcSum2(numOne, numTwo - 1);
//   }
// }
// console.log(calcSum2(2,3));

window.addEventListener("DOMContentLoaded", function () {
  let div = document.querySelector(".test");

  let divDiv = document.querySelector(".test_test");

  let items = document.querySelectorAll(".box .item");

  let box = document.querySelector(".box");

  box.addEventListener("click", function (e) {
    if (e.target.classList.contains("item")) {
      let color = [
        "#FBCEB1",
        "#7FFFD4",
        "#FBCEB1",
        "#E32636",
        "#F19CBB",
        "#ED3CCA",
        "#FF033E",
        "#CD9575",
        "#44944A",
        "#6A5ACD",
        "#A8E4A0",
        "#003153",
        "#77DDE7",
        "#30D5C8",
        "#FFDB8B",
        "#DABDAB",
        "#FFDC33",
        "#480607",
        "#A7FC00",
        "#F64A46",
        "#7CFC00",
      ];
      let num = Math.floor(Math.random() * color.length);
      e.target.style.color = color[num];
    }
  });

  // for (let i = 0; i < items.length; i++) {
  //   items[i].addEventListener("click", changeColor);
  // }

  // function changeColor() {

  //   let color = [
  //     "#FBCEB1",
  //     "#7FFFD4",
  //     "#FBCEB1",
  //     "#E32636",
  //     "#F19CBB",
  //     "#ED3CCA",
  //     "#FF033E",
  //     "#CD9575",
  //     "#44944A",
  //     "#6A5ACD",
  //     "#A8E4A0",
  //     "#003153",
  //     "#77DDE7",
  //     "#30D5C8",
  //     "#FFDB8B",
  //     "#DABDAB",
  //     "#FFDC33",
  //     "#480607",
  //     "#A7FC00",
  //     "#F64A46",
  //     "#7CFC00",
  //   ];
  //   let num = Math.floor(Math.random() * color.length);
  //   this.style.color = color[num];
  // }

  // divDiv.addEventListener("mouseover", changeColor);
  // div.addEventListener("mouseover", changeColor);

  // for (let i = 0; i < 1; i++) {
  //   div.innerHTML += "Толя учи js";
  //   setTimeout(function () {
  //     div.innerHTML = "ясно ?";
  //   }, 3000);
  // }
  let form = document.querySelector(".form");
  let input = form.querySelectorAll(".check");

  let patterns = {
    notEmpty: /.+/,
    phone: /^\d{7,15}$/,
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
  };

  function checkInput(event) {
    let hasErorr = false;

    for (let i = 0; i < input.length; i++) {
      let inp = input[i];
      let val = inp.value.trim();
      let name = inp.dataset.valid;
      let pattern = patterns[name];
      if (!pattern.test(val)) {
        input[i].classList.add("error");
        hasErorr = true;
      }
    }
    if (hasErorr) {
      event.preventDefault();
    }
  }

  form.addEventListener("submit", checkInput);

  form.addEventListener("focusout", checkInput);

  form.addEventListener("focusin", function (e) {
    if (e.target.classList.contains("error")) {
      e.target.classList.remove("error");
    }
  });

  let up = document.querySelector(".roundup");

  up.addEventListener("click", scrollToPos);


  function scrollToPos(pos) {
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  function elemTop(node) {
    let coords = node.getBoundingClientRect();
    return coords.top + window.pageYOffset;
  };

  function scrollToId(id) {
    let target = document.querySelector(id);

    if (target !== null) {

      let pos = elemTop(target) - (document.querySelector('.nav').clientHeight + document.querySelector('.menu').clientHeight);
      scrollToPos(pos);
    }
  }
  
  window.addEventListener("scroll", function () {
    if (window.scrollY < window.innerHeight) {
      up.classList.remove("show");
    } else {
      up.classList.add("show");
    }
  });

  let menu = document.querySelector(".menu");

  if (window.location.hash !== "") {
    scrollToId(window.location.hash);
  }



  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("link")) {
      e.preventDefault();

      let link = e.target;
      scrollToId(link.hash);

      menu.querySelector(".active").classList.remove("active");
      link.classList.add("active");
    }
  });




});



window.addEventListener('scroll', () => {                                                         //подписываемся на событие скролл у окна браузера
	let scrollDistance = window.scrollY;                                                           //сохраняем значение скорола по вертикали в переменную"

		document.querySelectorAll('.nav').forEach((el, i) => {                                      //находим все элементы с классом .nav, запускаем перебор массива с двумя аргументми, далее стрелочная функция
			if (el.offsetTop - (document.querySelector('.nav').clientHeight + document.querySelector('.menu').clientHeight) <= scrollDistance) {       //условие: находим высоту элемента сверху элемента сверху - высота хеадера больше или равно 
				document.querySelectorAll('.link').forEach((el) => {                                    //проходимся по всем секциям
					if (el.classList.contains('active')) {                                                //проверяем есть ли класс
						el.classList.remove('active');                                                      //удаляем если есть
					}
				});

				document.querySelectorAll('.link')[i].classList.add('active');                          //добавляем класс эктив ссылкам
			}
		});
	
});



window.addEventListener('load', function() {
  let faq = document.querySelector('.faq');



  faq.addEventListener('click', function(e) {
    if(e.target.classList.contains('ask')) {
      toggleItem(e.target);
      e.target.classList.toggle('active-ask');
    }
  });


  function toggleItem(ask){
		let answer = ask.parentNode.querySelector('.answer');
		
		if(answer.classList.contains('open')){
			let animate = answer.animate([
				{ opacity: 1, transform: 'translateX(0)' },
				{ opacity: 0, transform: 'translateX(100px)' }
			], { duration: 500 });

			animate.addEventListener('finish', function(){
				answer.classList.remove('open');
			});
		}
		else{
			answer.classList.add('open');
		}
	}
});

