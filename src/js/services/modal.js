import { readAsDataURL } from "../utils/file.js";
import { isLiveBg, time_format } from "../utils/storage.js";

class Modal {
    modal = document.querySelector(".modal-overlay");
    closeBtn = document.querySelector('.closebtn');
    settingsBtn = document.querySelector('.settings');

    radioLiveBg = document.getElementById('live-background');
    radioCustBg = document.getElementById('custom-background');

    imageBtn = document.getElementById('upload_button');
    imageIpt = document.getElementById('files');

    clockFormat = document.getElementById('myclock');

    constructor(background) {
        this.background = background;
        this._initListeners();
        this._setValues();
    }

    show = () => this.modal.style.display = 'block';
    hide = () => this.modal.style.display = 'none';

    async handleImageUpload(ev) {
        const file = ev.target.files[0];

        if(!file.type.match('image.*')) {
            alert('Not an valid image');
            return;
        };

        const imgText = await readAsDataURL(file);
        this.background.setBackground(imgText);
    }

    _initListeners() {
        this.settingsBtn.addEventListener('click', () => this.show());
        this.closeBtn.addEventListener('click', () => this.hide());

        this.radioLiveBg.addEventListener('click', () => this.background.liveBackground());
        this.radioCustBg.addEventListener('click', () => this.background.customBackground());

        this.imageBtn.addEventListener('click', () => this.imageIpt.click());
        this.imageIpt.addEventListener('change', (e) => this.handleImageUpload(e));

        this.clockFormat.addEventListener('change', () => time_format(this.clockFormat.value));
    }

    _setValues() {
        const radioBtn = isLiveBg() ? this.radioLiveBg : this.radioCustBg;
        const selectIndex = time_format() == 12 ? 0 : 1;

        radioBtn.checked = true;
        this.clockFormat.selectedIndex = selectIndex;
    }
}

export default Modal;
