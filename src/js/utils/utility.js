var nowDate, hour, minute, day, month;

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

function initDate() {
	nowDate = new Date();
	hour = nowDate.getHours();
	minute = nowDate.getMinutes();
	day = nowDate.getDay();
	month = nowDate.getMonth();
}

export function greet() {
	initDate();

	if(hour < 1) return 'Midnight';
	if(hour < 11) return 'Good Morning';
	if(hour < 18) return 'Good Afternoon';
	if(hour < 23) return 'Good Evening';

	return 'Good Evening';
}

export function prayTime() {
	initDate();

	if(hour < 2) return 'Menjelang Subuh';
	if(hour < 5) return 'Waktu Subuh';
	if(hour < 10) return 'Menjelang Dzuhur';
	if(hour < 13) return 'Waktu Dzuhur';
	if(hour < 14) return 'Menjelang Ashar';
	if(hour < 16) return 'Waktu Ashar';
	if(hour < 18) return 'Menjelang Maghrib';
	if(hour < 19) return 'Waktu Maghrib';
	if(hour < 1) return 'Waktu Isya';

	return 'Waktu Isya';
}

export function time(format = 24) {
	initDate();

	const meridiem = hour > 12 ? 'PM' : 'AM';
	let disHour = format == 24 ? hour : hour > 12 ? (hour - 12) : hour;
	disHour = disHour < 10 ? `0${disHour}` : disHour;

	return {
		meridiem,
		hour: disHour,
		minute: minute < 10 ? `0${minute}` : minute,
	};
}

export function calendar() {
	initDate();

	return {
		month,
		day: days[day],
		date: nowDate.getDate(),
		monthName: months[month],
		year: nowDate.getFullYear(),
	};
}
