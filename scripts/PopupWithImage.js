import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, link, name) {
        super(popupSelector);
        this._viewerImg = link;
        this._viewerTitle = name;
    }
    open(link, name) {
        this._viewerImg.src = link;
        this._viewerImg.alt = name;
        this._viewerTitle.textContent = name;
        super.open();
    }
}