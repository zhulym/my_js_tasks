/*=============================================================================*/
// // 1.Всем <h2> поставьте текст "!!!!!".
// // 2.Всем <h3> сделайте красный цвет.
// // 3.Всем <h2> сделайте голубой цвет и font-size: 30px.

// $('h2').text('!!!!!').css({ 'color': 'blue', 'font-size': '30px' });
// $('h3').css('color', 'red');


// /*=============================================================================*/
// //       Получите и покрасьте в разный цвет следующие элементы:
// // 4.Все элементы с классом test.
// // 5.Все <h2> с классом test.  .
// // 6.Все абзацы которые следуют сразу за абзацами.
// // 7.Все <li>, которые следуют сразу за <li> с классом www.
// // 8.Все <i> внутри <h2>.
// // 9.Все <i> непосредственно внутри <h2>.

// $('.test').css('color', 'red');
// $('h2.test').css('color', 'blue');
// $('p + p').css('color', 'green');
// $('li.www + li').css('color', 'orange');
// $('h2 i').css('color', 'red');
// $('h2 > i').css('color', 'pink');


/*=============================================================================*/
// //   Для решения задач данного блока вам понадобятся следующие псевдоклассы jQuery: 
// //   :has, :header, :empty, :contains, :not, :last, :first.

// // Получите и покрасьте в красный цвет следующие элементы:
// // 10. Все заголовки.
// // 11. Все <h2> НЕ с классом test.
// // 12. Все заголовки НЕ с классом test.
// // 13. Все заголовки, которые следуют сразу за заголовками.
// // 14. Все заголовки с классом test, которые следуют сразу за заголовками с классом test.
// // 15. Все пустые элементы. 
// // 16. Первый абзац <p>. 
// // 17. Последний абзац <p>.
// // 18. Все <li>, которые содержат текст 'пункт'. 
// // 19. Все <h2>, внутри которых есть тег <i>. 
// // 20. Все <h2>, которые непосредственно содержат <i>.

// $(':header').css('color', 'red');
// $('h2').not('.test').css('color', 'red');
// $(':header').not('.test').css('color', 'red');
// $(':header + :header').css('color', 'red');
// $(':header.test + :header.test').css('color', 'red');
// $('p:first').css('color', 'red');
// $(':empty').css('color', 'red');
// $('p:last').css('color', 'red');
// $('li:contains("пункт")').css('color', 'red');
// $('h2:has(i)').css('color', 'red');
// $('h2 > i').css('color', 'red');

/*=============================================================================*/
// Выведите алертом содержимое всех абзацев < p > (по очереди). 
// Выведите алертом содержимое всех заголовков(по очереди). 
// Поменяйте содержимое всех < li > на их порядковый номер. 
// Добавьте всем < li > в конец их порядковый номер. 


// $('p').each(function () {
//     alert($(this).text())
// });

// $(':header').each(function () {
//     alert($(this).text())
// });

// $('li').each(function (i) {
//     $(this).text(i).append(i);
// })

// $('li').each(function (i) {
//     $(this).append(i);
// })




