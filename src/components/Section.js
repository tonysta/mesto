export default class Section {
    constructor({items, renderer}, selector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }
    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
    addItem(itemHtml) {
        this._container.prepend(itemHtml);
    }
}