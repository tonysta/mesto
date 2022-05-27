export default class Section {
    constructor(renderer, selector) {
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }
    renderItems(cards, userId) {
        cards.forEach((item) => {
            const element = this._renderer(item, userId);
            this.addItem(element);
        });
    }
    addItem(itemHtml) {
        this._container.prepend(itemHtml);
    }
}