$(document).ready(function() {

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});


// 1) Написать обработчик события, не позволяющий скриптам выполняться до загрузки страницы
// 2) Написать функцию, что при клике на “Выбрать тур” , “Получить консультацию” или “Расписание туров” (все 3 элемента)
//      подложка (класс overlay) медленно появлялась на странице (через прозрачность), а само модальное окно (класс modal)
//      плавно выезжало сверху
// 3) Написать функцию, что при клике на крестик всё происходило бы наоборот: подложка исчезала, модальное окно уезжало вверх