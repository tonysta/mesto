const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');

const showInputError = (element) => {
    element.classList.add('popup__input_type_error');
}

const hideInputError = (element) => {
    element.classList.remove('popup__input_type_error');
}

const checkInputValidity = () => {
    if(inputElement.validity.valid) {
        hideInputError(inputElement);
    } else {
        showInputError(inputElement);
    }
}

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

inputElement.addEventListener('input', function () {
    checkInputValidity();
});

