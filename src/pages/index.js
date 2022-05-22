import './index.css';

import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {initialCards} from "../utils/cards.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileForm = document.querySelector(".popup__form_type_profile");
const cardForm = document.querySelector(".popup__form_type_card");
const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
const cardContainer = ".cards-container";
const cardBtnElement = document.querySelector(".profile__add-btn");

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

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41/users/me',
  headers: {
    'authorization': '8357035a-bce9-4448-9840-71df6831b184',
    'content-type': 'application/json'
  }
})
const userInfoApi = api.getProfileInfo();
userInfoApi.then((apiData) => {
  const userInfo = new UserInfo({nameSelector: ".profile__name", professionSelector: ".profile__profession", avatarSelector: ".profile__avatar"});
  userInfo.setUserInfo(apiData);
}).catch((err) => {
  alert(err);
})

const userInfo = new UserInfo({nameSelector: ".profile__name", professionSelector: ".profile__profession", avatarSelector: "profile__avatar"});

const handleProfileFormSubmit = (data) => {
  userInfo.setUserInfo(data);
}

profileEditBtn.addEventListener("click", () => {
  const getUserInfo = userInfo.getUserInfo();
  popupName.value = getUserInfo.name;
  popupProfession.value = getUserInfo.profession;

  openProfilePopup.open();
});

const openProfilePopup = new PopupWithForm(".popup_section_profile", handleProfileFormSubmit);
openProfilePopup.setEventListeners();

cardBtnElement.addEventListener("click", () => {
  newCardValidation.toggleButtonState();
  openCardPopup.open();
});
const openCardPopup = new PopupWithForm(".popup_section_card", (cardData) => section.addItem(renderCard(cardData)));
openCardPopup.setEventListeners();

const openViewerPopup = new PopupWithImage(".viewer", ".viewer__img", ".viewer__title");
const handleCardClick = (link, name) => {
  openViewerPopup.open(link, name);
};
openViewerPopup.setEventListeners();

const renderCard = (cardData) => {
  const card = new Card(cardData, ".card__template", handleCardClick);
  return card.generateCard();
};

const section = new Section({
  items: initialCards,
  renderer: (cardData) => section.addItem(renderCard(cardData))
}, cardContainer);

section.renderItems();