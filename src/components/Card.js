export default class Card {
    constructor(data, cardSelector, handleCardClick, userId, handleCardDeleteBtn, addLike, removeLike) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick;
        this._likes = data.likes;
        this._userId = userId;
        this._cardOwnerId = data.owner._id;
        this._handleCardDeleteBtn = handleCardDeleteBtn;
        this.cardId = data._id;
        this._addLike = addLike;
        this._removeLike = removeLike;
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
        this.renderCounter();
        this._element.querySelector(".card__title").textContent = this._name;

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        return this._element;
    }
    updateLikes = (likes) => {
        this._likes = likes;
    }
    renderCounter = () => {
        this._element.querySelector(".card__like-counter").textContent = this._likes.length;
        const hasMyLike = this._likes.some(like => like._id === this._userId);
        if (hasMyLike) {
            this._cardLikeBtn.classList.add("card__like-btn_active");
        } else {
            this._cardLikeBtn.classList.remove("card__like-btn_active");
        }
    }
    _setEventListeners() {
        this._cardLikeBtn.addEventListener("click", (evt) => {
            if (!evt.target.classList.contains("card__like-btn_active")) {
                this._addLike(this);
            } else {
                this._removeLike(this);
            }
        });

        this._cardImage.addEventListener("click", () => {
            this._viewerHandler();
        });

        this._cardTrashBtn.addEventListener("click", () => {
            this._handleCardDeleteBtn(this);
        });
    }

    _viewerHandler = () => {
        this.handleCardClick(this._link, this._name);
    }
    removeCard = () => {
        this._element.remove();
        this._element = null;
    }
}


