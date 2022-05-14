import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
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

        this._popupForm.onsubmit = () => {
            this._handleFormSubmit(this._getInputValues());
            this.close();
        };
    }
    close() {
        super.close();
        this._popupForm.reset();
    }
}