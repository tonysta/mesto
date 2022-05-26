import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup{
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector(".popup__form");
    }
    setEventListeners() {
        super.setEventListeners();

        this._popupForm.onsubmit = (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._card)
            this.close();
        }
    }
    getCardId(card) {
        this._card = card;
    }
}