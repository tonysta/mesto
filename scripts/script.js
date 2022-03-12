let profileEditBtn = document.querySelector(".profile__edit-btn");
let popupCloseBtn = document.querySelector(".popup__close-btn");
let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let popupName = document.querySelector(".popup__input_type_name");
let popupProfession = document.querySelector(".popup__input_type_profession");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

function popupOpen() {
  popup.classList.add("popup_type_active");

  popupName.value = `${profileName.textContent}`;
  popupProfession.value = `${profileProfession.textContent}`;
}

function popupClose() {
  popup.classList.remove("popup_type_active");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;

  popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);
profileEditBtn.addEventListener("click", popupOpen);
popupCloseBtn.addEventListener("click", popupClose);
