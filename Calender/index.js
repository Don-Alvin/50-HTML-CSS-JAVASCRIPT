const monthIndex = new Date().getMonth();
const monthElement = document.querySelector(".date h1");
const fullDateElement = document.querySelector(".date p");
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
const daysElement = document.querySelector(".days");

console.log(firstDay);

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

monthElement.textContent = months[monthIndex];
fullDateElement.textContent = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; ) {
	days += `<div class='empty'></div>`;
}
for (let i = 1; i <= lastDay; i++) {
	if (i === new Date().getDate() - 1) {
		days += `<div class='today'>${i}</div>`;
	}
	days += `<div>${i}</div>`;
}

daysElement.innerHTML = days;

console.log(lastDay);
