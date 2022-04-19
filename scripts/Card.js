import {openViewer, removeCard} from "./index.js";

export default class Card {
    static _cardTemplate = document.querySelector(".card__template").content;

    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }
    _getTemplate() {
        return Card._cardTemplate.cloneNode(true);
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".card__title").textContent = this._name;
        this._element.querySelector(".card__img").src = this._link;
        this._element.querySelector(".card__img").alt = this._name;

        return this._element;
    }
    _setEventListeners() {
        this._element.querySelector(".card__like-btn")
            .addEventListener("click", function (event) {
                event.target.classList.toggle("card__like-btn_active");
            });
        this._element.querySelector(".card__img").addEventListener("click", openViewer);

        this._element.querySelector(".card__trash-btn").addEventListener("click", removeCard);
    }
}

