export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }
    open() {
        this._popupSelector.classList.add("popup_type_active");
    }
    close() {
        this._popupSelector.classList.remove("popup_type_active");
    }
    _handleEscClose() {
    }
    setEventListeners() {
    }
}