import { isLiveBg } from "../utils/storage.js";
class Background {
  background = document.querySelector(".background");
  changeBg = document.querySelector(".changebackground");
  static liveBgInterval;

  constructor() {
    if (isLiveBg() == null || isLiveBg()) this.liveBackground();
    this.setBackground();
  }

  liveBackground(interval = 10000) {
    isLiveBg(true);
    this.changeBg.style.display = "none";

    this._liveBackground();
    this.liveBgInterval = setInterval(() => {
      this._liveBackground();
    }, interval);
  }

  customBackground() {
    isLiveBg(false);
    this.changeBg.style.display = "block";

    clearInterval(this.liveBgInterval);
  }

  setBackground(url = null) {
    url = url ? url : localStorage.getItem("background");
    localStorage.setItem("background", url);

    this.background.style.background = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${url})`;
    this.background.style.backgroundRepeat = "no-repeat";
    this.background.style.backgroundPosition = "center";
    this.background.style.backgroundSize = "cover";
  }

  async _liveBackground() {
    const height = window.screen.availHeight,
      width = window.screen.availWidth;

    fetch(`https://source.unsplash.com/random/${height}x${width}`)
      .then((res) => res)
      .then((image) => {
        this.setBackground(image.url);
      });
  }
}

export default Background;
