import Background from "./services/background.js";
import Modal from "./services/modal.js";
import Greet from "./services/greet.js";
import Moment from "./services/moment.js";

import './services/modal.js';
import '../scss/main.scss';

function run() {
    const background = new Background();
    const modal = new Modal(background);
    const greet = new Greet();
    const moment = new Moment();
}

run();
