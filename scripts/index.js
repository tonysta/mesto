import Card from './Card.js';
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import {initialCards} from "./cards.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

const profileEditBtn = document.querySelector(".profile__edit-btn");
const popupProfile = document.querySelector(".popup_section_profile");
const popupCard = document.querySelector(".popup_section_card");
export const viewer = document.querySelector(".viewer");
export const viewerImg = document.querySelector(".viewer__img");
export const viewerTitle = document.querySelector(".viewer__title");
const closePopupBtn = document.querySelector(".popup__close-btn");
const closePopupBtnCard = popupCard.querySelector(".popup__close-btn");
const profileForm = document.querySelector(".popup__form_type_profile");
const cardForm = document.querySelector(".popup__form_type_card");
const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const cardContainer = ".cards-container";
const addCardBtn = document.querySelector(".profile__add-btn");

const cardName = popupCard.querySelector(".popup__input_type_name");
const cardLink = popupCard.querySelector(".popup__input_type_link");

// const popupSubmit = popupCard.querySelector('.popup__submit');

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

const profileValidation = new FormValidator(validationSettings, profileForm);
const newCardValidation = new FormValidator(validationSettings, cardForm);

profileValidation.enableValidation();
newCardValidation.enableValidation();

function addCard(event) {
  event.preventDefault();
  renderCard({ name: cardName.value, link: cardLink.value });
  closePopup(popupCard);
  cardForm.reset();
}

// export function openPopup(popupVersion) {
//   document.addEventListener("keydown", keyHandler);
//   popupVersion.addEventListener("mousedown", overlayHandler);
//   popupVersion.classList.add("popup_type_active");
// }

function presetProfile() {
  popupName.value = `${profileName.textContent}`;
  popupProfession.value = `${profileProfession.textContent}`;

  openPopup(popupProfile);
}

function closePopup(currentPopup) {
  document.removeEventListener("keydown", keyHandler);
  currentPopup.removeEventListener("mousedown", overlayHandler);
  currentPopup.classList.remove("popup_type_active");
}

function submitProfileForm(event) {
  event.preventDefault();

  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;

  closePopup(popupProfile);
}

function overlayHandler(event) {
  if (event.target === event.target.closest(".popup")) {
    closePopup(event.target.closest(".popup"));
  }
}

function keyHandler(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_type_active"));
  }
}

profileForm.addEventListener("submit", submitProfileForm);
closePopupBtn.addEventListener("click", () => closePopup(popupProfile));
closePopupBtnCard.addEventListener("click", () => closePopup(popupCard));
viewer
  .querySelector(".popup__close-btn")
  .addEventListener("click", () => closePopup(viewer));

// profileEditBtn.addEventListener("click", presetProfile);
// addCardBtn.addEventListener("click", () => openPopup(popupCard));
profileEditBtn.addEventListener("click", () => {
  const openProfilePopup = new PopupWithForm(popupProfile);
  openProfilePopup.open();
});
addCardBtn.addEventListener("click", () => {
  const openCardPopup = new PopupWithForm(popupCard);
  openCardPopup.open();
});

const openViewerPopup = new PopupWithImage(viewer);
const handleCardClick = (name, link) => {
  openViewerPopup.open();
};

cardForm.addEventListener("submit", addCard);

// function renderCard(data) {
//   const card = new Card(data, ".card__template");
//   const cardElement = card.generateCard();
//   cardContainer.prepend(cardElement);
// }
//
// initialCards.forEach((item) => {
//   renderCard(item);
// });

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".card__template", handleCardClick);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardContainer);

cardList.renderItems();