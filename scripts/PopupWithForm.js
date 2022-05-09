import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open() {
        this._popupSelector.classList.add("popup_type_active");

    }
}