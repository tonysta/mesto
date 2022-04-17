class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
    }
    _getTemplate() {
        return cardTemplate.content.cloneNode(true);
    }
    _generateCard() {
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
    renderCard() {
        const card = this._generateCard();
        cardContainer.prepend(card);
    }
}

initialCards.forEach((item) => {
    const card = new Card(item);
    card.renderCard();
});