// Burger button
$('.burger').click(function () {
    $('.menu').toggleClass('open');
    $('.burger').toggleClass('burger-open');
})

// Dark theme 
$('.themebtn').click(function () {
    $('.wrapper').toggleClass('darkthm');
    $('.header_line').toggleClass('darkline');
    $('.themebtn').toggleClass('darkbtn');
    $('.burger').toggleClass('darkbtn');
    $('.avatar img').toggleClass('avatardark');
})

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
}

// Close burger
$('.but').click(function () {
    $('.menu').toggleClass('open');
    $('.burger').toggleClass('burger-open');
})

// Brithday
let now = new Date();
let current_year = now.getFullYear();
let next_year = current_year;
let target_date = new Date("Jun 16, " + next_year).getTime();
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
    };

}
update();


function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
};
