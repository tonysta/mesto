export default class Card {
    constructor(data, cardSelector, handleCardClick, userId, handleCardDeleteBtn) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick;
        this._likeCounter = data.likes.length;
        this._userId = userId;
        this._cardOwnerId = data.owner._id;
        this._handleCardDeleteBtn = handleCardDeleteBtn;
        this._cardId = data._id;
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
        this._cardTrashBtn = this._element.querySelector(".card__trash-btn");

        if (this._userId !== this._cardOwnerId) {
            this._cardTrashBtn.remove();
        }

        this._setEventListeners();

        this._element.querySelector(".card__title").textContent = this._name;
        this._element.querySelector(".card__like-counter").textContent = this._likeCounter;
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

        this._cardTrashBtn.addEventListener("click", () => {
            this._handleCardDeleteBtn(this._cardId);
        });
    }
    _viewerHandler = () => {
        this.handleCardClick(this._link, this._name);
    }
    removeHandler = () => {
        this._element.remove();
        this._element = null;
    }
    _likeHandler = () => {
        this._cardLikeBtn.classList.toggle("card__like-btn_active");
    }
}

