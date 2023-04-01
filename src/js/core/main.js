import Background from "../services/background.js";
import Modal from "../services/modal.js";
import Greet from "../services/greet.js";
import Moment from "../services/moment.js";
import Weather from "../services/weather.js";

import "../services/modal.js";
import "../../scss/main.scss";

async function run() {
	const background = new Background();

	new Modal(background);
	new Greet();
	new Moment();
	new Weather();
}

run();
