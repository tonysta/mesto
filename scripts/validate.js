const form = document.querySelector('.popup__form');
const formInput = form.querySelector('.popup__input');
const inputError = form.querySelector(`.${formInput.name}-input-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_type_active');
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_type_active');
    errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
    if(inputElement.validity.valid) {
        hideInputError(formElement, inputElement);
    } else {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
}

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

formInput.addEventListener('input', function () {
    checkInputValidity(form, formInput);
});

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    inputList.forEach(function(inputElement) {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement);
        });
    })
}

setEventListeners(form);

