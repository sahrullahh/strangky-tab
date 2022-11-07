(()=>{"use strict";const e=(e=null)=>null!=e?(e=Boolean(e),localStorage.setItem("livebg",e),e):null==localStorage.getItem("livebg")?null:"true"==localStorage.getItem("livebg"),t=(e=null)=>(null!=e&&localStorage.setItem("name",String(e)),localStorage.getItem("name")),n=(e=null)=>(null!=e&&localStorage.setItem("timeformat",e),localStorage.getItem("timeformat"));var a,r,o,i,s;const l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function u(){a=new Date,r=a.getHours(),o=a.getMinutes(),i=a.getDay(),s=a.getMonth()}function d(e=24){u();let t=24==e?r:r>12?r-12:r;return t=t<10?`0${t}`:t,{meridiem:r>12?"PM":"AM",hour:t,minute:o<10?`0${o}`:o}}function g(){return u(),{month:s,day:l[i],date:a.getDate(),monthName:c[s],year:a.getFullYear()}}!function(){const a=new class{background=document.querySelector(".background");changeBg=document.querySelector(".changebackground");static liveBgInterval;constructor(){(null==e()||e())&&this.liveBackground(),this.setBackground()}liveBackground(t=1e4){e(!0),this.changeBg.style.display="none",this._liveBackground(),this.liveBgInterval=setInterval((()=>{this._liveBackground()}),t)}customBackground(){e(!1),this.changeBg.style.display="block",clearInterval(this.liveBgInterval)}setBackground(e=null){e=e||localStorage.getItem("background"),localStorage.setItem("background",e),this.background.style.background=`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${e})`,this.background.style.backgroundRepeat="no-repeat",this.background.style.backgroundPosition="center",this.background.style.backgroundSize="cover"}_liveBackground(){const e=window.screen.availHeight,t=window.screen.availWidth;fetch(`https://source.unsplash.com/random/${e}x${t}`).then((e=>e)).then((e=>{this.setBackground(e.url)}))}};new class{modal=document.querySelector(".modal-overlay");closeBtn=document.querySelector(".closebtn");settingsBtn=document.querySelector(".settings");radioLiveBg=document.getElementById("live-background");radioCustBg=document.getElementById("custom-background");imageBtn=document.getElementById("upload_button");imageIpt=document.getElementById("files");clockFormat=document.getElementById("myclock");constructor(e){this.background=e,this._initListeners(),this._setValues()}show=()=>this.modal.style.display="block";hide=()=>this.modal.style.display="none";async handleImageUpload(e){const t=e.target.files[0];if(!t.type.match("image.*"))return void alert("Not an valid image");const n=await function(e){return new Promise(((t,n)=>{const a=new FileReader;a.onload=()=>t(a.result),a.onerror=()=>n("error"),a.readAsDataURL(e)}))}(t);this.background.setBackground(n)}_initListeners(){this.settingsBtn.addEventListener("click",(()=>this.show())),this.closeBtn.addEventListener("click",(()=>this.hide())),this.radioLiveBg.addEventListener("click",(()=>this.background.liveBackground())),this.radioCustBg.addEventListener("click",(()=>this.background.customBackground())),this.imageBtn.addEventListener("click",(()=>this.imageIpt.click())),this.imageIpt.addEventListener("change",(e=>this.handleImageUpload(e))),this.clockFormat.addEventListener("change",(()=>n(this.clockFormat.value)))}_setValues(){const t=e()?this.radioLiveBg:this.radioCustBg,a=12==n()?0:1;t.checked=!0,this.clockFormat.selectedIndex=a}}(a),new class{letters=document.querySelector(".letters");prayTime=document.querySelector(".info-sholat");nameBtn=document.querySelector(".changename");nameIpt=document.getElementById("name");constructor(){null==t()&&t("Unnamed"),this.nameIpt.value=t(),this._greet(),this._initListeners()}_greet(){this.letters.innerHTML=`${u(),r<1?"Midnight":r<11?"Good Morning":r<18?"Good Afternoon":"Good Evening"}, ${t()}`,this.prayTime.innerHTML=(u(),r<2?"Menjelang Subuh":r<5?"Waktu Subuh":r<10?"Menjelang Dzuhur":r<13?"Waktu Dzuhur":r<14?"Menjelang Ashar":r<16?"Waktu Ashar":r<18?"Menjelang Maghrib":r<19?"Waktu Maghrib":"Waktu Isya")}_initListeners(){this.nameIpt.addEventListener("keyup",(()=>{t(this.nameIpt.value),this._greet()})),this.nameBtn.addEventListener("click",(()=>{t(this.nameIpt.value),this._greet()}))}},new class{calendar=document.querySelector(".dateday");clock=document.querySelector(".clock");static calendarInterval;constructor(){this.updateCalendar(),this.updateClock(),this.calendarInterval=setInterval((()=>{this.updateCalendar(),this.updateClock()}),1e3)}updateClock(){if(12==n()){const{hour:e,minute:t,meridiem:n}=d(12);this.clock.innerHTML=`${e}:${t} <span class="pm">${n}</span>`}else{const{hour:e,minute:t}=d(24);this.clock.innerHTML=`${e}:${t}`}}updateCalendar(){const{day:e,date:t,monthName:n,year:a}=g();this.calendar.innerHTML=`${e}, ${t} ${n} ${a}`}}}()})();