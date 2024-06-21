// Burger button
$('.burger').click(function () {
    $('.menu').toggleClass('open');
    $('.burger').toggleClass('burger-open');
});

// Close burger
$('.but').click(function () {
    $('.menu').toggleClass('open');
    $('.burger').toggleClass('burger-open');
});

// Dark theme 
// $('.themebtn').click(function () {
//     $('.wrapper').toggleClass('darkthm');
//     $('.header_line').toggleClass('darkline');
//     $('.themebtn').toggleClass('darkbtn');
//     $('.burger').toggleClass('darkbtn');
//     $('.avatar img').toggleClass('avatardark');
// });

// Tabs 
let button = document.getElementsByClassName('but'),
    tabContent = document.getElementsByClassName('tab-content');
button[0].classList.add('active');
tabContent[0].style.display = 'block';

function city(e, city) {
    let i;
    for (i = 0; i < button.length; i++) {
        tabContent[i].style.display = 'none';
        button[i].classList.remove('active');
    }
    document.getElementById(city).style.display = 'block';
    e.currentTarget.classList.add('active');
};

// Brithday
let now = new Date();
let current_year = now.getFullYear();
let next_year = current_year + 1;
let target_date = new Date("Jun 16 " + next_year).getTime();
let days;
let $days = document.getElementById("d");

function update() {
    let current_date = new Date().getTime();
    let seconds_left = (target_date - current_date) / 1000;
    days = parseInt(seconds_left / 86400);
    $days.innerHTML = pad(days, 2);
    if (days === 0) {
        $("#d").html('Today!');
        $("#d").attr('key', 'today');
    }
}
update();

function pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
};

//progress HTML
let procentHTML = '90%';
document.getElementById('htmlLine').style.width = procentHTML;
document.getElementById('htmlProg').textContent = procentHTML;

//progress CSS
let procentCSS = '80%';
document.getElementById('cssLine').style.width = procentCSS;
document.getElementById('cssProg').textContent = procentCSS;

//progress JS
let procentJS = '30%';
document.getElementById('jsLine').style.width = procentJS;
document.getElementById('jsProg').textContent = procentJS;

//progress C++
let procentCPP = '13%';
document.getElementById('cppLine').style.width = procentCPP;
document.getElementById('cppProg').textContent = procentCPP;

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
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let message = "";

    if (hour < 6) {
        message = "night";
        $("#timehello").attr('key', 'night');
        $('.wrapper').toggleClass('darkthm');
        $('.header_line').toggleClass('darkline');
        $('.themebtn').toggleClass('darkbtn');
        $('.burger').toggleClass('darkbtn');
        $('.avatar img').toggleClass('avatardark');
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

//Color picker
let timer_id = 0;
let menu = false; 

$('.themebtn').mousedown(function () {
    timer_id = setTimeout('colorpicker()', 1000)
});
$('.themebtn').mouseup(function () {
    clearTimeout(timer_id); if (!menu) fastClick();
});

function colorpicker() {
    alert('Soon...');
    // document.querySelector('#favcolor').style.display='block';
};

function fastClick() {
    $('.wrapper').toggleClass('darkthm');
    $('.header_line').toggleClass('darkline');
    $('.themebtn').toggleClass('darkbtn');
    $('.burger').toggleClass('darkbtn');
    $('.avatar img').toggleClass('avatardark');
};