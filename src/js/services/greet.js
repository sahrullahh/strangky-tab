import { user_name } from "../utils/storage.js";
import { greet, prayTime } from "../utils/utility.js";

class Greet {
  letters = document.querySelector(".letters");
  prayTime = document.querySelector(".info-sholat");

  nameBtn = document.querySelector(".changename");
  nameIpt = document.getElementById("name");

  constructor() {
    if (user_name() == null) user_name("Unnamed");

    this.nameIpt.value = user_name();
    this._greet();
    this._initListeners();
  }

  _greet() {
    this.letters.innerHTML = `${greet()}, ${user_name()}`;
    this.prayTime.innerHTML = prayTime();
  }

  _initListeners() {
    this.nameIpt.addEventListener("keyup", () => {
      user_name(this.nameIpt.value);
      this._greet();
    });

    this.nameBtn.addEventListener("click", () => {
      user_name(this.nameIpt.value);
      this._greet();
    });
  }
}

export default Greet;
