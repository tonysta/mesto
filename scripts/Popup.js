export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        document.addEventListener("keydown", this._handleEscClose);
        this._popupSelector.classList.add("popup_type_active");
    }
    close() {
        document.removeEventListener("keydown", this._handleEscClose);
        this._popupSelector.classList.remove("popup_type_active");
    }
    _handleEscClose(event) {
        if (event.key === "Escape") {
        this.close();
        }
    }
    setEventListeners() {
        this._popupSelector.addEventListener('click', (event) => {
            if (event.target.classList.contains("popup__close-btn") || event.target === event.target.closest(".popup")) {
                this.close();
            }
        })
    }
}