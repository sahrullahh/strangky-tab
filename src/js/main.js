import '../scss/main.scss';

const store = chrome.storage.sync;
setTimeout(() => {
  document.title = "New Tab";
}, 4000);

var inputSearch = document.querySelector("#inputSearch");
var letters = document.querySelector(".letters");
var jadwalSholat = document.querySelector(".info-sholat");
var clock = document.querySelector(".clock");

var changeName = document.querySelector(".changename");
var inputName = document.querySelector("#name");
var named;

var myClock = document.querySelector("#myclock");
var changeBg = document.querySelector(".changebackground");
var radioLivebg = document.querySelector("#live-background");
var radioCustombg = document.querySelector("#custom-background");

radioLivebg.addEventListener("click", function () {
  localStorage.setItem("radio", "no");
  liveBackground();
});

myClock.addEventListener("change", function () {
  let valueNum = myClock.value;
  localStorage.setItem("clock", valueNum);
});

radioCustombg.addEventListener("click", function () {
  localStorage.setItem("radio", "yes");
  customBackground();
});
function liveBackground() {
  localStorage.removeItem("interval");
  localStorage.removeItem("images");
  changeBg.style.display = "none";
  var liveBgTime = setInterval(function () {
    fetch(
      "https://source.unsplash.com/random/" +
        window.screen.availWidth +
        "x" +
        window.screen.availHeight
    )
      .then((resp) => resp)
      .then((imagelists) => {
        let selectedImage = imagelists.url;
        document.querySelector(
          ".background"
        ).style.background = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${selectedImage})`;
        document.querySelector(".background").style.backgroundRepeat =
          "no-repeat";
        document.querySelector(".background").style.backgroundSize = "cover";
        document.querySelector(".background").style.backgroundPosition =
          "center";
      })
      .catch(() => {
        error();
      });
  }, 10000);
  var timeForFunc = setInterval(function () {
    if (localStorage.getItem("interval") == "ok") {
      setTimeout(function () {
        clearInterval(liveBgTime);
        clearInterval(timeForFunc);
        console.clear();
      }, 200);
      console.log("live background has stopped..");
    } else {
      console.log("live background running..");
    }
  }, 200);
}
function customBackground() {
  changeBg.style.display = "block";
  localStorage.setItem("interval", "ok");
}

if (!localStorage.getItem("radio")) {
  liveBackground();
  radioCustombg.checked = false;
  radioLivebg.checked = true;
} else if (localStorage.getItem("radio") == "yes") {
  customBackground();
  radioCustombg.checked = true;
  radioLivebg.checked = false;
} else {
  liveBackground();
  radioCustombg.checked = false;
  radioLivebg.checked = true;
}

const resolution = document.querySelector(".resolution-info");

// resolution info
if (window.screen.availWidth >= 1920) {
  resolution.style.display = "block";
  resolution.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  preserveAspectRatio="xMidYMid meet"
  viewBox="0 0 16 16"
>
  <g fill="currentColor">
    <path
      d="M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02c0-1.354-.51-2.04-1.622-2.04z"
    />
    <path
      d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11H8.5z"
    />
  </g>
</svg>`;
} else if (window.screen.availWidth >= 2160) {
  resolution.style.display = "block";
  resolution.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="currentColor"><path d="M3.577 8.9v.03h1.828V5.898h-.062a46.781 46.781 0 0 0-1.766 3.001z"/><path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm2.372 3.715l.435-.714h1.71v3.93h.733v.957h-.733V11H5.405V9.888H2.5v-.971c.574-1.077 1.225-2.142 1.872-3.202zm7.73-.714h1.306l-2.14 2.584L13.5 11h-1.428l-1.679-2.624l-.615.7V11H8.59V5.001h1.187v2.686h.057L12.102 5z"/></g></svg>`;
} else {
  resolution.style.display = "none";
}
changeName.addEventListener("click", function () {
  var changeNameInput = document.querySelector("#name").value;
  localStorage.setItem("names", changeNameInput);
  named = changeNameInput;
});

if (!localStorage.getItem("names")) {
  named = "Unnamed";
  inputName = "Unnamed";
} else {
  inputName.value = localStorage.getItem("names");
  named = localStorage.getItem("names");
}

function currentTime() {
  var selId = document.getElementById("myclock");
  if (localStorage.getItem("clock") == 12) {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "<span class='pm'>AM</span>";

    if (h == 0) {
      h = 12;
    }

    if (h > 12) {
      h = h - 12;
      session = "<span class='pm'>PM</span>";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let time = h + ":" + m + " " + session;
    clock.innerHTML = time;

    myClock.value = 12;
  } else {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh > 12) {
      session = "PM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    let time = hh + ":" + mm + ".";

    clock.innerText = time;
    myClock.value = 24;
  }
  let dates = new Date();
  let hours = dates.getHours();
  let minutes = dates.getMinutes();
  let seconds = dates.getSeconds();
  let sessions = "AM";

  if (hours > 12) {
    sessions = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ".";

  if (hours < 1) {
    letters.innerHTML = "Midnight, " + named + ".";
  } else if (hours < 11) {
    letters.innerHTML = "Good Morning, " + named + ".";
  } else if (hours < 18) {
    letters.innerHTML = "Good Afternoon, " + named + ".";
  } else if (hours < 23) {
    letters.innerHTML = "Good Evening, " + named + ".";
  } else {
    letters.innerHTML = "Good Evening, " + named + ".";
  }

  if (hours < 2) {
    jadwalSholat.innerHTML = "Menjelang Subuh";
  } else if (hours < 5) {
    jadwalSholat.innerHTML = "Waktu Subuh";
  } else if (hours < 10) {
    jadwalSholat.innerHTML = "Menjelang Dzuhur";
  } else if (hours < 13) {
    jadwalSholat.innerHTML = "Waktu Dzuhur";
  } else if (hours < 14) {
    jadwalSholat.innerHTML = "Menjelang Ashar";
  } else if (hours < 16) {
    jadwalSholat.innerHTML = "Waktu Ashar";
  } else if (hours < 18) {
    jadwalSholat.innerHTML = "Menjelang Magrib";
  } else if (hours < 19) {
    jadwalSholat.innerHTML = "Waktu Magrib";
  } else if (hours < 1) {
    jadwalSholat.innerHTML = "Waktu Isya";
  } else {
    jadwalSholat.innerHTML = "Waktu Isya";
  }
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var months = [
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

  document.querySelector(".dateday").innerHTML =
    days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getFullYear();
  let t = setInterval(function () {
    currentTime();
  }, 1000);
}

currentTime();

// var file, render;

document.getElementById("upload_button").addEventListener(
  "click",
  function () {
    document.getElementById("files").click();
  },
  false
);

document
  .getElementById("files")
  .addEventListener("change", handleFileSelect, false);

var imagesObject = [];

function handleFileSelect(evt) {
  var files = evt.target.files;
  for (var i = 0, f; (f = files[i]); i++) {
    if (!f.type.match("image.*")) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      displayImgData(e.target.result);
      addImage(e.target.result);
    };

    reader.readAsDataURL(f);
  }
}

function loadFromLocalStorage() {
  var images = JSON.parse(localStorage.getItem("images"));

  if (images && images !== null) {
    imagesObject = images;

    displayNumberOfImgs();
    images.forEach(displayImgData);
  }
}

function addImage(imgData) {
  deleteImages();
  setTimeout(() => {
    imagesObject.push(imgData);
    displayNumberOfImgs();
    localStorage.setItem("images", JSON.stringify(imagesObject));
  }, 100);
}

function displayImgData(imgData) {
  document.querySelector(".background").style.background =
    "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('" +
    imgData +
    "')";
  document.querySelector(".background").style.backgroundRepeat = "no-repeat";
  document.querySelector(".background").style.backgroundSize = "cover";
  document.querySelector(".background").style.backgroundPosition = "center";
}

function displayNumberOfImgs() {}

function deleteImages() {
  imagesObject = [];
  localStorage.removeItem("images");
  displayNumberOfImgs();
}

loadFromLocalStorage();

var setting = document.querySelector(".settings");

setting.addEventListener("click", function () {
  document.querySelector(".modal-overlay").style.display = "block";
});

var closeBtn = document.querySelector(".closebtn");

closeBtn.addEventListener("click", function () {
  document.querySelector(".modal-overlay").style.display = "none";
});

// detect os

var userAgent = window.navigator.userAgent,
  platform =
    window.navigator?.userAgentData?.platform ?? window.navigator.platform,
  macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
  windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
  iosPlatforms = ["iPhone", "iPad", "iPod"],
  os = null;

if (macosPlatforms.indexOf(platform) !== -1) {
  os = "Mac OS";
} else if (iosPlatforms.indexOf(platform) !== -1) {
  os = "iOS";
} else if (windowsPlatforms.indexOf(platform) !== -1) {
  os = "Windows";
} else if (/Android/.test(userAgent)) {
  os = "Android";
} else if (!os && /Linux/.test(platform)) {
  os = "Linux";
}


//   (function () {
// fetchGeolocate();
//   function fetchGeolocate(){
//     fetch("https://randomvideo.vercel.app/randomvideo")
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
//   }
//   })();
