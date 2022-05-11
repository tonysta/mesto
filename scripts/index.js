import Card from './Card.js';
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import {initialCards} from "./cards.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const profileEditBtn = document.querySelector(".profile__edit-btn");
const viewerImg = document.querySelector(".viewer__img");
const viewerTitle = document.querySelector(".viewer__title");
const profileForm = document.querySelector(".popup__form_type_profile");
const cardForm = document.querySelector(".popup__form_type_card");
const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
const cardContainer = ".cards-container";
const addCardBtn = document.querySelector(".profile__add-btn");

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

const userInfo = new UserInfo({name: ".profile__name", profession: ".profile__profession"});

const handleFormSubmit = (data) => {
  userInfo.setUserInfo(data);
}

profileEditBtn.addEventListener("click", () => {
  const openProfilePopup = new PopupWithForm(".popup_section_profile", handleFormSubmit);

  const getUserInfo = userInfo.getUserInfo();
  popupName.value = getUserInfo.name;
  popupProfession.value = getUserInfo.profession;

  openProfilePopup.open();
  openProfilePopup.setEventListeners();
});
addCardBtn.addEventListener("click", () => {
  const openCardPopup = new PopupWithForm(".popup_section_card", (cardData) => section.addItem(renderCard(cardData)));
  openCardPopup.open();
  openCardPopup.setEventListeners();
});
const openViewerPopup = new PopupWithImage(".viewer", viewerImg, viewerTitle);
const handleCardClick = (link, name) => {
  openViewerPopup.open(link, name);
};
openViewerPopup.setEventListeners();

const renderCard = (cardData) => {
  const card = new Card(cardData, ".card__template", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const section = new Section({
  items: initialCards,
  renderer: renderCard
}, cardContainer);

section.renderItems();