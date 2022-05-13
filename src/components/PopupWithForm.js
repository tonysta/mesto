import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._popupForm = this._popup.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
    }
    open() {
        super.open();
        this._popupElement.classList.add("popup_type_active");
    }
    _getInputValues() {
        const inputListValues = {};
        this._inputList.forEach(({name, value}) => {
            inputListValues[name] = value;
        })
        return inputListValues;
    }
    setEventListeners() {
        super.setEventListeners();

        this._popupForm.onsubmit = (event) => {
            event.preventDefault();

            this._handleFormSubmit(this._getInputValues());
            this.close();
        };
    }
    close() {
        super.close();
        this._popupForm.reset();
    }
}