import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._viewerImg = document.querySelector(".viewer__img");
        this._viewerTitle = document.querySelector(".viewer__title");
    }
    open() {
        super.open();
    }
}