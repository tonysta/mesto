const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
}

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if(inputElement.validity.valid) {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    } else {
        showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    }
}

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(function(formElement) {
        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        })
        const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass});
        })
    })
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_type_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
});