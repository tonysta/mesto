export default class FormValidator {
    constructor(data, form) {
        this._form = form;
        this._data = data;
        this._inputList = Array.from(this._form.querySelectorAll(this._data.inputSelector));
    }
    enableValidation = () => {
        this._form.addEventListener('submit', function(evt) {
            evt.preventDefault();
        })

        if (!this._form.classList.contains('viewer')) {
            this._toggleButtonState();
        }

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