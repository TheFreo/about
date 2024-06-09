let arrLang = {
    'ru': {
        'menu': 'Меню',
        'main': 'Главная',
        'about': 'Обо мне',
        'welup': 'Я TheFreo,',
        'welun': ' Я начинающий программист. Люблю сидеть дома и смотреть аниме :-) Сейчас изучаю JavaScript.',
        'bio': 'Кто я?',
        'skills': 'Навыки',
        'devices': 'Девайсы',
        'pc': 'Основной ПК',
        'lap': 'Ноутбук (MateBook D14)',
        'os': 'Система:',
        'cpu': 'Процессор:',
        'gpu': 'Видеокарта:',
        'ram': 'Оперативка:',
        'name': 'Имя: Артём',
        'brith': 'День рождения: 15.06.2005 (Осталось ',
        'brith2': ' дней)',
        'country': 'Страна: Россия (мечтаю переехать в Японию)',
        'city': 'Город: Новосибирск (Родной: Сургут)',
        'stud': 'Учусь: СибГУТИ',
        'langu': 'Языки: Русский, Английский (30%), Украинский (70%)',
        'listen': 'Слушаю: Рок (Любой), IDM, Ambient',
        'cont': 'Контакты',
        'morning': 'Доброе утро!',
        'afternoon': 'Добрый день!',
        'evening': 'Добрый вечер!',
        'night': 'Доброй ночи!'
    },
    'en': {
        'menu': 'Menu',
        'main': 'Main',
        'about': 'About me',
        'welup': "I'm TheFreo,",
        'welun': "I'm an aspiring programmer. I like to sit at home and watch anime :-) At the moment I am studying JavaScript.",
        'bio': 'Who Am I?',
        'skills': 'Skills',
        'devices': 'Devices',
        'pc': 'Main PC',
        'lap': 'Laptop (MateBook D14)',
        'os': 'OS:',
        'cpu': 'CPU:',
        'gpu': 'GPU:',
        'ram': 'RAM:',
        'name': 'Name: Artem',
        'brith': 'Brithday: 15.06.2005 (through ',
        'brith2': ' days)',
        'country': 'Counrty: Russia (dream: Japan)',
        'city': 'City: Novosibirsk (Hometowm: Surgut)',
        'stud': 'Studying: SibSUTIS',
        'langu': 'Languages: Russia, English (30%), Ukrainian (70%)',
        'listen': 'Listen: Rock (Any), IDM, Ambient',
        'cont': 'Contacts',
        'morning': 'Good morning!',
        'afternoon': 'Good afternoon!',
        'evening': 'Good evening!',
        'night': 'Good night!'
    }
};

// Language switcher
var lang;
$(document).ready(function () {
    lang = "ru";
    $("lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

$(".translate").click(function () {
    lang = $(this).attr("id");
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
	$('.menu').toggleClass('open');
    $('.burger').toggleClass('burger-open');
});

//Hello!
function setTime() {
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var message = "";

    if (hour < 6) {
        message = "night";
        $("#timehello").attr('key', 'night');
    } else if (hour < 12) {
        message = "morning";
        $("#timehello").attr('key', 'morning');
    } else if (hour < 18) {
        message = "afternoon";
        $("#timehello").attr('key', 'afternoon');
    } else if (hour < 24) {
        message = "evening";
        $("#timehello").attr('key', 'evening');
    }
    console.log(hour);
    console.log("What are you doing here?");

    if (message !== "") {
        $("#timehello").html("Good " + message + "!");
    }
}
setTime();



