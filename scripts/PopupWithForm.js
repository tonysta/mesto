import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._profileForm = document.querySelector(".popup__form_type_profile");
        this._cardForm = document.querySelector(".popup__form_type_card");
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._profileForm.querySelectorAll(".popup__input");
    }
    open() {
        super.open();
        this._popupSelector.classList.add("popup_type_active");

    }
    _getInputValues() {
        this._inputListValues = {};
        this._inputList.forEach(({name, value}) => {
            this._inputListValues[name] = value;
        })
        return this._inputListValues;
    }
    setEventListeners() {
        super.setEventListeners();

        this._profileForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this._getInputValues();
            this._handleFormSubmit(this._inputListValues);
            this.close();
        });

        this._cardForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this._getInputValues();
        })
    }
    close() {
        super.close();
        this._profileForm.reset();
    }
}