export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick;
    }
    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
    }
    generateCard() {
        this._element = this._getTemplate();
        this._cardImage = this._element.querySelector(".card__img");
        this._cardLikeBtn = this._element.querySelector(".card__like-btn");
        this._setEventListeners();

        this._element.querySelector(".card__title").textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        return this._element;
    }
    _setEventListeners() {
        this._cardLikeBtn.addEventListener("click", () => {
            this._likeHandler();
        });
        this._cardImage.addEventListener("click", () => {
            this._viewerHandler();
        });

        this._element.querySelector(".card__trash-btn").addEventListener("click", () => {
            this._removeHandler();
        });
    }
    _viewerHandler = () => {
        this.handleCardClick(this._link, this._name);
    }
    _removeHandler = () => {
        this._element.remove();
        this._element = null;
    }
    _likeHandler = () => {
        this._cardLikeBtn.classList.toggle("card__like-btn_active");
    }
}
