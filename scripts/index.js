import Card from './Card.js';

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
const cardContainer = document.querySelector(".cards-container");
const addCardBtn = document.querySelector(".profile__add-btn");

const cardName = popupCard.querySelector(".popup__input_type_name");
const cardLink = popupCard.querySelector(".popup__input_type_link");

const popupSubmit = popupCard.querySelector('.popup__submit');
// const cardTemplate = document.querySelector(".card__template");
/*
function createCard(element) {
  const cardNode = cardTemplate.content.cloneNode(true);

  cardNode.querySelector(".card__title").textContent = element.name;
  cardNode.querySelector(".card__img").src = element.link;
  cardNode.querySelector(".card__img").alt = element.name;

  cardNode
    .querySelector(".card__like-btn")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("card__like-btn_active");
    });

  cardNode.querySelector(".card__img").addEventListener("click", openViewer);

  cardNode
    .querySelector(".card__trash-btn")
    .addEventListener("click", removeCard);

  return cardNode;
}

function renderCard(cardData) {
  const card = createCard(cardData);
  cardContainer.prepend(card);
}
*/

// export function openViewer(event) {
//   const viewerImg = event.target.src;
//   const viewerTitle = event.target.alt;
//
//   viewer.querySelector(".viewer__img").src = viewerImg;
//   viewer.querySelector(".viewer__img").alt = viewerTitle;
//   viewer.querySelector(".viewer__title").textContent = viewerTitle;
//
//   openPopup(viewer);
// }

function addCard(event) {
  event.preventDefault();
  renderCard({ name: cardName.value, link: cardLink.value });
  closePopup(popupCard);
  cardName.value = "";
  cardLink.value = "";
  resetButton();
}

function resetButton() {
  popupSubmit.classList.add('popup__submit_type_inactive');
  popupSubmit.disabled = true;
}

// export function removeCard(event) {
//   const cardItem = event.target.closest(".card");
//   cardItem.remove();
// }

export function openPopup(popupVersion) {
  document.addEventListener("keydown", keyHandler);
  popupVersion.addEventListener("mousedown", overlayHandler);
  popupVersion.classList.add("popup_type_active");
}

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
profileEditBtn.addEventListener("click", presetProfile);
closePopupBtn.addEventListener("click", () => closePopup(popupProfile));
closePopupBtnCard.addEventListener("click", () => closePopup(popupCard));
viewer
  .querySelector(".popup__close-btn")
  .addEventListener("click", () => closePopup(viewer));
addCardBtn.addEventListener("click", () => openPopup(popupCard));
cardForm.addEventListener("submit", addCard);

// initialCards.forEach(renderCard);

function renderCard(data) {
  const card = new Card(data, ".card__template");
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
}

initialCards.forEach((item) => {
  renderCard(item);
});