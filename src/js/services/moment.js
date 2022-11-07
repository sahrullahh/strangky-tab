import { time_format } from "../utils/storage.js";
import { calendar, time } from "../utils/utility.js";

class Moment {
    calendar = document.querySelector('.dateday');
    clock = document.querySelector('.clock');
    static calendarInterval;

    constructor() {
        this.updateCalendar();
        this.updateClock();

        this.calendarInterval = setInterval(() => {
            this.updateCalendar();
            this.updateClock();
        }, 1000);
    }

    updateClock() {
        if(time_format() == 12) {
            const {hour, minute, meridiem} = time(12);
            this.clock.innerHTML = `${hour}:${minute} <span class="pm">${meridiem}</span>`;
        } else {
            const {hour, minute} = time(24);
            this.clock.innerHTML = `${hour}:${minute}`;
        }
    }

    updateCalendar() {
        const {day, date, monthName, year} = calendar();
        this.calendar.innerHTML = `${day}, ${date} ${monthName} ${year}`;
    }
}

export default Moment;
