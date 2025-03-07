//Hello!
function setTime() {
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let message = "";
    const timeHelloElement = document.getElementById("timehello");

    if (hour < 6) {
        message = "night";
        timeHelloElement.setAttribute("key", 'night');
    } else if (hour < 12) {
        message = "morning";
        timeHelloElement.setAttribute("key", 'morning');
    } else if (hour < 18) {
        message = "afternoon";
        timeHelloElement.setAttribute("key", 'afternoon');
    } else if (hour < 24) {
        message = "evening";
        timeHelloElement.setAttribute("key", 'evening');
    }

    if (message !== "") {
        timeHelloElement.textContent = "Good " + message + "!";
    }
}
console.log("What are you doing here?");

setTime();

//Smooth Scroll
const menuButtons = document.querySelectorAll(".main__menu-btn, .homebtn");

menuButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetTop = targetElement.offsetTop;

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});

//Animation at scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll_anim');
            document.querySelector('.about__title').classList.add('scroll_anim');
        }
    });
});
observer.observe(document.querySelector('.about__grid'));

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('contacts_anim');
        }
    });
});
observer2.observe(document.querySelector('.contacts__links'));

// Brithday
let now = new Date();
let current_year = now.getFullYear();
let next_year = current_year;
let target_date = new Date("Jun 15 " + next_year).getTime();
let days;
let $days = document.getElementById("brithDays");

function update() {
    let current_date = new Date().getTime();
    let seconds_left = (target_date - current_date) / 1000;
    days = parseInt(seconds_left / 86400);
    brithDays.innerHTML = pad(days, 2);
    if (days === 0) {
        brithDays.textContent = 'Today!';
        brithDays.dataset.key = 'today';
    }
}
update();

function pad(num, size) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
};

//Age 
var today = new Date();
var bday = new Date('15 June 2005');
var years = today - bday;
myAge.textContent = new Date(years).getFullYear() - 1970;

// Language switcher
function translateClick(e) {
    let txt = e.innerText;
    e.innerText = txt == 'EN' ? 'RU' : 'EN';
    e.setAttribute("id", e.getAttribute('id') === 'en' ? 'ru' : 'en')
}

let lang = "en";

document.querySelectorAll(".translate").forEach(function (button) {
    button.addEventListener("click", function () {
	navigator.vibrate([10,150]);
        lang = this.id;
        document.querySelectorAll(".lang").forEach(function (element) {
            element.textContent = arrLang[lang][element.getAttribute("key")];
        });
    });
});

//discord status 
async function getStatus() {
	const url = `https://api.lanyard.rest/v1/users/527909024663076864`;
	const res = await fetch(url);
	const data = await res.json();

    if(data.data.discord_status === 'online') {
        document.getElementById('status').classList.add('statusOnline')
    }
}

getStatus();
