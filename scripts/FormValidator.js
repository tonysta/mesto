export default class FormValidator {
    constructor(data, form) {
    this._form = form;
    this._data = data;
    }
    enableValidation = () => {
        this._form.addEventListener('submit', function(evt) {
            evt.preventDefault();
        })
        this._setEventListeners();
    }
    _setEventListeners = () => {
        this._fieldset = this._form.querySelector('.popup__fieldset');
        this._inputList = Array.from(this._fieldset.querySelectorAll(this._data.inputSelector));
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }
    _toggleButtonState = () => {
        this._buttonElement = this._form.querySelector(this._data.submitButtonSelector);

        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._data.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._data.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }
    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }
    _checkInputValidity = (inputElement) => {
        if(inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }
    _showInputError = (inputElement) => {
        this._errorElement = this._form.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.add(this._data.inputErrorClass);
        this._errorElement.textContent = inputElement.validationMessage;
        this._errorElement.classList.add(this._data.errorClass);
    }

    _hideInputError = (inputElement) => {
        this._errorElement = this._form.querySelector(`.${inputElement.name}-error`);
        inputElement.classList.remove(this._data.inputErrorClass);
        this._errorElement.classList.remove(this._data.errorClass);
        this._errorElement.textContent = '';
    }
}




// const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
//     const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
//     inputElement.classList.add(inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(errorClass);
// }
//
// const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
//     const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
//     inputElement.classList.remove(inputErrorClass);
//     errorElement.classList.remove(errorClass);
//     errorElement.textContent = '';
// }
//
// const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
//     if(inputElement.validity.valid) {
//         hideInputError(formElement, inputElement, inputErrorClass, errorClass);
//     } else {
//         showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
//     }
// }
//
// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//         return !inputElement.validity.valid;
//     })
// }
//
// const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
//     if (hasInvalidInput(inputList)) {
//         buttonElement.classList.add(inactiveButtonClass);
//         buttonElement.disabled = true;
//     } else {
//         buttonElement.classList.remove(inactiveButtonClass);
//         buttonElement.disabled = false;
//     }
// }
//
// const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
//     const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//     const buttonElement = formElement.querySelector(submitButtonSelector);
//     toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//
//     inputList.forEach((inputElement) => {
//         inputElement.addEventListener('input', function () {
//             checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
//             toggleButtonState(inputList, buttonElement, inactiveButtonClass);
//         });
//     });
// };
//
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
