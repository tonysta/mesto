let profileEditBtn = document.querySelector(".profile__edit-btn");
let popupCloseBtn = document.querySelector(".popup__close-btn");
let popup = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let popupName = document.querySelector(".popup__name");
let popupProfession = document.querySelector(".popup__profession");

function popupOpen() {
  popup.classList.remove("popup_type_inactive");
  popup.classList.add("popup_type_active");

  popupName.value = `${document.querySelector(".profile__name").textContent}`;
  popupProfession.value = `${
    document.querySelector(".profile__profession").textContent
  }`;
}

function popupClose() {
  popup.classList.remove("popup_type_active");
  popup.classList.add("popup_type_inactive");
}

profileEditBtn.addEventListener("click", popupOpen);
popupCloseBtn.addEventListener("click", popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault();

  document.querySelector(".profile__name").textContent = popupName.value;
  document.querySelector(".profile__profession").textContent =
    popupProfession.value;

  popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);
