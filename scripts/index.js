import Card from './Card.js';
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import {initialCards} from "./cards.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

const profileEditBtn = document.querySelector(".profile__edit-btn");
const popupProfile = document.querySelector(".popup_section_profile");
const popupCard = document.querySelector(".popup_section_card");
const viewer = document.querySelector(".viewer");
const viewerImg = document.querySelector(".viewer__img");
const viewerTitle = document.querySelector(".viewer__title");
// const closePopupBtn = document.querySelector(".popup__close-btn");
// const closePopupBtnCard = popupCard.querySelector(".popup__close-btn");
const profileForm = document.querySelector(".popup__form_type_profile");
const cardForm = document.querySelector(".popup__form_type_card");
const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
// const profileName = document.querySelector(".profile__name");
// const profileProfession = document.querySelector(".profile__profession");
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
  const openCardPopup = new PopupWithForm(".popup_section_card", (cardData) => cardList.addItem(renderCard(cardData)));
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

const cardList = new Section({
  items: initialCards,
  renderer: renderCard
}, cardContainer);

cardList.renderItems();

// cardForm.addEventListener("submit", addCard);
// profileForm.addEventListener("submit", submitProfileForm);

// function renderCard(data) {
//   const card = new Card(data, ".card__template");
//   const cardElement = card.generateCard();
//   cardContainer.prepend(cardElement);
// }
//
// initialCards.forEach((item) => {
//   renderCard(item);
// });

// function addCard(event) {
//   event.preventDefault();
//   renderCard({ name: cardName.value, link: cardLink.value });
//   closePopup(popupCard);
//   cardForm.reset();
// }

// export function openPopup(popupVersion) {
//   document.addEventListener("keydown", keyHandler);
//   popupVersion.addEventListener("mousedown", overlayHandler);
//   popupVersion.classList.add("popup_type_active");
// }

// function presetProfile() {
//   popupName.value = `${profileName.textContent}`;
//   popupProfession.value = `${profileProfession.textContent}`;
//
//   openPopup(popupProfile);
// }

// function closePopup(currentPopup) {
//   document.removeEventListener("keydown", keyHandler);
//   currentPopup.removeEventListener("mousedown", overlayHandler);
//   currentPopup.classList.remove("popup_type_active");
// }

// function submitProfileForm(event) {
//   event.preventDefault();
//
//   profileName.textContent = popupName.value;
//   profileProfession.textContent = popupProfession.value;
//
// }

// function overlayHandler(event) {
//   if (event.target === event.target.closest(".popup")) {
//     closePopup(event.target.closest(".popup"));
//   }
// }
//
// function keyHandler(event) {
//   if (event.key === "Escape") {
//     closePopup(document.querySelector(".popup_type_active"));
//   }
// }

// closePopupBtn.addEventListener("click", () => closePopup(popupProfile));

// closePopupBtnCard.addEventListener("click", () => closePopup(popupCard));
// viewer
//   .querySelector(".popup__close-btn")
//   .addEventListener("click", () => closePopup(viewer));

// profileEditBtn.addEventListener("click", presetProfile);
// addCardBtn.addEventListener("click", () => openPopup(popupCard));