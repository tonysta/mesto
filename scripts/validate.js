const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');
const inputError = formElement.querySelector(`.${inputElement.name}-input-error`);

const showInputError = (element, errorMessage) => {
    element.classList.add('popup__input_type_error');
    inputError.textContent = errorMessage;
    inputError.classList.add('popup__input-error_type_active');
}

const hideInputError = (element) => {
    element.classList.remove('popup__input_type_error');
    inputError.classList.remove('popup__input-error_type_active');
    inputError.textContent = '';
}

const checkInputValidity = () => {
    if(inputElement.validity.valid) {
        hideInputError(inputElement);
    } else {
        showInputError(inputElement, inputElement.validationMessage);
    }
}

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

inputElement.addEventListener('input', function () {
    checkInputValidity();
});

