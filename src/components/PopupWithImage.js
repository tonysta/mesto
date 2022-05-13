import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, linkSelector, nameSelector) {
        super(popupSelector);
        this._viewerImg = document.querySelector(linkSelector);
        this._viewerTitle = document.querySelector(nameSelector);
    }
    open(link, name) {
        this._viewerImg.src = link;
        this._viewerImg.alt = name;
        this._viewerTitle.textContent = name;
        super.open();
    }
}